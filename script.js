/* ============================================
   HAPPY NEW YEAR 2025 - ULTIMATE JAVASCRIPT
   Premium Viral Greeting Card Platform
   Complete Interactive Functionality
   ============================================ */

'use strict';

/* ============================================
   GLOBAL VARIABLES & CONFIGURATION
   ============================================ */

const CONFIG = {
    newYearDate: new Date('January 1, 2025 00:00:00').getTime(),
    siteUrl: window.location.origin + window.location.pathname,
    socialShareText: 'Check out my personalized New Year 2025 wish! 🎊',
    maxPhotoSize: 5 * 1024 * 1024, // 5MB
    animationSpeed: 1000,
    toastDuration: 3000,
    autoHideDelay: 5000
};

let currentStep = 1;
let selectedTemplate = null;
let uploadedPhoto = null;
let selectedFont = 'Poppins';
let selectedColor = '#ffffff';
let selectedAnimation = 'fireworks';
let selectedMusic = 'celebration';
let selectedStickers = [];
let wishData = {
    recipientName: '',
    senderName: '',
    customMessage: '',
    template: 'fireworks',
    photo: null,
    font: 'Poppins',
    color: '#ffffff',
    animation: 'fireworks',
    music: 'celebration',
    stickers: []
};

/* ============================================
   DOM ELEMENTS CACHE
   ============================================ */

const DOM = {
    // Preloader
    preloader: document.getElementById('preloader'),
    loadingProgress: document.getElementById('loadingProgress'),
    loadingPercentage: document.getElementById('loadingPercentage'),
    
    // Navigation
    mainNav: document.getElementById('mainNav'),
    navMenu: document.getElementById('navMenu'),
    navToggle: document.getElementById('navToggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    
    // Canvas
    fireworksCanvas: document.getElementById('fireworksCanvas'),
    particlesCanvas: document.getElementById('particlesCanvas'),
    snowCanvas: document.getElementById('snowCanvas'),
    
    // Audio
    bgMusic: document.getElementById('bgMusic'),
    clickSound: document.getElementById('clickSound'),
    successSound: document.getElementById('successSound'),
    
    // Controls
    musicControl: document.getElementById('musicControl'),
    themeSwitcher: document.getElementById('themeSwitcher'),
    themeOptions: document.querySelectorAll('.theme-option'),
    
    // Hero Section
    statNumbers: document.querySelectorAll('.stat-number'),
    
    // Create Section
    stepItems: document.querySelectorAll('.step-item'),
    stepContents: document.querySelectorAll('.step-content'),
    
    // Step 1 - Template Selection
    templateCards: document.querySelectorAll('.template-card'),
    
    // Step 2 - Personalization
    recipientName: document.getElementById('recipientName'),
    senderName: document.getElementById('senderName'),
    customMessage: document.getElementById('customMessage'),
    photoUpload: document.getElementById('photoUpload'),
    photoUploadArea: document.getElementById('photoUploadArea'),
    photoPreview: document.getElementById('photoPreview'),
    
    // Step 3 - Customization
    fontOptions: document.querySelectorAll('.font-option'),
    colorOptions: document.querySelectorAll('.color-option'),
    animationOptions: document.querySelectorAll('.animation-option'),
    musicOptions: document.querySelectorAll('.music-option'),
    stickerOptions: document.querySelectorAll('.sticker-option'),
    
    // Step 4 - Preview & Share
    previewCard: document.getElementById('previewCard'),
    cardRecipient: document.getElementById('cardRecipient'),
    cardMessage: document.getElementById('cardMessage'),
    cardSender: document.getElementById('cardSender'),
    cardPhoto: document.getElementById('cardPhoto'),
    cardStickers: document.getElementById('cardStickers'),
    generatedLink: document.getElementById('generatedLink'),
    
    // Countdown
    daysElement: document.getElementById('days'),
    hoursElement: document.getElementById('hours'),
    minutesElement: document.getElementById('minutes'),
    secondsElement: document.getElementById('seconds'),
    countdownMessage: document.getElementById('countdownMessage'),
    
    // Resolutions
    resolutionInput: document.getElementById('resolutionInput'),
    resolutionsList: document.getElementById('resolutionsList'),
    
    // Template Filters
    filterButtons: document.querySelectorAll('.filter-btn'),
    showcaseCards: document.querySelectorAll('.showcase-card'),
    
    // FAQ
    faqItems: document.querySelectorAll('.faq-item'),
    
    // Modals
    viewWishModal: document.getElementById('viewWishModal'),
    photoEditorModal: document.getElementById('photoEditorModal'),
    
    // Toast Container
    toastContainer: document.getElementById('toastContainer'),
    
    // Back to Top
    backToTop: document.getElementById('backToTop')
};

/* ============================================
   PRELOADER FUNCTIONALITY
   ============================================ */

function initPreloader() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(hidePreloader, 500);
        }
        updateProgress(progress);
    }, 200);
}

function updateProgress(value) {
    const percentage = Math.min(Math.round(value), 100);
    DOM.loadingProgress.style.width = percentage + '%';
    DOM.loadingPercentage.textContent = percentage + '%';
}

function hidePreloader() {
    DOM.preloader.classList.add('hidden');
    setTimeout(() => {
        DOM.preloader.style.display = 'none';
        initAnimations();
    }, 500);
}

/* ============================================
   NAVIGATION FUNCTIONALITY
   ============================================ */

function initNavigation() {
    // Mobile Menu Toggle
    DOM.navToggle.addEventListener('click', () => {
        DOM.navMenu.classList.toggle('active');
        DOM.navToggle.classList.toggle('active');
        playClickSound();
    });
    
    // Navigation Links
    DOM.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            scrollToSection(targetId.substring(1));
            
            // Update active link
            DOM.navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            DOM.navMenu.classList.remove('active');
            DOM.navToggle.classList.remove('active');
            
            playClickSound();
        });
    });
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            DOM.mainNav.classList.add('scrolled');
            DOM.backToTop.classList.add('show');
        } else {
            DOM.mainNav.classList.remove('scrolled');
            DOM.backToTop.classList.remove('show');
        }
    });
}

/* ============================================
   SMOOTH SCROLLING
   ============================================ */

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

/* ============================================
   FIREWORKS CANVAS ANIMATION
   ============================================ */

function initFireworks() {
    const canvas = DOM.fireworksCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const fireworks = [];
    const particles = [];
    
    class Firework {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.targetY = Math.random() * canvas.height * 0.5;
            this.speed = 3;
            this.angle = Math.PI / 2;
            this.velocity = this.speed;
            this.hue = Math.random() * 360;
        }
        
        update() {
            this.y -= this.velocity;
            this.velocity *= 0.98;
            
            if (this.velocity <= 0.5) {
                return true; // Explode
            }
            return false;
        }
        
        draw() {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            ctx.fill();
            ctx.restore();
        }
    }
    
    class Particle {
        constructor(x, y, hue) {
            this.x = x;
            this.y = y;
            this.hue = hue;
            this.angle = Math.random() * Math.PI * 2;
            this.speed = Math.random() * 5 + 2;
            this.vx = Math.cos(this.angle) * this.speed;
            this.vy = Math.sin(this.angle) * this.speed;
            this.life = 100;
            this.opacity = 1;
        }
        
        update() {
            this.vx *= 0.98;
            this.vy *= 0.98;
            this.vy += 0.1; // Gravity
            this.x += this.vx;
            this.y += this.vy;
            this.life--;
            this.opacity = this.life / 100;
        }
        
        draw() {
            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`;
            ctx.fill();
            ctx.restore();
        }
    }
    
    function createFirework() {
        if (Math.random() < 0.05) {
            fireworks.push(new Firework());
        }
    }
    
    function explode(firework) {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(firework.x, firework.y, firework.hue));
        }
    }
    
    function animate() {
        ctx.fillStyle = 'rgba(15, 15, 30, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        createFirework();
        
        // Update and draw fireworks
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].draw();
            if (fireworks[i].update()) {
                explode(fireworks[i]);
                fireworks.splice(i, 1);
            }
        }
        
        // Update and draw particles
        for (let i = particles.length - 1; i >= 0; i--) {
            particles[i].draw();
            particles[i].update();
            if (particles[i].life <= 0) {
                particles.splice(i, 1);
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ============================================
   PARTICLES CANVAS ANIMATION
   ============================================ */

function initParticles() {
    const canvas = DOM.particlesCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    class ConfettiParticle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 8 + 3;
            this.speedY = Math.random() * 2 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 4 - 2;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
            
            if (this.x > canvas.width || this.x < 0) {
                this.speedX *= -1;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new ConfettiParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ============================================
   SNOW CANVAS ANIMATION
   ============================================ */

function initSnow() {
    const canvas = DOM.snowCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const snowflakes = [];
    const snowflakeCount = 150;
    
    class Snowflake {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 3 + 2;
            this.speedY = Math.random() * 1 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
            ctx.restore();
        }
    }
    
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        snowflakes.forEach(snowflake => {
            snowflake.update();
            snowflake.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/* ============================================
   MUSIC CONTROLS
   ============================================ */

function initMusicControl() {
    let isPlaying = false;
    
    DOM.musicControl.addEventListener('click', () => {
        if (isPlaying) {
            DOM.bgMusic.pause();
            DOM.musicControl.classList.remove('playing');
            DOM.musicControl.querySelector('.music-status').textContent = 'Click to Play';
        } else {
            DOM.bgMusic.play().catch(err => {
                console.log('Audio play failed:', err);
                showToast('Please interact with the page to enable music', 'info');
            });
            DOM.musicControl.classList.add('playing');
            DOM.musicControl.querySelector('.music-status').textContent = 'Now Playing';
        }
        isPlaying = !isPlaying;
        playClickSound();
    });
}

/* ============================================
   THEME SWITCHER
   ============================================ */

function initThemeSwitcher() {
    DOM.themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            applyTheme(theme);
            playClickSound();
            showToast(`Theme changed to ${theme}!`, 'success');
        });
    });
}

function applyTheme(theme) {
    const root = document.documentElement;
    
    const themes = {
        classic: {
            primary: '#667eea',
            secondary: '#764ba2',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        golden: {
            primary: '#f6d365',
            secondary: '#fda085',
            gradient: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
        },
        romantic: {
            primary: '#ff6e7f',
            secondary: '#bfe9ff',
            gradient: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)'
        },
        neon: {
            primary: '#13f1fc',
            secondary: '#0470dc',
            gradient: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)'
        },
        sunset: {
            primary: '#fa709a',
            secondary: '#fee140',
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        ocean: {
            primary: '#48c6ef',
            secondary: '#6f86d6',
            gradient: 'linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)'
        },
        forest: {
            primary: '#56ab2f',
            secondary: '#a8e063',
            gradient: 'linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)'
        },
        midnight: {
            primary: '#2c3e50',
            secondary: '#000000',
            gradient: 'linear-gradient(135deg, #2c3e50 0%, #000000 100%)'
        },
        candy: {
            primary: '#ff9a9e',
            secondary: '#fecfef',
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
        },
        royal: {
            primary: '#141e30',
            secondary: '#243b55',
            gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)'
        }
    };
    
    const selectedTheme = themes[theme];
    if (selectedTheme) {
        root.style.setProperty('--primary-color', selectedTheme.primary);
        root.style.setProperty('--secondary-color', selectedTheme.secondary);
        root.style.setProperty('--gradient-primary', selectedTheme.gradient);
    }
}

/* ============================================
   STATISTICS COUNTER ANIMATION
   ============================================ */

function initStatsCounter() {
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    DOM.statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

/* ============================================
   STEP NAVIGATION
   ============================================ */

function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 4) {
            currentStep++;
            updateSteps();
            playSuccessSound();
            scrollToSection('create');
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        currentStep--;
        updateSteps();
        playClickSound();
        scrollToSection('create');
    }
}

function updateSteps() {
    // Update step indicators
    DOM.stepItems.forEach((item, index) => {
        if (index + 1 === currentStep) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Update step content
    DOM.stepContents.forEach((content, index) => {
        if (index + 1 === currentStep) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
    
    // Update preview on step 4
    if (currentStep === 4) {
        updatePreview();
        generateLink();
    }
}

function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            if (!selectedTemplate) {
                showToast('Please select a template!', 'warning');
                return false;
            }
            return true;
            
        case 2:
            if (!DOM.recipientName.value.trim()) {
                showToast('Please enter recipient name!', 'warning');
                DOM.recipientName.focus();
                return false;
            }
            if (!DOM.senderName.value.trim()) {
                showToast('Please enter your name!', 'warning');
                DOM.senderName.focus();
                return false;
            }
            // Save data
            wishData.recipientName = DOM.recipientName.value.trim();
            wishData.senderName = DOM.senderName.value.trim();
            wishData.customMessage = DOM.customMessage.value.trim();
            return true;
            
        case 3:
            wishData.font = selectedFont;
            wishData.color = selectedColor;
            wishData.animation = selectedAnimation;
            wishData.music = selectedMusic;
            wishData.stickers = [...selectedStickers];
            return true;
            
        default:
            return true;
    }
}

/* ============================================
   TEMPLATE SELECTION
   ============================================ */

function initTemplateSelection() {
    DOM.templateCards.forEach(card => {
        card.addEventListener('click', () => {
            selectedTemplate = card.dataset.template;
            wishData.template = selectedTemplate;
            
            // Update UI
            DOM.templateCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            
            playClickSound();
        });
        
        // Add select button listener
        const selectBtn = card.querySelector('.btn-select-template');
        if (selectBtn) {
            selectBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                selectedTemplate = card.dataset.template;
                wishData.template = selectedTemplate;
                DOM.templateCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                nextStep();
            });
        }
    });
    
    // Template showcase buttons
    document.querySelectorAll('.btn-use-template').forEach(btn => {
        btn.addEventListener('click', () => {
            const template = btn.dataset.template;
            selectedTemplate = template;
            wishData.template = template;
            scrollToSection('create');
            showToast('Template selected! Create your wish now.', 'success');
        });
    });
}

/* ============================================
   PHOTO UPLOAD
   ============================================ */

function initPhotoUpload() {
    DOM.photoUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        
        if (!file) return;
        
        // Validate file type
        if (!file.type.match('image.*')) {
            showToast('Please select an image file!', 'error');
            return;
        }
        
        // Validate file size
        if (file.size > CONFIG.maxPhotoSize) {
            showToast('Image size should be less than 5MB!', 'error');
            return;
        }
        
        // Read and display image
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedPhoto = event.target.result;
            wishData.photo = uploadedPhoto;
            displayPhotoPreview(uploadedPhoto);
            playSuccessSound();
            showToast('Photo uploaded successfully!', 'success');
        };
        reader.readAsDataURL(file);
    });
    
    // Drag and drop
    DOM.photoUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        DOM.photoUploadArea.style.borderColor = 'var(--primary-color)';
    });
    
    DOM.photoUploadArea.addEventListener('dragleave', () => {
        DOM.photoUploadArea.style.borderColor = '';
    });
    
    DOM.photoUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        DOM.photoUploadArea.style.borderColor = '';
        
        const file = e.dataTransfer.files[0];
        if (file && file.type.match('image.*')) {
            DOM.photoUpload.files = e.dataTransfer.files;
            const event = new Event('change');
            DOM.photoUpload.dispatchEvent(event);
        }
    });
}

function displayPhotoPreview(imageData) {
    DOM.photoPreview.innerHTML = `
        <img src="${imageData}" alt="Preview">
        <button class="btn btn-secondary" onclick="removePhoto()" style="margin-top: 1rem;">
            <i class="fas fa-trash"></i> Remove Photo
        </button>
    `;
    DOM.photoPreview.classList.add('active');
    document.querySelector('.upload-placeholder').style.display = 'none';
}

function removePhoto() {
    uploadedPhoto = null;
    wishData.photo = null;
    DOM.photoPreview.innerHTML = '';
    DOM.photoPreview.classList.remove('active');
    document.querySelector('.upload-placeholder').style.display = 'block';
    DOM.photoUpload.value = '';
    playClickSound();
}

/* ============================================
   CUSTOMIZATION OPTIONS
   ============================================ */

function initCustomization() {
    // Font Selection
    DOM.fontOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedFont = option.dataset.font;
            DOM.fontOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            playClickSound();
        });
    });
    
    // Color Selection
    DOM.colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedColor = option.dataset.color;
            DOM.colorOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            playClickSound();
        });
    });
    
    // Animation Selection
    DOM.animationOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedAnimation = option.dataset.animation;
            DOM.animationOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            playClickSound();
        });
    });
    
    // Music Selection
    DOM.musicOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedMusic = option.dataset.music;
            DOM.musicOptions.forEach(o => o.classList.remove('active'));
            option.classList.add('active');
            playClickSound();
        });
    });
    
    // Sticker Selection
    DOM.stickerOptions.forEach(option => {
        option.addEventListener('click', () => {
            const sticker = option.dataset.sticker;
            
            if (option.classList.contains('active')) {
                option.classList.remove('active');
                const index = selectedStickers.indexOf(sticker);
                if (index > -1) {
                    selectedStickers.splice(index, 1);
                }
            } else {
                if (selectedStickers.length < 5) {
                    option.classList.add('active');
                    selectedStickers.push(sticker);
                } else {
                    showToast('Maximum 5 stickers allowed!', 'warning');
                }
            }
            playClickSound();
        });
    });
}

/* ============================================
   PREVIEW GENERATION
   ============================================ */

function updatePreview() {
    // Update recipient name
    if (DOM.cardRecipient) {
        DOM.cardRecipient.textContent = `Dear ${wishData.recipientName}`;
        DOM.cardRecipient.style.fontFamily = wishData.font;
        DOM.cardRecipient.style.color = wishData.color;
    }
    
    // Update message
    if (DOM.cardMessage) {
        const defaultMessage = 'May this new year bring you joy, success, and endless happiness!';
        DOM.cardMessage.textContent = wishData.customMessage || defaultMessage;
        DOM.cardMessage.style.fontFamily = wishData.font;
        DOM.cardMessage.style.color = wishData.color;
    }
    
    // Update sender
    if (DOM.cardSender) {
        DOM.cardSender.textContent = `From: ${wishData.senderName}`;
        DOM.cardSender.style.fontFamily = wishData.font;
        DOM.cardSender.style.color = wishData.color;
    }
    
    // Update photo
    if (DOM.cardPhoto && wishData.photo) {
        DOM.cardPhoto.innerHTML = `<img src="${wishData.photo}" alt="Photo">`;
        DOM.cardPhoto.classList.add('active');
    }
    
    // Update stickers
    if (DOM.cardStickers) {
        DOM.cardStickers.innerHTML = '';
        wishData.stickers.forEach((sticker, index) => {
            const stickerElement = document.createElement('span');
            stickerElement.textContent = sticker;
            stickerElement.style.cssText = `
                top: ${Math.random() * 80 + 10}%;
                left: ${Math.random() * 80 + 10}%;
                animation-delay: ${index * 0.2}s;
            `;
            DOM.cardStickers.appendChild(stickerElement);
        });
    }
    
    // Apply theme to preview card
    applyPreviewTheme();
}

function applyPreviewTheme() {
    const themes = {
        fireworks: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        golden: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        romantic: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
        party: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        neon: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)',
        minimalist: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)',
        vintage: 'linear-gradient(135deg, #b79891 0%, #94716b 100%)',
        '3d': 'linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)'
    };
    
    if (DOM.previewCard && themes[wishData.template]) {
        DOM.previewCard.style.background = themes[wishData.template];
    }
}

/* ============================================
   LINK GENERATION
   ============================================ */

function generateLink() {
    // Create URL with parameters
    const params = new URLSearchParams({
        to: wishData.recipientName,
        from: wishData.senderName,
        msg: wishData.customMessage,
        template: wishData.template,
        font: wishData.font,
        color: wishData.color.replace('#', ''),
        animation: wishData.animation,
        stickers: wishData.stickers.join(',')
    });
    
    const generatedUrl = `${CONFIG.siteUrl}?${params.toString()}`;
    
    if (DOM.generatedLink) {
        DOM.generatedLink.value = generatedUrl;
    }
    
    // Save to localStorage
    saveWish();
    
    return generatedUrl;
}

function saveWish() {
    const wishes = JSON.parse(localStorage.getItem('newYearWishes') || '[]');
    wishes.push({
        ...wishData,
        timestamp: Date.now()
    });
    localStorage.setItem('newYearWishes', JSON.stringify(wishes));
}

/* ============================================
   URL PARAMETERS HANDLING
   ============================================ */

function loadFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('to')) {
        const wishFromUrl = {
            recipientName: urlParams.get('to') || '',
            senderName: urlParams.get('from') || '',
            customMessage: urlParams.get('msg') || '',
            template: urlParams.get('template') || 'fireworks',
            font: urlParams.get('font') || 'Poppins',
            color: '#' + (urlParams.get('color') || 'ffffff'),
            animation: urlParams.get('animation') || 'fireworks',
            stickers: urlParams.get('stickers') ? urlParams.get('stickers').split(',') : []
        };
        
        // Display the wish
        displaySharedWish(wishFromUrl);
    }
}

function displaySharedWish(wish) {
    // Create modal content
    const wishHtml = `
        <div class="wish-display" style="background: ${getThemeGradient(wish.template)}; padding: 3rem; border-radius: 20px; text-align: center; color: white;">
            <h2 style="font-size: 3rem; margin-bottom: 1rem; font-family: ${wish.font}; color: ${wish.color};">
                Happy New Year 2025!
            </h2>
            <h3 style="font-size: 2rem; margin-bottom: 1.5rem; font-family: ${wish.font}; color: ${wish.color};">
                Dear ${wish.recipientName}
            </h3>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; line-height: 1.8; font-family: ${wish.font}; color: ${wish.color};">
                ${wish.customMessage || 'May this new year bring you joy, success, and endless happiness!'}
            </p>
            <p style="font-size: 1rem; font-style: italic; font-family: ${wish.font}; color: ${wish.color};">
                From: ${wish.senderName}
            </p>
            <div style="margin-top: 2rem;">
                <button class="btn btn-primary" onclick="scrollToSection('create')">
                    <i class="fas fa-magic"></i> Create Your Own Wish
                </button>
            </div>
        </div>
    `;
    
    // Show in modal or hero section
    if (DOM.viewWishModal) {
        document.getElementById('wishDisplay').innerHTML = wishHtml;
        openModal('viewWishModal');
    }
}

function getThemeGradient(template) {
    const gradients = {
        fireworks: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        golden: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        romantic: 'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
        party: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        neon: 'linear-gradient(135deg, #13f1fc 0%, #0470dc 100%)',
        minimalist: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 100%)',
        vintage: 'linear-gradient(135deg, #b79891 0%, #94716b 100%)',
        '3d': 'linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)'
    };
    return gradients[template] || gradients.fireworks;
}

/* ============================================
   SHARING FUNCTIONS
   ============================================ */

function copyLink() {
    const link = DOM.generatedLink.value;
    
    navigator.clipboard.writeText(link).then(() => {
        showToast('Link copied to clipboard!', 'success');
        playSuccessSound();
    }).catch(() => {
        // Fallback for older browsers
        DOM.generatedLink.select();
        document.execCommand('copy');
        showToast('Link copied to clipboard!', 'success');
        playSuccessSound();
    });
}

function shareOnWhatsApp() {
    const link = DOM.generatedLink.value;
    const text = `${CONFIG.socialShareText}\n${link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    playClickSound();
}

function shareOnFacebook() {
    const link = DOM.generatedLink.value;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
    playClickSound();
}

function shareOnTwitter() {
    const link = DOM.generatedLink.value;
    const text = CONFIG.socialShareText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(link)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
    playClickSound();
}

function shareOnInstagram() {
    showToast('Please download the image and share on Instagram!', 'info');
    playClickSound();
}

function shareOnTelegram() {
    const link = DOM.generatedLink.value;
    const text = CONFIG.socialShareText;
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
    playClickSound();
}

function shareViaEmail() {
    const link = DOM.generatedLink.value;
    const subject = 'Happy New Year 2025! 🎊';
    const body = `${CONFIG.socialShareText}\n\n${link}`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    playClickSound();
}

/* ============================================
   DOWNLOAD CARD FUNCTION
   ============================================ */

function downloadCard() {
    // Use html2canvas library or create image from DOM
    showToast('Preparing your download...', 'info');
    
    // Simple implementation - in production, use html2canvas
    setTimeout(() => {
        // Create a canvas and draw the card
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = 1200;
        canvas.height = 630;
        
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Text
        ctx.fillStyle = wishData.color;
        ctx.font = `bold 60px ${wishData.font}`;
        ctx.textAlign = 'center';
        ctx.fillText('Happy New Year 2025!', canvas.width / 2, 150);
        
        ctx.font = `40px ${wishData.font}`;
        ctx.fillText(`Dear ${wishData.recipientName}`, canvas.width / 2, 250);
        
        ctx.font = `30px ${wishData.font}`;
        const message = wishData.customMessage || 'May this new year bring you joy, success, and endless happiness!';
        wrapText(ctx, message, canvas.width / 2, 350, canvas.width - 200, 40);
        
        ctx.font = `italic 25px ${wishData.font}`;
        ctx.fillText(`From: ${wishData.senderName}`, canvas.width / 2, canvas.height - 100);
        
        // Download
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `NewYear2025-${wishData.recipientName}.png`;
            a.click();
            URL.revokeObjectURL(url);
            showToast('Card downloaded successfully!', 'success');
            playSuccessSound();
        });
    }, 500);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, y);
}

/* ============================================
   CREATE NEW WISH
   ============================================ */

function createNew() {
    // Reset all data
    currentStep = 1;
    selectedTemplate = null;
    uploadedPhoto = null;
    selectedFont = 'Poppins';
    selectedColor = '#ffffff';
    selectedAnimation = 'fireworks';
    selectedMusic = 'celebration';
    selectedStickers = [];
    
    wishData = {
        recipientName: '',
        senderName: '',
        customMessage: '',
        template: 'fireworks',
        photo: null,
        font: 'Poppins',
        color: '#ffffff',
        animation: 'fireworks',
        music: 'celebration',
        stickers: []
    };
    
    // Reset form
    if (DOM.recipientName) DOM.recipientName.value = '';
    if (DOM.senderName) DOM.senderName.value = '';
    if (DOM.customMessage) DOM.customMessage.value = '';
    
    // Reset selections
    DOM.templateCards.forEach(c => c.classList.remove('selected'));
    DOM.fontOptions.forEach(o => o.classList.remove('active'));
    DOM.colorOptions.forEach(o => o.classList.remove('active'));
    DOM.animationOptions.forEach(o => o.classList.remove('active'));
    DOM.musicOptions.forEach(o => o.classList.remove('active'));
    DOM.stickerOptions.forEach(o => o.classList.remove('active'));
    
    // Remove photo
    if (uploadedPhoto) {
        removePhoto();
    }
    
    // Update steps
    updateSteps();
    scrollToSection('create');
    showToast('Ready to create a new wish!', 'success');
    playClickSound();
}

/* ============================================
   COUNTDOWN TIMER
   ============================================ */

function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = CONFIG.newYearDate - now;
    
    if (distance < 0) {
        // New Year has arrived!
        DOM.daysElement.textContent = '00';
        DOM.hoursElement.textContent = '00';
        DOM.minutesElement.textContent = '00';
        DOM.secondsElement.textContent = '00';
        DOM.countdownMessage.innerHTML = '<p>🎊 Happy New Year 2025! 🎊</p>';
        triggerCelebration();
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    DOM.daysElement.textContent = String(days).padStart(2, '0');
    DOM.hoursElement.textContent = String(hours).padStart(2, '0');
    DOM.minutesElement.textContent = String(minutes).padStart(2, '0');
    DOM.secondsElement.textContent = String(seconds).padStart(2, '0');
}

function triggerCelebration() {
    // Trigger special animations and sounds
    playSuccessSound();
    createMassiveFireworks();
}

function createMassiveFireworks() {
    // Create extra fireworks celebration
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            // Trigger fireworks animation
        }, i * 200);
    }
}

/* ============================================
   RESOLUTIONS MANAGEMENT
   ============================================ */

function addResolution() {
    const input = DOM.resolutionInput;
    const text = input.value.trim();
    
    if (!text) {
        showToast('Please enter a resolution!', 'warning');
        return;
    }
    
    const resolutionItem = document.createElement('div');
    resolutionItem.className = 'resolution-item';
    resolutionItem.innerHTML = `
        <span class="resolution-text">${text}</span>
        <span class="resolution-likes" onclick="likeResolution(this)">❤️ 0</span>
    `;
    
    DOM.resolutionsList.insertBefore(resolutionItem, DOM.resolutionsList.firstChild);
    input.value = '';
    
    // Save to localStorage
    saveResolution(text);
    
    showToast('Resolution added!', 'success');
    playSuccessSound();
}

function likeResolution(element) {
    const currentLikes = parseInt(element.textContent.split(' ')[1]);
    element.textContent = `❤️ ${currentLikes + 1}`;
    playClickSound();
}

function saveResolution(text) {
    const resolutions = JSON.parse(localStorage.getItem('resolutions') || '[]');
    resolutions.push({
        text: text,
        timestamp: Date.now(),
        likes: 0
    });
    localStorage.setItem('resolutions', JSON.stringify(resolutions));
}

/* ============================================
   TEMPLATE FILTERING
   ============================================ */

function initTemplateFilters() {
    DOM.filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Update active button
            DOM.filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter templates
            DOM.showcaseCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });
            
            playClickSound();
        });
    });
}

/* ============================================
   GALLERY LOAD MORE
   ============================================ */

function loadMoreGallery() {
    showToast('Loading more wishes...', 'info');
    
    // Simulate loading
    setTimeout(() => {
        showToast('All wishes loaded!', 'success');
        playClickSound();
    }, 1000);
}

/* ============================================
   FAQ ACCORDION
   ============================================ */

function initFAQ() {
    DOM.faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            DOM.faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
            
            playClickSound();
        });
    });
}

/* ============================================
   MODAL FUNCTIONS
   ============================================ */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        playClickSound();
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        playClickSound();
    }
}

/* ============================================
   TOAST NOTIFICATIONS
   ============================================ */

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-xmark',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };
    
    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <div class="toast-message">${message}</div>
    `;
    
    DOM.toastContainer.appendChild(toast);
    
    // Auto remove
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, CONFIG.toastDuration);
}

/* ============================================
   SOUND EFFECTS
   ============================================ */

function playClickSound() {
    if (DOM.clickSound) {
        DOM.clickSound.currentTime = 0;
        DOM.clickSound.play().catch(() => {});
    }
}

function playSuccessSound() {
    if (DOM.successSound) {
        DOM.successSound.currentTime = 0;
        DOM.successSound.play().catch(() => {});
    }
}

/* ============================================
   BACK TO TOP
   ============================================ */

function initBackToTop() {
    DOM.backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        playClickSound();
    });
}

/* ============================================
   PHOTO EDITOR FUNCTIONS
   ============================================ */

function resetPhotoFilters() {
    document.getElementById('brightness').value = 100;
    document.getElementById('contrast').value = 100;
    document.getElementById('saturation').value = 100;
    applyPhotoFilters();
    playClickSound();
}

function applyPhotoFilters() {
    const brightness = document.getElementById('brightness').value;
    const contrast = document.getElementById('contrast').value;
    const saturation = document.getElementById('saturation').value;
    
    const image = document.getElementById('editorImage');
    if (image) {
        image.style.filter = `
            brightness(${brightness}%)
            contrast(${contrast}%)
            saturate(${saturation}%)
        `;
    }
    
    playClickSound();
}

/* ============================================
   ANIMATIONS INITIALIZATION
   ============================================ */

function initAnimations() {
    initFireworks();
    initParticles();
    initSnow();
}

/* ============================================
   LOCAL STORAGE MANAGEMENT
   ============================================ */

function loadSavedData() {
    const savedWishes = localStorage.getItem('newYearWishes');
    if (savedWishes) {
        try {
            const wishes = JSON.parse(savedWishes);
            console.log('Loaded saved wishes:', wishes.length);
        } catch (e) {
            console.error('Error loading saved wishes:', e);
        }
    }
}

function clearSavedData() {
    localStorage.removeItem('newYearWishes');
    localStorage.removeItem('resolutions');
    showToast('All saved data cleared!', 'success');
}

/* ============================================
   FORM VALIDATION
   ============================================ */

function validateForm() {
    const requiredFields = [
        DOM.recipientName,
        DOM.senderName
    ];
    
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--error-color)';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    return isValid;
}

/* ============================================
   KEYBOARD SHORTCUTS
   ============================================ */

function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + K to open create section
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            scrollToSection('create');
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
        
        // Arrow keys for step navigation
        if (currentStep > 0 && currentStep <= 4) {
            if (e.key === 'ArrowRight') {
                nextStep();
            } else if (e.key === 'ArrowLeft') {
                previousStep();
            }
        }
    });
}

/* ============================================
   RESPONSIVE UTILITIES
   ============================================ */

function handleResize() {
    // Handle responsive changes
    const width = window.innerWidth;
    
    if (width < 768) {
        // Mobile adjustments
    } else if (width < 1024) {
        // Tablet adjustments
    } else {
        // Desktop adjustments
    }
}

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

/* ============================================
   ERROR HANDLING
   ============================================ */

function setupErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('Global error:', e.error);
        showToast('An error occurred. Please try again.', 'error');
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

/* ============================================
   ANALYTICS & TRACKING
   ============================================ */

function trackEvent(category, action, label) {
    // Google Analytics or custom tracking
    console.log('Track event:', category, action, label);
}

/* ============================================
   SOCIAL MEDIA META TAGS UPDATE
   ============================================ */

function updateMetaTags(wish) {
    const title = `Happy New Year 2025 from ${wish.senderName} to ${wish.recipientName}`;
    const description = wish.customMessage || 'Create your personalized New Year wish!';
    
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[name="description"]').setAttribute('content', description);
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function generateRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

/* ============================================
   NEWSLETTER SUBSCRIPTION
   ============================================ */

function subscribeNewsletter() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        showToast('Please enter a valid email!', 'warning');
        return;
    }
    
    // Simulate subscription
    showToast('Thank you for subscribing!', 'success');
    emailInput.value = '';
    playSuccessSound();
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/* ============================================
   SHARE STATISTICS
   ============================================ */

function incrementShareCount(platform) {
    const stats = JSON.parse(localStorage.getItem('shareStats') || '{}');
    stats[platform] = (stats[platform] || 0) + 1;
    localStorage.setItem('shareStats', JSON.stringify(stats));
    trackEvent('Share', platform, 'New Year Wish');
}

/* ============================================
   PRINT FUNCTIONALITY
   ============================================ */

function printCard() {
    window.print();
    trackEvent('Action', 'Print', 'Greeting Card');
}

/* ============================================
   CONFETTI BURST EFFECT
   ============================================ */

function createConfettiBurst(x, y) {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            z-index: 10000;
            border-radius: 50%;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        animateParticle(particle, vx, vy);
    }
}

function animateParticle(particle, vx, vy) {
    let x = parseFloat(particle.style.left);
    let y = parseFloat(particle.style.top);
    let opacity = 1;
    
    function update() {
        x += vx;
        y += vy;
        vy += 0.2; // Gravity
        opacity -= 0.02;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(update);
        } else {
            particle.remove();
        }
    }
    
    update();
}

/* ============================================
   CLICK EFFECTS
   ============================================ */

function initClickEffects() {
    document.addEventListener('click', (e) => {
        if (e.target.matches('button, .btn, a')) {
            createConfettiBurst(e.clientX, e.clientY);
        }
    });
}

/* ============================================
   EASTER EGGS
   ============================================ */

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

function initEasterEggs() {
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
        
        if (konamiCode.join(',').includes(konamiSequence.join(','))) {
            activateEasterEgg();
            konamiCode = [];
        }
    });
}

function activateEasterEgg() {
    showToast('🎊 Secret mode activated! Extra fireworks! 🎊', 'success');
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfettiBurst(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight
            );
        }, i * 100);
    }
}

/* ============================================
   SERVICE WORKER REGISTRATION (PWA)
   ============================================ */

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker registered:', registration);
        }).catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    }
}

/* ============================================
   INSTALL PROMPT (PWA)
   ============================================ */

let deferredPrompt;

function initInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallButton();
    });
}

function showInstallButton() {
    // Show install button in UI
    const installBtn = document.createElement('button');
    installBtn.className = 'btn btn-primary install-btn';
    installBtn.innerHTML = '<i class="fas fa-download"></i> Install App';
    installBtn.style.cssText = 'position: fixed; bottom: 20px; left: 20px; z-index: 1000;';
    
    installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response: ${outcome}`);
            deferredPrompt = null;
            installBtn.remove();
        }
    });
    
    document.body.appendChild(installBtn);
}

/* ============================================
   NOTIFICATION PERMISSION
   ============================================ */

function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                console.log('Notification permission granted');
            }
        });
    }
}

function sendNotification(title, options) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, options);
    }
}

/* ============================================
   ADVANCED FEATURES
   ============================================ */

function initAdvancedFeatures() {
    // Voice commands (experimental)
    if ('webkitSpeechRecognition' in window) {
        initVoiceCommands();
    }
    
    // Geolocation for timezone-based countdown
    if ('geolocation' in navigator) {
        initGeolocation();
    }
    
    // Device orientation for interactive effects
    if (window.DeviceOrientationEvent) {
        initDeviceOrientation();
    }
}

function initVoiceCommands() {
    // Voice recognition implementation
    console.log('Voice commands available');
}

function initGeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('User location:', position.coords);
        // Adjust countdown based on timezone
    });
}

function initDeviceOrientation() {
    window.addEventListener('deviceorientation', (e) => {
        // Create interactive effects based on device tilt
    });
}

/* ============================================
   INITIALIZATION
   ============================================ */

function init() {
    // Core initialization
    initPreloader();
    initNavigation();
    initMusicControl();
    initThemeSwitcher();
    initStatsCounter();
    initBackToTop();
    
    // Feature initialization
    initTemplateSelection();
    initPhotoUpload();
    initCustomization();
    initCountdown();
    initTemplateFilters();
    initFAQ();
    
    // Advanced features
    initKeyboardShortcuts();
    initClickEffects();
    initEasterEggs();
    
    // Performance & PWA
    optimizePerformance();
    setupErrorHandling();
    
    // Load data
    loadSavedData();
    loadFromUrl();
    
    // Resize handler
    window.addEventListener('resize', debounce(handleResize, 250));
    
    // Newsletter
    const newsletterBtn = document.querySelector('.newsletter-btn');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', subscribeNewsletter);
    }
    
    console.log('🎊 Happy New Year 2025 Platform Initialized! 🎊');
}

/* ============================================
   DOCUMENT READY
   ============================================ */

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/* ============================================
   WINDOW LOAD
   ============================================ */

window.addEventListener('load', () => {
    // Additional initialization after page fully loads
    console.log('Page fully loaded');
});

/* ============================================
   EXPORT FUNCTIONS (if using modules)
   ============================================ */

// Export functions for external use
window.scrollToSection = scrollToSection;
window.nextStep = nextStep;
window.previousStep = previousStep;
window.copyLink = copyLink;
window.shareOnWhatsApp = shareOnWhatsApp;
window.shareOnFacebook = shareOnFacebook;
window.shareOnTwitter = shareOnTwitter;
window.shareOnInstagram = shareOnInstagram;
window.shareOnTelegram = shareOnTelegram;
window.shareViaEmail = shareViaEmail;
window.downloadCard = downloadCard;
window.createNew = createNew;
window.addResolution = addResolution;
window.likeResolution = likeResolution;
window.loadMoreGallery = loadMoreGallery;
window.openModal = openModal;
window.closeModal = closeModal;
window.removePhoto = removePhoto;
window.resetPhotoFilters = resetPhotoFilters;
window.applyPhotoFilters = applyPhotoFilters;

/* END OF SCRIPT */
