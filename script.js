/* ═══════════════════════════════════════════════════════════════════════════
   🎆 NEW YEAR SURPRISE WEBSITE - ENHANCED JAVASCRIPT
   ═══════════════════════════════════════════════════════════════════════════
   Features: 
   - Language Toggle (Hindi/English)
   - Dark/Light Theme Mode
   - Back Button Navigation
   - All Interactive Elements
   Version: 2.0.0
   ═══════════════════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════════════════
// 🌐 GLOBAL VARIABLES & STATE MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════════

const AppState = {
    // Navigation
    currentPage: 1,
    totalPages: 5,
    pageHistory: [1],
    isTransitioning: false,
    
    // Settings
    currentLang: 'en', // 'en' or 'hi'
    currentTheme: 'dark', // 'dark' or 'light'
    isMuted: true,
    isLoaded: false,
    
    // Page 1: Heart Hold
    heartHoldProgress: 0,
    isHolding: false,
    holdStartTime: null,
    holdDuration: 2500, // 2.5 seconds
    holdAnimationFrame: null,
    
    // Page 2: Cards
    cardsRemoved: 0,
    totalCards: 5,
    
    // Page 4: Polaroid
    currentPolaroid: 0,
    totalPolaroids: 3,
    
    // Page 5: Final Card
    isCardFlipped: false,
    fireworksInterval: null
};

// DOM Element Cache
const DOM = {};

// ═══════════════════════════════════════════════════════════════════════════
// 🚀 INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', init);

function init() {
    console.log('🎆 Initializing New Year Surprise v2.0...');
    
    // Cache DOM Elements
    cacheDOMElements();
    
    // Create dynamic elements
    createBackButton();
    createThemeToggle();
    
    // Load saved preferences
    loadPreferences();
    
    // Initialize all modules
    initPreloader();
    initLanguageToggle();
    initThemeToggle();
    initSoundToggle();
    initBackButton();
    initParticles();
    initFloatingHearts();
    initStars();
    initHeartHold();
    initDraggableCards();
    initGiftBox();
    initPolaroidGallery();
    initFinalCard();
    
    // Prevent default touch behaviors
    preventDefaultBehaviors();
    
    // Initialize keyboard support
    initKeyboardSupport();
    
    console.log('✅ Initialization complete!');
}

function cacheDOMElements() {
    // Preloader
    DOM.preloader = document.getElementById('preloader');
    
    // Control buttons container
    DOM.controlButtons = document.querySelector('.control-buttons');
    
    // Sound & Language
    DOM.soundToggle = document.getElementById('soundToggle');
    DOM.langToggle = document.getElementById('langToggle');
    DOM.bgMusic = document.getElementById('bgMusic');
    
    // Particles
    DOM.particlesBg = document.getElementById('particles-bg');
    DOM.floatingHearts = document.getElementById('floating-hearts');
    DOM.starsBg = document.getElementById('stars-bg');
    
    // Pages
    DOM.mainContainer = document.getElementById('mainContainer');
    DOM.pages = document.querySelectorAll('.page');
    DOM.page1 = document.getElementById('page1');
    DOM.page2 = document.getElementById('page2');
    DOM.page3 = document.getElementById('page3');
    DOM.page4 = document.getElementById('page4');
    DOM.page5 = document.getElementById('page5');
    
    // Page 1 Elements
    DOM.heartHoldContainer = document.getElementById('heartHoldContainer');
    DOM.heartIcon = document.getElementById('heartIcon');
    DOM.progressRingCircle = document.querySelector('.progress-ring-circle');
    DOM.holdPercentage = document.getElementById('holdPercentage');
    
    // Page 2 Elements
    DOM.cardsArea = document.getElementById('cardsArea');
    DOM.distractionCards = document.querySelectorAll('.distraction-card');
    DOM.hiddenGift = document.getElementById('hiddenGift');
    DOM.progressDots = document.querySelectorAll('.progress-dot');
    
    // Page 3 Elements
    DOM.giftRevealContainer = document.getElementById('giftRevealContainer');
    DOM.giftBox = document.getElementById('giftBox');
    DOM.giftBoxWrapper = document.getElementById('giftBoxWrapper');
    DOM.goldenTicketContainer = document.getElementById('goldenTicketContainer');
    DOM.claimTicketBtn = document.getElementById('claimTicketBtn');
    DOM.confettiContainer = document.getElementById('confettiContainer');
    
    // Page 4 Elements
    DOM.polaroidGallery = document.getElementById('polaroidGallery');
    DOM.polaroidFrames = document.querySelectorAll('.polaroid-frame');
    DOM.polaroidNavDots = document.querySelectorAll('.nav-dot');
    
    // Page 5 Elements
    DOM.finalCard = document.getElementById('finalCard');
    DOM.fireworksContainer = document.getElementById('fireworksContainer');
    DOM.finalActions = document.getElementById('finalActions');
    DOM.replayBtn = document.getElementById('replayBtn');
    DOM.shareBtn = document.getElementById('shareBtn');
}

function createBackButton() {
    // Create back button dynamically
    const backButton = document.createElement('button');
    backButton.id = 'backButton';
    backButton.className = 'back-button';
    backButton.setAttribute('aria-label', 'Go Back');
    backButton.innerHTML = `<span class="back-arrow">←</span>`;
    
    document.body.appendChild(backButton);
    DOM.backButton = backButton;
}

function createThemeToggle() {
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'themeToggle';
    themeToggle.className = 'control-btn theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle Theme');
    themeToggle.innerHTML = `
        <span class="theme-dark">🌙</span>
        <span class="theme-light">☀️</span>
    `;
    
    // Insert into control buttons
    if (DOM.controlButtons) {
        DOM.controlButtons.insertBefore(themeToggle, DOM.controlButtons.firstChild);
    }
    
    DOM.themeToggle = themeToggle;
}

function preventDefaultBehaviors() {
    // Prevent pull-to-refresh and overscroll
    document.body.addEventListener('touchmove', (e) => {
        if (e.target.closest('.message-container')) return;
        if (e.target.closest('.polaroid-gallery')) return;
        e.preventDefault();
    }, { passive: false });
    
    // Prevent context menu on long press
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    
    // Prevent double-tap zoom
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// ═══════════════════════════════════════════════════════════════════════════
// 💾 LOCAL STORAGE - SAVE/LOAD PREFERENCES
// ═══════════════════════════════════════════════════════════════════════════

function loadPreferences() {
    try {
        // Load language preference
        const savedLang = localStorage.getItem('ny_surprise_lang');
        if (savedLang && ['en', 'hi'].includes(savedLang)) {
            AppState.currentLang = savedLang;
            applyLanguage(savedLang);
        }
        
        // Load theme preference
        const savedTheme = localStorage.getItem('ny_surprise_theme');
        if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
            AppState.currentTheme = savedTheme;
            applyTheme(savedTheme);
        }
        
        // Load sound preference
        const savedMuted = localStorage.getItem('ny_surprise_muted');
        if (savedMuted !== null) {
            AppState.isMuted = savedMuted === 'true';
        }
        
        console.log('📦 Preferences loaded:', {
            lang: AppState.currentLang,
            theme: AppState.currentTheme,
            muted: AppState.isMuted
        });
    } catch (e) {
        console.log('⚠️ Could not load preferences:', e);
    }
}

function savePreference(key, value) {
    try {
        localStorage.setItem(`ny_surprise_${key}`, value);
    } catch (e) {
        console.log('⚠️ Could not save preference:', e);
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🌐 LANGUAGE TOGGLE SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

function initLanguageToggle() {
    if (!DOM.langToggle) return;
    
    DOM.langToggle.addEventListener('click', toggleLanguage);
    
    // Apply initial language
    applyLanguage(AppState.currentLang);
    updateLangToggleUI();
}

function toggleLanguage() {
    const newLang = AppState.currentLang === 'en' ? 'hi' : 'en';
    AppState.currentLang = newLang;
    
    applyLanguage(newLang);
    updateLangToggleUI();
    savePreference('lang', newLang);
    
    // Button animation
    animateButton(DOM.langToggle);
    
    // Vibration feedback
    vibrate(30);
    
    console.log('🌐 Language changed to:', newLang);
}

function applyLanguage(lang) {
    if (lang === 'hi') {
        document.body.classList.add('lang-hi');
        document.body.classList.remove('lang-en');
        document.documentElement.lang = 'hi';
    } else {
        document.body.classList.remove('lang-hi');
        document.body.classList.add('lang-en');
        document.documentElement.lang = 'en';
    }
}

function updateLangToggleUI() {
    if (!DOM.langToggle) return;
    
    const enSpan = DOM.langToggle.querySelector('.lang-en');
    const hiSpan = DOM.langToggle.querySelector('.lang-hi');
    
    if (AppState.currentLang === 'hi') {
        enSpan?.classList.remove('active');
        hiSpan?.classList.add('active');
    } else {
        enSpan?.classList.add('active');
        hiSpan?.classList.remove('active');
    }
}

// Translation helper function (for dynamic text)
function t(enText, hiText) {
    return AppState.currentLang === 'hi' ? hiText : enText;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🌓 THEME TOGGLE SYSTEM (Dark/Light Mode)
// ═══════════════════════════════════════════════════════════════════════════

function initThemeToggle() {
    if (!DOM.themeToggle) return;
    
    DOM.themeToggle.addEventListener('click', toggleTheme);
    
    // Apply initial theme
    applyTheme(AppState.currentTheme);
    updateThemeToggleUI();
}

function toggleTheme() {
    const newTheme = AppState.currentTheme === 'dark' ? 'light' : 'dark';
    AppState.currentTheme = newTheme;
    
    applyTheme(newTheme);
    updateThemeToggleUI();
    savePreference('theme', newTheme);
    
    // Button animation
    animateButton(DOM.themeToggle);
    
    // Vibration feedback
    vibrate(30);
    
    console.log('🌓 Theme changed to:', newTheme);
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    }
    
    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.content = theme === 'light' ? '#f0f0ff' : '#1a1a2e';
    }
}

function updateThemeToggleUI() {
    if (!DOM.themeToggle) return;
    
    const darkIcon = DOM.themeToggle.querySelector('.theme-dark');
    const lightIcon = DOM.themeToggle.querySelector('.theme-light');
    
    if (AppState.currentTheme === 'light') {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'block';
    } else {
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// ⬅️ BACK BUTTON SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

function initBackButton() {
    if (!DOM.backButton) return;
    
    DOM.backButton.addEventListener('click', goBack);
    
    // Update visibility based on current page
    updateBackButtonVisibility();
}

function goBack() {
    if (AppState.isTransitioning) return;
    if (AppState.currentPage <= 1) return;
    
    console.log('⬅️ Going back from page', AppState.currentPage);
    
    // Vibration feedback
    vibrate(30);
    
    // Remove current page from history
    AppState.pageHistory.pop();
    
    // Get previous page
    const previousPage = AppState.pageHistory[AppState.pageHistory.length - 1] || 1;
    
    // Navigate to previous page with back animation
    goToPage(previousPage, 'back');
}

function updateBackButtonVisibility() {
    if (!DOM.backButton) return;
    
    if (AppState.currentPage > 1) {
        DOM.backButton.classList.add('visible');
    } else {
        DOM.backButton.classList.remove('visible');
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// ⏳ PRELOADER
// ═══════════════════════════════════════════════════════════════════════════

function initPreloader() {
    const minLoadTime = 2800;
    const startTime = Date.now();
    
    window.addEventListener('load', () => {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minLoadTime - elapsed);
        
        setTimeout(() => {
            hidePreloader();
        }, remaining);
    });
    
    // Fallback
    if (document.readyState === 'complete') {
        setTimeout(hidePreloader, minLoadTime);
    }
}

function hidePreloader() {
    if (AppState.isLoaded) return;
    AppState.isLoaded = true;
    
    DOM.preloader.classList.add('hidden');
    
    // Start background animations
    setTimeout(() => {
        startContinuousParticles();
        startContinuousHearts();
    }, 500);
    
    console.log('✅ Preloader hidden');
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔊 SOUND TOGGLE
// ═══════════════════════════════════════════════════════════════════════════

function initSoundToggle() {
    if (!DOM.bgMusic || !DOM.soundToggle) return;
    
    DOM.bgMusic.volume = 0.5;
    
    // Apply saved mute state
    if (AppState.isMuted) {
        DOM.soundToggle.classList.add('muted');
    }
    
    DOM.soundToggle.addEventListener('click', toggleSound);
    
    // Try autoplay on first interaction
    document.addEventListener('click', tryAutoplay, { once: true });
    document.addEventListener('touchstart', tryAutoplay, { once: true });
}

function toggleSound() {
    AppState.isMuted = !AppState.isMuted;
    
    if (AppState.isMuted) {
        DOM.bgMusic.pause();
        DOM.soundToggle.classList.add('muted');
    } else {
        playMusic();
        DOM.soundToggle.classList.remove('muted');
    }
    
    savePreference('muted', AppState.isMuted);
    animateButton(DOM.soundToggle);
    vibrate(30);
}

function tryAutoplay() {
    if (!AppState.isMuted) {
        playMusic();
    }
}

function playMusic() {
    if (!DOM.bgMusic) return;
    
    const playPromise = DOM.bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log('🎵 Music playing');
            AppState.isMuted = false;
            DOM.soundToggle?.classList.remove('muted');
        }).catch((error) => {
            console.log('⚠️ Autoplay prevented:', error);
            AppState.isMuted = true;
            DOM.soundToggle?.classList.add('muted');
        });
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// ✨ PARTICLE SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

function initParticles() {
    if (!DOM.particlesBg) return;
    
    // Create initial batch
    for (let i = 0; i < 25; i++) {
        setTimeout(() => createParticle(), i * 120);
    }
}

function createParticle() {
    if (!DOM.particlesBg) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random type
    const types = ['star', 'dot', 'glow'];
    const type = types[Math.floor(Math.random() * types.length)];
    particle.classList.add(type);
    
    // Random position
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = (100 + Math.random() * 20) + 'vh';
    
    // Random animation
    const duration = 12 + Math.random() * 18;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = Math.random() * 3 + 's';
    
    DOM.particlesBg.appendChild(particle);
    
    // Cleanup
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
        }
    }, (duration + 5) * 1000);
}

function startContinuousParticles() {
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            createParticle();
        }
    }, 1000);
}

// ═══════════════════════════════════════════════════════════════════════════
// 💕 FLOATING HEARTS
// ═══════════════════════════════════════════════════════════════════════════

function initFloatingHearts() {
    if (!DOM.floatingHearts) return;
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => createFloatingHeart(), i * 250);
    }
}

function createFloatingHeart() {
    if (!DOM.floatingHearts) return;
    
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    
    const hearts = ['💕', '💖', '💗', '💝', '💓', '❤️', '🩷', '🩵', '💜'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (0.8 + Math.random() * 1.4) + 'rem';
    
    const duration = 18 + Math.random() * 15;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 4 + 's';
    
    DOM.floatingHearts.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.remove();
        }
    }, (duration + 5) * 1000);
}

function startContinuousHearts() {
    setInterval(() => {
        if (document.visibilityState === 'visible') {
            createFloatingHeart();
        }
    }, 2500);
}

// ═══════════════════════════════════════════════════════════════════════════
// ⭐ BACKGROUND STARS
// ═══════════════════════════════════════════════════════════════════════════

function initStars() {
    if (!DOM.starsBg) return;
    
    // Create static twinkling stars
    for (let i = 0; i < 50; i++) {
        createStar();
    }
}

function createStar() {
    if (!DOM.starsBg) return;
    
    const star = document.createElement('div');
    star.className = 'bg-star';
    
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = (2 + Math.random() * 3) + 's';
    star.style.animationDelay = Math.random() * 3 + 's';
    
    DOM.starsBg.appendChild(star);
}

// ═══════════════════════════════════════════════════════════════════════════
// ❤️ PAGE 1: HEART HOLD INTERACTION
// ═══════════════════════════════════════════════════════════════════════════

function initHeartHold() {
    const container = DOM.heartHoldContainer;
    if (!container) return;
    
    // Mouse Events
    container.addEventListener('mousedown', startHold);
    document.addEventListener('mouseup', endHold);
    document.addEventListener('mouseleave', endHold);
    
    // Touch Events
    container.addEventListener('touchstart', startHold, { passive: true });
    document.addEventListener('touchend', endHold);
    document.addEventListener('touchcancel', endHold);
    
    // Calculate circle circumference
    if (DOM.progressRingCircle) {
        const radius = parseFloat(DOM.progressRingCircle.getAttribute('r')) || 80;
        const circumference = 2 * Math.PI * radius;
        DOM.progressRingCircle.style.strokeDasharray = circumference;
        DOM.progressRingCircle.style.strokeDashoffset = circumference;
        DOM.progressRingCircle.dataset.circumference = circumference;
    }
}

function startHold(e) {
    if (AppState.currentPage !== 1 || AppState.isTransitioning) return;
    
    AppState.isHolding = true;
    AppState.holdStartTime = Date.now();
    
    DOM.heartHoldContainer?.classList.add('holding');
    
    vibrate(50);
    
    // Start progress animation
    updateHoldProgress();
    
    console.log('💓 Hold started');
}

function updateHoldProgress() {
    if (!AppState.isHolding) return;
    
    const elapsed = Date.now() - AppState.holdStartTime;
    const progress = Math.min(elapsed / AppState.holdDuration, 1);
    
    // Update progress ring
    if (DOM.progressRingCircle) {
        const circumference = parseFloat(DOM.progressRingCircle.dataset.circumference) || 502.65;
        const offset = circumference * (1 - progress);
        DOM.progressRingCircle.style.strokeDashoffset = offset;
    }
    
    // Update percentage
    if (DOM.holdPercentage) {
        const percentage = Math.round(progress * 100);
        DOM.holdPercentage.textContent = percentage + '%';
    }
    
    // Scale heart
    const heartEmoji = DOM.heartIcon?.querySelector('.heart-emoji');
    if (heartEmoji) {
        const scale = 1 + (progress * 0.25);
        heartEmoji.style.transform = `scale(${scale})`;
    }
    
    if (progress >= 1) {
        completeHold();
    } else {
        AppState.holdAnimationFrame = requestAnimationFrame(updateHoldProgress);
    }
}

function endHold() {
    if (!AppState.isHolding) return;
    
    AppState.isHolding = false;
    
    if (AppState.holdAnimationFrame) {
        cancelAnimationFrame(AppState.holdAnimationFrame);
    }
    
    const elapsed = Date.now() - AppState.holdStartTime;
    if (elapsed < AppState.holdDuration) {
        resetHoldProgress();
    }
}

function resetHoldProgress() {
    if (DOM.progressRingCircle) {
        const circumference = parseFloat(DOM.progressRingCircle.dataset.circumference) || 502.65;
        DOM.progressRingCircle.style.transition = 'stroke-dashoffset 0.3s ease';
        DOM.progressRingCircle.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            if (DOM.progressRingCircle) {
                DOM.progressRingCircle.style.transition = '';
            }
        }, 300);
    }
    
    DOM.heartHoldContainer?.classList.remove('holding');
    
    if (DOM.holdPercentage) {
        DOM.holdPercentage.textContent = '0%';
    }
    
    const heartEmoji = DOM.heartIcon?.querySelector('.heart-emoji');
    if (heartEmoji) {
        heartEmoji.style.transform = 'scale(1)';
    }
}

function completeHold() {
    console.log('💖 Hold complete!');
    
    AppState.isHolding = false;
    
    DOM.heartHoldContainer?.classList.remove('holding');
    DOM.heartHoldContainer?.classList.add('complete');
    
    vibrate([100, 50, 100]);
    playSuccessSound();
    
    setTimeout(() => {
        goToPage(2);
    }, 700);
}

function playSuccessSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 880;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        // Audio not supported
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🃏 PAGE 2: DRAGGABLE CARDS
// ═══════════════════════════════════════════════════════════════════════════

function initDraggableCards() {
    DOM.distractionCards.forEach((card, index) => {
        card.dataset.index = index;
        card.dataset.removed = 'false';
        initCardDrag(card);
    });
    
    // Gift click handler
    DOM.hiddenGift?.addEventListener('click', onGiftClick);
    DOM.hiddenGift?.addEventListener('touchend', onGiftClick);
}

function initCardDrag(card) {
    let isDragging = false;
    let startX, startY;
    let currentX = 0, currentY = 0;
    let initialTransform;
    
    function dragStart(e) {
        if (card.dataset.removed === 'true') return;
        if (AppState.currentPage !== 2) return;
        
        isDragging = true;
        card.classList.add('dragging');
        
        // Store initial transform
        initialTransform = card.style.transform;
        
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - currentX;
        startY = clientY - currentY;
        
        card.style.zIndex = '100';
    }
    
    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        currentX = clientX - startX;
        currentY = clientY - startY;
        
        const rotation = currentX * 0.08;
        card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg) scale(1.05)`;
    }
    
    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        card.classList.remove('dragging');
        
        // Calculate distance from start
        const distance = Math.sqrt(currentX * currentX + currentY * currentY);
        const threshold = 100;
        
        if (distance > threshold) {
            removeCard(card, currentX, currentY);
        } else {
            // Snap back
            card.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.transform = `rotate(var(--card-rotation)) translate(var(--card-x), var(--card-y))`;
            card.style.zIndex = '';
            
            setTimeout(() => {
                card.style.transition = '';
            }, 400);
            
            currentX = 0;
            currentY = 0;
        }
    }
    
    // Mouse events
    card.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    // Touch events
    card.addEventListener('touchstart', dragStart, { passive: true });
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', dragEnd);
}

function removeCard(card, dirX, dirY) {
    card.dataset.removed = 'true';
    card.classList.add('removed');
    
    const angle = Math.atan2(dirY, dirX);
    const distance = 600;
    const finalX = Math.cos(angle) * distance;
    const finalY = Math.sin(angle) * distance;
    
    card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
    card.style.transform = `translate(${finalX}px, ${finalY}px) rotate(${finalX * 0.15}deg) scale(0.8)`;
    card.style.opacity = '0';
    
    AppState.cardsRemoved++;
    updateCardProgress();
    
    vibrate(40);
    
    console.log(`🃏 Card removed: ${AppState.cardsRemoved}/${AppState.totalCards}`);
    
    if (AppState.cardsRemoved >= AppState.totalCards) {
        setTimeout(revealGift, 500);
    }
}

function updateCardProgress() {
    DOM.progressDots.forEach((dot, index) => {
        if (index < AppState.cardsRemoved) {
            dot.classList.add('completed');
        }
    });
    
    const progress = AppState.cardsRemoved / AppState.totalCards;
    
    if (DOM.hiddenGift) {
        DOM.hiddenGift.style.opacity = progress * 0.6;
        DOM.hiddenGift.style.filter = `blur(${10 - progress * 10}px)`;
    }
}

function revealGift() {
    if (DOM.hiddenGift) {
        DOM.hiddenGift.classList.add('revealed');
        DOM.hiddenGift.style.opacity = '1';
        DOM.hiddenGift.style.filter = 'blur(0)';
    }
    
    vibrate([50, 30, 50]);
    console.log('🎁 Gift revealed!');
}

function onGiftClick(e) {
    if (AppState.cardsRemoved < AppState.totalCards) return;
    if (AppState.currentPage !== 2) return;
    
    e.preventDefault();
    vibrate([50, 30, 50]);
    
    goToPage(3);
}

// ═══════════════════════════════════════════════════════════════════════════
// 🎁 PAGE 3: GIFT BOX & GOLDEN TICKET
// ═══════════════════════════════════════════════════════════════════════════

function initGiftBox() {
    DOM.giftBoxWrapper?.addEventListener('click', openGiftBox);
    DOM.giftBoxWrapper?.addEventListener('touchend', openGiftBox);
    
    DOM.claimTicketBtn?.addEventListener('click', claimTicket);
}

function openGiftBox(e) {
    if (AppState.currentPage !== 3) return;
    if (DOM.giftBox?.classList.contains('opening')) return;
    
    e.preventDefault();
    
    console.log('🎁 Opening gift box...');
    
    DOM.giftBox?.classList.add('opening');
    
    vibrate([100, 50, 100, 50, 200]);
    
    // Confetti
    setTimeout(() => {
        createConfettiExplosion();
    }, 500);
    
    // Show golden ticket
    setTimeout(() => {
        DOM.giftRevealContainer?.classList.add('hidden');
        DOM.goldenTicketContainer?.classList.add('visible');
    }, 900);
}

function createConfettiExplosion() {
    const colors = [
        '#ff6b9d', '#c44eff', '#4facfe', '#ffd700', 
        '#ff6b6b', '#48dbfb', '#1dd1a1', '#ff9ff3',
        '#00d4ff', '#00ff88'
    ];
    
    const shapes = ['square', 'circle', 'triangle'];
    
    for (let i = 0; i < 120; i++) {
        setTimeout(() => {
            createConfettiPiece(colors, shapes);
        }, i * 15);
    }
}

function createConfettiPiece(colors, shapes) {
    if (!DOM.confettiContainer) return;
    
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.classList.add(shapes[Math.floor(Math.random() * shapes.length)]);
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = color;
    confetti.style.color = color;
    
    confetti.style.left = (30 + Math.random() * 40) + 'vw';
    confetti.style.top = '35vh';
    
    const size = 6 + Math.random() * 12;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    
    const duration = 1.5 + Math.random() * 2;
    const delay = Math.random() * 0.3;
    confetti.style.animationDuration = duration + 's';
    confetti.style.animationDelay = delay + 's';
    
    const spreadX = (Math.random() - 0.5) * 400;
    confetti.style.setProperty('--spread-x', spreadX + 'px');
    
    DOM.confettiContainer.appendChild(confetti);
    
    setTimeout(() => {
        if (confetti.parentNode) {
            confetti.remove();
        }
    }, (duration + delay + 1) * 1000);
}

function claimTicket(e) {
    e.preventDefault();
    vibrate(50);
    goToPage(4);
}

// ═══════════════════════════════════════════════════════════════════════════
// 📸 PAGE 4: POLAROID GALLERY
// ═══════════════════════════════════════════════════════════════════════════

function initPolaroidGallery() {
    DOM.polaroidFrames.forEach((frame, index) => {
        frame.addEventListener('click', () => handlePolaroidClick(index));
        frame.addEventListener('touchend', (e) => {
            e.preventDefault();
            handlePolaroidClick(index);
        });
    });
    
    // Navigation dots
    DOM.polaroidNavDots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToPolaroid(index));
    });
    
    updatePolaroidDisplay();
}

function handlePolaroidClick(index) {
    if (AppState.currentPage !== 4) return;
    if (index !== AppState.currentPolaroid) return;
    
    vibrate(30);
    
    AppState.currentPolaroid++;
    
    if (AppState.currentPolaroid >= AppState.totalPolaroids) {
        setTimeout(() => {
            goToPage(5);
        }, 500);
    } else {
        updatePolaroidDisplay();
    }
}

function goToPolaroid(index) {
    if (index === AppState.currentPolaroid) return;
    if (index >= AppState.totalPolaroids) return;
    
    AppState.currentPolaroid = index;
    updatePolaroidDisplay();
    vibrate(20);
}

function updatePolaroidDisplay() {
    DOM.polaroidFrames.forEach((frame, index) => {
        frame.classList.remove('active', 'prev', 'next', 'exit-left');
        
        if (index === AppState.currentPolaroid) {
            frame.classList.add('active');
        } else if (index === AppState.currentPolaroid - 1) {
            frame.classList.add('exit-left');
        } else if (index === AppState.currentPolaroid + 1) {
            frame.classList.add('next');
        } else if (index < AppState.currentPolaroid) {
            frame.classList.add('prev');
        }
    });
    
    DOM.polaroidNavDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === AppState.currentPolaroid);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// 🎆 PAGE 5: FINAL CARD & FIREWORKS
// ═══════════════════════════════════════════════════════════════════════════

function initFinalCard() {
    DOM.finalCard?.addEventListener('click', flipCard);
    DOM.finalCard?.addEventListener('touchend', (e) => {
        e.preventDefault();
        flipCard();
    });
    
    DOM.replayBtn?.addEventListener('click', replayExperience);
    DOM.shareBtn?.addEventListener('click', shareExperience);
}

function flipCard() {
    if (AppState.currentPage !== 5) return;
    
    AppState.isCardFlipped = !AppState.isCardFlipped;
    DOM.finalCard?.classList.toggle('flipped', AppState.isCardFlipped);
    
    vibrate(50);
    
    if (AppState.isCardFlipped && !DOM.finalActions?.classList.contains('visible')) {
        DOM.finalActions?.classList.add('visible');
        startFireworks();
        
        if (AppState.isMuted) {
            playMusic();
        }
    }
}

function startFireworks() {
    console.log('🎆 Starting fireworks!');
    
    let count = 0;
    const maxFireworks = 35;
    
    AppState.fireworksInterval = setInterval(() => {
        if (count >= maxFireworks || AppState.currentPage !== 5) {
            clearInterval(AppState.fireworksInterval);
            return;
        }
        
        createFirework();
        count++;
    }, 250);
}

function createFirework() {
    if (!DOM.fireworksContainer) return;
    
    const colors = ['#ff6b9d', '#c44eff', '#4facfe', '#ffd700', '#ff6b6b', '#48dbfb', '#00ff88'];
    const x = 10 + Math.random() * 80;
    const y = 10 + Math.random() * 50;
    
    const particleCount = 14 + Math.floor(Math.random() * 10);
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework';
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 8px ${color}, 0 0 12px ${color}`;
        particle.style.left = x + 'vw';
        particle.style.top = y + 'vh';
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 60 + Math.random() * 60;
        const spreadX = Math.cos(angle) * velocity;
        const spreadY = Math.sin(angle) * velocity;
        
        particle.animate([
            { 
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            { 
                transform: `translate(${spreadX}px, ${spreadY}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 900 + Math.random() * 500,
            easing: 'cubic-bezier(0, 0.6, 0.4, 1)'
        });
        
        DOM.fireworksContainer.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 1400);
    }
}

function replayExperience() {
    console.log('🔄 Replaying experience...');
    
    vibrate(50);
    
    // Stop fireworks
    if (AppState.fireworksInterval) {
        clearInterval(AppState.fireworksInterval);
    }
    
    // Reset state
    AppState.currentPage = 1;
    AppState.pageHistory = [1];
    AppState.heartHoldProgress = 0;
    AppState.cardsRemoved = 0;
    AppState.currentPolaroid = 0;
    AppState.isCardFlipped = false;
    
    // Reset all pages
    resetAllPages();
    
    // Navigate to page 1
    goToPage(1, 'back');
}

function resetAllPages() {
    // Reset Page 1
    resetHoldProgress();
    DOM.heartHoldContainer?.classList.remove('complete');
    
    // Reset Page 2
    DOM.distractionCards.forEach(card => {
        card.dataset.removed = 'false';
        card.classList.remove('removed');
        card.style.transform = '';
        card.style.opacity = '';
        card.style.transition = '';
        card.style.zIndex = '';
    });
    
    DOM.progressDots.forEach(dot => {
        dot.classList.remove('completed');
    });
    
    if (DOM.hiddenGift) {
        DOM.hiddenGift.classList.remove('revealed');
        DOM.hiddenGift.style.opacity = '0';
        DOM.hiddenGift.style.filter = 'blur(10px)';
    }
    
    // Reset Page 3
    DOM.giftBox?.classList.remove('opening');
    DOM.giftRevealContainer?.classList.remove('hidden');
    DOM.goldenTicketContainer?.classList.remove('visible');
    if (DOM.confettiContainer) {
        DOM.confettiContainer.innerHTML = '';
    }
    
    // Reset Page 4
    AppState.currentPolaroid = 0;
    updatePolaroidDisplay();
    
    // Reset Page 5
    DOM.finalCard?.classList.remove('flipped');
    DOM.finalActions?.classList.remove('visible');
    if (DOM.fireworksContainer) {
        DOM.fireworksContainer.innerHTML = '';
    }
}

function shareExperience() {
    vibrate(30);
    
    const shareData = {
        title: t('Happy New Year 2026! 🎆', 'नया साल मुबारक 2026! 🎆'),
        text: t(
            'I received this beautiful New Year surprise! Check it out! ✨',
            'मुझे ये खूबसूरत नए साल का सरप्राइज मिला! देखो! ✨'
        ),
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert(t('Link copied to clipboard! 📋', 'लिंक कॉपी हो गया! 📋'));
            })
            .catch(() => {
                alert(t('Share this link: ', 'इस लिंक को शेयर करें: ') + window.location.href);
            });
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🔄 PAGE TRANSITIONS & NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

function goToPage(pageNumber, direction = 'forward') {
    if (AppState.isTransitioning) return;
    if (pageNumber < 1 || pageNumber > AppState.totalPages) return;
    if (pageNumber === AppState.currentPage && direction === 'forward') return;
    
    console.log(`📄 Navigating to page ${pageNumber} (${direction})`);
    
    AppState.isTransitioning = true;
    
    const currentPageEl = document.querySelector(`.page[data-page="${AppState.currentPage}"]`);
    const nextPageEl = document.querySelector(`.page[data-page="${pageNumber}"]`);
    
    if (!currentPageEl || !nextPageEl) {
        AppState.isTransitioning = false;
        return;
    }
    
    // Apply exit animation based on direction
    if (direction === 'back') {
        currentPageEl.classList.add('exit');
    } else {
        currentPageEl.classList.add('exit');
    }
    currentPageEl.classList.remove('active');
    
    // Enter next page
    setTimeout(() => {
        currentPageEl.classList.remove('exit', 'exit-back');
        nextPageEl.classList.add('active');
        
        // Update state
        AppState.currentPage = pageNumber;
        
        // Update history for forward navigation
        if (direction === 'forward') {
            AppState.pageHistory.push(pageNumber);
        }
        
        // Update back button
        updateBackButtonVisibility();
        
        AppState.isTransitioning = false;
        
        // Trigger page-specific animations
        onPageEnter(pageNumber);
        
        console.log(`✅ Now on page ${pageNumber}`);
    }, 350);
}

function onPageEnter(pageNumber) {
    switch (pageNumber) {
        case 1:
            // Reset heart if coming back
            resetHoldProgress();
            DOM.heartHoldContainer?.classList.remove('complete');
            break;
            
        case 2:
            // Animate cards entrance
            DOM.distractionCards.forEach((card, index) => {
                if (card.dataset.removed === 'true') return;
                
                card.style.opacity = '0';
                card.style.transform = 'scale(0.4) rotate(0deg)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    card.style.opacity = '1';
                    card.style.transform = `rotate(var(--card-rotation)) translate(var(--card-x), var(--card-y))`;
                    
                    setTimeout(() => {
                        card.style.transition = '';
                    }, 600);
                }, 150 + index * 100);
            });
            break;
            
        case 3:
            // Gift box bounce
            if (DOM.giftBox && !DOM.giftBox.classList.contains('opening')) {
                DOM.giftBox.style.animation = 'none';
                setTimeout(() => {
                    DOM.giftBox.style.animation = '';
                }, 10);
            }
            break;
            
        case 4:
            updatePolaroidDisplay();
            break;
            
        case 5:
            // Ambient fireworks
            setTimeout(() => {
                if (AppState.currentPage === 5 && !AppState.isCardFlipped) {
                    createAmbientFirework();
                }
            }, 800);
            break;
    }
}

function createAmbientFirework() {
    if (AppState.currentPage !== 5) return;
    if (AppState.isCardFlipped) return;
    
    createFirework();
    
    setTimeout(() => {
        createAmbientFirework();
    }, 3000 + Math.random() * 4000);
}

// ═══════════════════════════════════════════════════════════════════════════
// ⌨️ KEYBOARD SUPPORT
// ═══════════════════════════════════════════════════════════════════════════

function initKeyboardSupport() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
}

function handleKeyDown(e) {
    // Space for heart hold
    if (e.code === 'Space' && AppState.currentPage === 1) {
        e.preventDefault();
        if (!AppState.isHolding) {
            startHold(e);
        }
    }
    
    // Right arrow - next page (for testing)
    if (e.code === 'ArrowRight' && e.ctrlKey) {
        e.preventDefault();
        if (AppState.currentPage < AppState.totalPages) {
            goToPage(AppState.currentPage + 1);
        }
    }
    
    // Left arrow - previous page / back
    if (e.code === 'ArrowLeft') {
        e.preventDefault();
        goBack();
    }
    
    // Escape - go back
    if (e.code === 'Escape') {
        e.preventDefault();
        goBack();
    }
    
    // M - toggle music
    if (e.code === 'KeyM') {
        e.preventDefault();
        toggleSound();
    }
    
    // L - toggle language
    if (e.code === 'KeyL') {
        e.preventDefault();
        toggleLanguage();
    }
    
    // T - toggle theme
    if (e.code === 'KeyT') {
        e.preventDefault();
        toggleTheme();
    }
    
    // Enter - interact with current page
    if (e.code === 'Enter') {
        e.preventDefault();
        handleEnterKey();
    }
}

function handleKeyUp(e) {
    if (e.code === 'Space' && AppState.currentPage === 1) {
        endHold();
    }
}

function handleEnterKey() {
    switch (AppState.currentPage) {
        case 2:
            if (AppState.cardsRemoved >= AppState.totalCards) {
                goToPage(3);
            }
            break;
        case 3:
            if (DOM.goldenTicketContainer?.classList.contains('visible')) {
                goToPage(4);
            } else {
                openGiftBox({ preventDefault: () => {} });
            }
            break;
        case 4:
            handlePolaroidClick(AppState.currentPolaroid);
            break;
        case 5:
            flipCard();
            break;
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// 🛠️ UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function vibrate(pattern) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

function animateButton(button) {
    if (!button) return;
    
    button.style.transform = 'scale(0.9)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

// ═══════════════════════════════════════════════════════════════════════════
// 📱 VISIBILITY & PERFORMANCE
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause music
        if (!AppState.isMuted && DOM.bgMusic) {
            DOM.bgMusic.pause();
        }
        
        // Clear fireworks interval
        if (AppState.fireworksInterval) {
            clearInterval(AppState.fireworksInterval);
        }
    } else {
        // Resume music
        if (!AppState.isMuted && DOM.bgMusic) {
            DOM.bgMusic.play().catch(() => {});
        }
    }
});

// Handle resize
window.addEventListener('resize', debounce(() => {
    console.log('📐 Window resized');
}, 300));

// Handle orientation change
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        console.log('📱 Orientation changed');
    }, 150);
});

function startHeartRain(duration = 2500) {
    const container = document.querySelector('.heart-rain-container');
    const hearts = ['❤️','💖','💕','💗','💘'];

    const interval = setInterval(() => {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (2 + Math.random() * 2) + 's';

        container.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }, 120);

    setTimeout(() => clearInterval(interval), duration);
}


// ═══════════════════════════════════════════════════════════════════════════
// 🐛 DEBUG MODE
// ═══════════════════════════════════════════════════════════════════════════

const DEBUG = false;

if (DEBUG) {
    window.AppState = AppState;
    window.DOM = DOM;
    window.goToPage = goToPage;
    window.toggleLanguage = toggleLanguage;
    window.toggleTheme = toggleTheme;
    
    console.log('🐛 Debug mode enabled');
    console.log('Commands:');
    console.log('  - goToPage(n): Navigate to page n');
    console.log('  - toggleLanguage(): Switch language');
    console.log('  - toggleTheme(): Switch theme');
    console.log('  - AppState: View state');
}

// ═══════════════════════════════════════════════════════════════════════════
// ✨ INITIALIZATION COMPLETE
// ═══════════════════════════════════════════════════════════════════════════

console.log('🎆 New Year Surprise v2.0 Loaded!');
console.log('🌐 Language: Press L to toggle');
console.log('🌓 Theme: Press T to toggle');
console.log('🔊 Sound: Press M to toggle');
console.log('⬅️ Back: Press Escape or Left Arrow');
console.log('💝 Made with love for someone special');
