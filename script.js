// ====================================== 
// 🎯 GLOBAL VARIABLES & CONFIGURATION
// ====================================== 

const CONFIG = {
    currentLang: 'en',
    currentTheme: 'galaxy',
    musicEnabled: false,
    soundEnabled: true,
    currentPage: 'landingPage',
    userName: '',
    friendName: '',
    selectedTheme: 'fireworks',
    selectedTone: 'fun',
    shareCount: 0,
    achievements: []
};

// Fortune messages in both languages
const FORTUNES = {
    en: {
        general: [
            "2026 will be your breakthrough year! ✨",
            "An unexpected opportunity will change everything.",
            "Your biggest dreams are closer than you think.",
            "This year, the universe conspires in your favor.",
            "A significant milestone awaits you in 2026!",
            "Your positive energy will attract amazing people.",
            "2026 brings the success you've been working for.",
            "Trust the journey, magic is coming your way!"
        ],
        love: [
            "True love will find you when you least expect it. 💕",
            "Your relationship will reach new heights in 2026.",
            "A special someone is thinking about you right now.",
            "2026 will strengthen the bonds that matter most.",
            "Romance and passion will bloom this year!",
            "Your heart will know true happiness in 2026."
        ],
        career: [
            "A promotion or new opportunity is on the horizon. 🚀",
            "Your hard work will finally be recognized in 2026.",
            "A career-changing decision awaits you this year.",
            "Success in your professional life is guaranteed!",
            "2026 will open doors you never imagined.",
            "Your talents will shine brighter than ever!"
        ],
        wealth: [
            "Financial abundance is flowing your way! 💰",
            "An unexpected windfall will surprise you in 2026.",
            "Your investments will yield great returns.",
            "Prosperity and wealth are yours to claim this year.",
            "Money troubles will become a thing of the past.",
            "2026 brings financial freedom and security!"
        ],
        health: [
            "Your health and vitality will improve dramatically. 💪",
            "2026 is the year you achieve your fitness goals!",
            "Energy and wellness will be your companions.",
            "A healthy transformation awaits you this year.",
            "Your body and mind will find perfect balance.",
            "Vibrant health is your birthright in 2026!"
        ],
        spiritual: [
            "Spiritual awakening and enlightenment await you. 🙏",
            "2026 will deepen your connection to the divine.",
            "Inner peace and clarity will guide your path.",
            "Your spiritual journey takes a beautiful turn.",
            "Divine blessings will shower upon you this year.",
            "You'll discover your true purpose in 2026!"
        ]
    },
    hi: {
        general: [
            "2026 आपके जीवन का सबसे शानदार साल होगा! ✨",
            "एक अप्रत्याशित अवसर सब कुछ बदल देगा।",
            "आपके सबसे बड़े सपने पहुंच में हैं।",
            "इस साल ब्रह्मांड आपके पक्ष में है।",
            "2026 में एक महत्वपूर्ण उपलब्धि का इंतजार है!",
            "आपकी सकारात्मक ऊर्जा अद्भुत लोगों को आकर्षित करेगी।",
            "2026 आपकी मेहनत का फल लेकर आएगा।",
            "यात्रा पर विश्वास करें, जादू आ रहा है!"
        ],
        love: [
            "सच्चा प्यार तब मिलेगा जब आप उम्मीद नहीं करेंगे। 💕",
            "आपका रिश्ता 2026 में नई ऊंचाइयों को छुएगा।",
            "कोई खास अभी आपके बारे में सोच रहा है।",
            "2026 में महत्वपूर्ण रिश्ते और मजबूत होंगे।",
            "इस साल रोमांस और प्यार खिलेगा!",
            "आपका दिल 2026 में सच्ची खुशी जानेगा।"
        ],
        career: [
            "पदोन्नति या नया अवसर क्षितिज पर है। 🚀",
            "आपकी मेहनत को 2026 में मान्यता मिलेगी।",
            "एक करियर बदलने वाला फैसला इंतजार कर रहा है।",
            "पेशेवर जीवन में सफलता की गारंटी!",
            "2026 अकल्पनीय दरवाजे खोलेगा।",
            "आपकी प्रतिभा पहले से ज्यादा चमकेगी!"
        ],
        wealth: [
            "आर्थिक समृद्धि आपकी ओर आ रही है! 💰",
            "2026 में अप्रत्याशित धन आपको चौंकाएगा।",
            "आपके निवेश बड़ा रिटर्न देंगे।",
            "समृद्धि और धन इस साल आपका है।",
            "पैसों की समस्याएं अतीत की बात होंगी।",
            "2026 आर्थिक स्वतंत्रता लाएगा!"
        ],
        health: [
            "आपका स्वास्थ्य नाटकीय रूप से सुधरेगा। 💪",
            "2026 फिटनेस लक्ष्य हासिल करने का साल है!",
            "ऊर्जा और तंदुरुस्ती आपके साथी होंगे।",
            "एक स्वस्थ परिवर्तन इंतजार कर रहा है।",
            "शरीर और मन को संपूर्ण संतुलन मिलेगा।",
            "2026 में जीवंत स्वास्थ्य आपका है!"
        ],
        spiritual: [
            "आध्यात्मिक जागृति आपका इंतजार कर रही है। 🙏",
            "2026 आपके दिव्य संबंध को गहरा करेगा।",
            "आंतरिक शांति और स्पष्टता मार्गदर्शन करेगी।",
            "आपकी आध्यात्मिक यात्रा खूबसूरत मोड़ लेगी।",
            "इस साल दिव्य आशीर्वाद बरसेंगे।",
            "2026 में आप अपना असली उद्देश्य खोजेंगे!"
        ]
    }
};

// Wish messages templates
const WISH_TEMPLATES = {
    fun: {
        en: "May this year bring you endless joy, success, and magical moments! Let's make 2026 the best year yet! 🎉",
        hi: "यह साल आपके लिए अनंत खुशी, सफलता और जादुई पल लाए! चलो 2026 को सबसे अच्छा साल बनाएं! 🎉"
    },
    emotional: {
        en: "From the bottom of my heart, I wish you a year filled with love, peace, and beautiful memories. You deserve all the happiness in the world! 💝",
        hi: "दिल से, मैं आपको प्यार, शांति और खूबसूरत यादों से भरे साल की कामना करता हूं। आप दुनिया की सारी खुशियों के हकदार हैं! 💝"
    },
    spiritual: {
        en: "May divine blessings guide your path in 2026. May you find inner peace, wisdom, and spiritual growth. Om Shanti! 🙏",
        hi: "2026 में दिव्य आशीर्वाद आपके मार्ग का मार्गदर्शन करें। आंतरिक शांति, ज्ञान और आध्यात्मिक विकास मिले। ॐ शांति! 🙏"
    },
    motivational: {
        en: "2026 is YOUR year! Chase your dreams fearlessly, break barriers, and achieve the impossible. You've got this! 🚀",
        hi: "2026 आपका साल है! निडरता से अपने सपनों का पीछा करें, बाधाओं को तोड़ें, और असंभव को हासिल करें! 🚀"
    }
};

// Translation dictionary
const TRANSLATIONS = {
    en: {
        revealBtn: "Reveal My Surprise",
        createOwnBtn: "Create Your Own Wish",
        shareWhatsApp: "Share on WhatsApp",
        downloadImage: "Download Image",
        sendLoveBack: "Send Love Back"
    },
    hi: {
        revealBtn: "मेरा सरप्राइज़ खोलें",
        createOwnBtn: "अपनी शुभकामना बनाएं",
        shareWhatsApp: "व्हाट्सएप पर शेयर करें",
        downloadImage: "इमेज डाउनलोड करें",
        sendLoveBack: "प्यार वापस भेजें"
    }
};


// ====================================== 
// 🎵 AUDIO MANAGEMENT
// ====================================== 

const bgMusic = document.getElementById('bgMusic');
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');

function toggleMusic() {
    const musicBtn = document.getElementById('musicToggle');
    CONFIG.musicEnabled = !CONFIG.musicEnabled;
    
    if (CONFIG.musicEnabled) {
        bgMusic.play();
        musicBtn.classList.add('active');
    } else {
        bgMusic.pause();
        musicBtn.classList.remove('active');
    }
    
    playSound('click');
}

function toggleSound() {
    const soundBtn = document.getElementById('soundToggle');
    CONFIG.soundEnabled = !CONFIG.soundEnabled;
    
    if (CONFIG.soundEnabled) {
        soundBtn.classList.add('active');
    } else {
        soundBtn.classList.remove('active');
    }
    
    playSound('click');
}

function playSound(type) {
    if (!CONFIG.soundEnabled) return;
    
    switch(type) {
        case 'click':
            clickSound.currentTime = 0;
            clickSound.play().catch(e => console.log('Sound play failed'));
            break;
        case 'success':
            successSound.currentTime = 0;
            successSound.play().catch(e => console.log('Sound play failed'));
            break;
    }
}


// ====================================== 
// 🎨 THEME MANAGEMENT
// ====================================== 

function switchTheme(theme) {
    CONFIG.currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    
    // Update active theme button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-theme="${theme}"]`).classList.add('active');
    
    playSound('click');
    triggerFireworks();
}


// ====================================== 
// 🌐 LANGUAGE MANAGEMENT
// ====================================== 

function switchLanguage(lang) {
    CONFIG.currentLang = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-en]').forEach(el => {
        if (lang === 'en') {
            el.textContent = el.getAttribute('data-en');
        } else {
            el.textContent = el.getAttribute('data-hi');
        }
    });
    
    playSound('click');
}


// ====================================== 
// 📄 PAGE NAVIGATION
// ====================================== 

function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        CONFIG.currentPage = pageId;
        
        // Trigger page-specific animations
        if (pageId === 'wishRevealPage') {
            setTimeout(() => animateGiftBox(), 500);
        }
        
        playSound('click');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}


// ====================================== 
// 🎆 FIREWORKS ANIMATION
// ====================================== 

const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = {
            x: (Math.random() - 0.5) * 8,
            y: (Math.random() - 0.5) * 8
        };
        this.alpha = 1;
        this.decay = Math.random() * 0.015 + 0.015;
    }
    
    update() {
        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;
        this.velocity.y += 0.2;
        
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= this.decay;
    }
    
    draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

let particles = [];
let fireworksInterval;

function createFirework(x, y) {
    const colors = ['#ff6b9d', '#ffd700', '#00f5ff', '#b24bf3', '#38ef7d'];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, color));
    }
    
    playSound('success');
}

function animateFireworks() {
    ctx.fillStyle = 'rgba(10, 14, 39, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(particle => particle.alpha > 0);
    
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateFireworks);
}

function triggerFireworks() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    createFirework(x, y);
}

// Start fireworks animation
animateFireworks();

// Random fireworks
setInterval(() => {
    if (Math.random() > 0.7) {
        triggerFireworks();
    }
}, 2000);


// ====================================== 
// ✨ CONFETTI ANIMATION
// ====================================== 

function createConfetti() {
    const confettiContainer = document.getElementById('confettiContainer');
    const colors = ['#ff6b9d', '#ffd700', '#00f5ff', '#b24bf3', '#38ef7d', '#ff8c00'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}


// ====================================== 
// 🎁 GIFT BOX ANIMATION
// ====================================== 

function animateGiftBox() {
    const giftBox = document.getElementById('giftBox');
    const wishCard = document.getElementById('wishCard');
    
    if (!giftBox || !wishCard) return;
    
    giftBox.addEventListener('click', function() {
        this.classList.add('opened');
        playSound('success');
        
        setTimeout(() => {
            giftBox.style.display = 'none';
            wishCard.classList.remove('hidden');
            createConfetti();
            triggerFireworks();
            
            // Show achievement
            unlockAchievement('First Wish Revealed! 🎉');
        }, 1000);
    });
}


// ====================================== 
// 💝 WISH REVEAL PAGE
// ====================================== 

function loadWishFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const sender = urlParams.get('from') || 'Your Friend';
    const receiver = urlParams.get('to') || 'Friend';
    const theme = urlParams.get('theme') || 'fun';
    const message = urlParams.get('msg') || '';
    
    // Update wish card content
    if (document.getElementById('senderName')) {
        document.getElementById('senderName').textContent = sender;
    }
    if (document.getElementById('receiverName')) {
        document.getElementById('receiverName').textContent = receiver;
    }
    
    // Update message if custom message exists
    if (message && document.querySelector('.wish-description')) {
        document.querySelector('.wish-description').textContent = decodeURIComponent(message);
    }
    
    // If URL has parameters, show wish reveal page
    if (urlParams.get('from') || urlParams.get('to')) {
        setTimeout(() => {
            showPage('wishRevealPage');
        }, 1000);
    }
}


// ====================================== 
// 🌈 EMOJI RAIN TRIGGER
// ====================================== 

function triggerEmojiRain() {
    const emojis = ['🎊', '🎉', '✨', '💫', '⭐', '🌟', '💝', '❤️', '🎁'];
    const body = document.body;
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = '-50px';
            emoji.style.fontSize = (Math.random() * 20 + 20) + 'px';
            emoji.style.zIndex = '9999';
            emoji.style.pointerEvents = 'none';
            emoji.style.animation = `confettiFall ${Math.random() * 2 + 3}s linear forwards`;
            
            body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 5000);
        }, i * 50);
    }
    
    playSound('success');
    createConfetti();
}


// ====================================== 
// 📤 SHARE FUNCTIONS
// ====================================== 

function shareToWhatsApp() {
    const sender = document.getElementById('senderName')?.textContent || 'Someone';
    const receiver = document.getElementById('receiverName')?.textContent || 'You';
    
    const message = CONFIG.currentLang === 'en' 
        ? `🎊 Hey! ${sender} sent you a special New Year 2026 wish! 🎉\n\nClick here to see your surprise:\n${window.location.href}\n\n✨ Create your own magical wish and share the joy!`
        : `🎊 अरे! ${sender} ने आपके लिए नया साल 2026 की खास शुभकामना भेजी है! 🎉\n\nअपना सरप्राइज़ देखने के लिए यहाँ क्लिक करें:\n${window.location.href}\n\n✨ अपनी जादुई शुभकामना बनाएं और खुशियाँ बांटें!`;
    
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    // Update share count
    updateShareCount();
    playSound('success');
}

function shareToFacebook() {
    const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(shareURL, '_blank', 'width=600,height=400');
    updateShareCount();
    playSound('click');
}

function shareToTwitter() {
    const text = "Someone sent me a beautiful New Year 2026 wish! 🎊✨ Create yours too!";
    const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(shareURL, '_blank', 'width=600,height=400');
    updateShareCount();
    playSound('click');
}

function shareToInstagram() {
    alert(CONFIG.currentLang === 'en' 
        ? 'Download the wish image and share it on Instagram! 📸'
        : 'विश इमेज डाउनलोड करें और Instagram पर शेयर करें! 📸');
    downloadWish();
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification(
                CONFIG.currentLang === 'en' ? 'Link copied! 🎉' : 'लिंक कॉपी हो गया! 🎉'
            );
            playSound('success');
        });
    } else {
        // Fallback
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showNotification(
            CONFIG.currentLang === 'en' ? 'Link copied! 🎉' : 'लिंक कॉपी हो गया! 🎉'
        );
        playSound('success');
    }
}

function updateShareCount() {
    CONFIG.shareCount++;
    localStorage.setItem('shareCount', CONFIG.shareCount);
    
    // Update challenge progress
    updateChallengeProgress();
    
    // Achievement for first share
    if (CONFIG.shareCount === 1) {
        unlockAchievement('First Share! 🎉');
    }
    
    // Achievement for 5 shares
    if (CONFIG.shareCount === 5) {
        unlockAchievement('Viral Star! 🌟');
        unlockSecretGift();
    }
}


// ====================================== 
// 🖼️ DOWNLOAD WISH AS IMAGE
// ====================================== 

function downloadWish() {
    // This would use html2canvas library in production
    alert(CONFIG.currentLang === 'en' 
        ? 'Download feature coming soon! For now, take a screenshot 📸'
        : 'डाउनलोड फीचर जल्द आ रहा है! अभी स्क्रीनशॉट लें 📸');
    
    playSound('click');
    
    /* 
    // Production code with html2canvas:
    html2canvas(document.querySelector('#wishCard')).then(canvas => {
        const link = document.createElement('a');
        link.download = 'NewYear2026_Wish.png';
        link.href = canvas.toDataURL();
        link.click();
    });
    */
}

function sendLoveBack() {
    showPage('createPage');
    playSound('click');
}
// ====================================== 
// 📝 CREATE YOUR OWN WISH - FORM HANDLING
// ====================================== 

function initializeCreatePage() {
    const yourNameInput = document.getElementById('yourName');
    const friendNameInput = document.getElementById('friendName');
    const customMessageInput = document.getElementById('customMessage');
    
    // Live preview updates
    if (yourNameInput) {
        yourNameInput.addEventListener('input', updateLivePreview);
    }
    if (friendNameInput) {
        friendNameInput.addEventListener('input', updateLivePreview);
    }
    if (customMessageInput) {
        customMessageInput.addEventListener('input', updateLivePreview);
    }
    
    // Theme option buttons
    document.querySelectorAll('.theme-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.theme-option').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            CONFIG.selectedTheme = this.getAttribute('data-theme');
            updateLivePreview();
            playSound('click');
        });
    });
    
    // Tone option buttons
    document.querySelectorAll('.tone-option').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tone-option').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            CONFIG.selectedTone = this.getAttribute('data-tone');
            updateLivePreview();
            playSound('click');
        });
    });
}

function updateLivePreview() {
    const yourName = document.getElementById('yourName')?.value || (CONFIG.currentLang === 'en' ? 'You' : 'आप');
    const friendName = document.getElementById('friendName')?.value || (CONFIG.currentLang === 'en' ? 'Friend' : 'दोस्त');
    const customMessage = document.getElementById('customMessage')?.value;
    
    // Update preview receiver name
    const previewReceiver = document.getElementById('previewReceiver');
    if (previewReceiver) {
        previewReceiver.textContent = friendName;
    }
    
    // Update preview sender name
    const previewSender = document.getElementById('previewSender');
    if (previewSender) {
        previewSender.textContent = yourName;
    }
    
    // Update preview message
    const previewMessage = document.getElementById('previewMessage');
    if (previewMessage) {
        if (customMessage && customMessage.trim() !== '') {
            previewMessage.textContent = customMessage;
        } else {
            const template = WISH_TEMPLATES[CONFIG.selectedTone];
            previewMessage.textContent = template ? template[CONFIG.currentLang] : '';
        }
    }
    
    // Update preview theme style
    updatePreviewTheme();
}

function updatePreviewTheme() {
    const livePreview = document.getElementById('livePreview');
    if (!livePreview) return;
    
    // Remove all theme classes
    livePreview.classList.remove('theme-fireworks', 'theme-galaxy', 'theme-golden', 'theme-romantic', 'theme-nature');
    
    // Add selected theme class
    livePreview.classList.add(`theme-${CONFIG.selectedTheme}`);
}

function generateWishLink() {
    const yourName = document.getElementById('yourName')?.value;
    const friendName = document.getElementById('friendName')?.value;
    const customMessage = document.getElementById('customMessage')?.value;
    
    // Validation
    if (!yourName || yourName.trim() === '') {
        showNotification(
            CONFIG.currentLang === 'en' ? 'Please enter your name!' : 'कृपया अपना नाम दर्ज करें!'
        );
        return;
    }
    
    if (!friendName || friendName.trim() === '') {
        showNotification(
            CONFIG.currentLang === 'en' ? "Please enter your friend's name!" : 'कृपया अपने दोस्त का नाम दर्ज करें!'
        );
        return;
    }
    
    // Build URL
    const baseURL = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
        from: yourName,
        to: friendName,
        theme: CONFIG.selectedTheme,
        tone: CONFIG.selectedTone
    });
    
    if (customMessage && customMessage.trim() !== '') {
        params.append('msg', customMessage);
    }
    
    const generatedURL = `${baseURL}?${params.toString()}`;
    
    // Show generated link section
    const generatedLinkSection = document.getElementById('generatedLinkSection');
    const generatedLinkInput = document.getElementById('generatedLink');
    
    if (generatedLinkSection && generatedLinkInput) {
        generatedLinkInput.value = generatedURL;
        generatedLinkSection.classList.remove('hidden');
        
        // Scroll to link
        generatedLinkSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Store for later use
    CONFIG.generatedLink = generatedURL;
    
    playSound('success');
    createConfetti();
    unlockAchievement(CONFIG.currentLang === 'en' ? 'Wish Created! 🎊' : 'शुभकामना बनाई! 🎊');
}

function copyGeneratedLink() {
    const linkInput = document.getElementById('generatedLink');
    
    if (linkInput) {
        linkInput.select();
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(linkInput.value).then(() => {
                showNotification(CONFIG.currentLang === 'en' ? 'Link copied! 🎉' : 'लिंक कॉपी हो गया! 🎉');
                playSound('success');
            });
        } else {
            document.execCommand('copy');
            showNotification(CONFIG.currentLang === 'en' ? 'Link copied! 🎉' : 'लिंक कॉपी हो गया! 🎉');
            playSound('success');
        }
    }
}

function shareGeneratedLink() {
    const link = CONFIG.generatedLink || document.getElementById('generatedLink')?.value;
    const friendName = document.getElementById('friendName')?.value || 'your friend';
    
    if (!link) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please generate a link first!' : 'पहले लिंक बनाएं!');
        return;
    }
    
    const message = CONFIG.currentLang === 'en'
        ? `🎊 Happy New Year 2026! 🎉\n\nI've sent you a special New Year wish! ✨\n\nClick here to see your surprise:\n${link}\n\nLet's make 2026 amazing together! 💫`
        : `🎊 नया साल 2026 मुबारक हो! 🎉\n\nमैंने आपके लिए एक खास नए साल की शुभकामना भेजी है! ✨\n\nअपना सरप्राइज़ देखने के लिए यहाँ क्लिक करें:\n${link}\n\nचलो 2026 को शानदार बनाएं! 💫`;
    
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    updateShareCount();
    playSound('success');
}

function downloadQR() {
    const link = CONFIG.generatedLink || document.getElementById('generatedLink')?.value;
    
    if (!link) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please generate a link first!' : 'पहले लिंक बनाएं!');
        return;
    }
    
    // In production, use QR code library like qrcode.js
    alert(CONFIG.currentLang === 'en' 
        ? 'QR Code feature coming soon! For now, share the link directly. 📱'
        : 'QR Code फीचर जल्द आ रहा है! अभी लिंक सीधे शेयर करें। 📱');
    
    playSound('click');
}


// ====================================== 
// 📸 PHOTO BOOTH FUNCTIONALITY
// ====================================== 

let stream = null;
let capturedImageData = null;

function startCamera() {
    const video = document.getElementById('cameraVideo');
    const startBtn = document.getElementById('startCameraBtn');
    const captureBtn = document.getElementById('captureBtn');
    
    if (!video) return;
    
    // Request camera access
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false })
        .then(function(mediaStream) {
            stream = mediaStream;
            video.srcObject = mediaStream;
            video.style.display = 'block';
            
            // Update buttons
            if (startBtn) startBtn.classList.add('hidden');
            if (captureBtn) captureBtn.classList.remove('hidden');
            
            playSound('success');
        })
        .catch(function(error) {
            console.error('Camera error:', error);
            showNotification(
                CONFIG.currentLang === 'en' 
                    ? 'Camera access denied. Please allow camera permissions.' 
                    : 'कैमरा एक्सेस अस्वीकृत। कृपया कैमरा अनुमति दें।'
            );
        });
}

function capturePhoto() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('photoCanvas');
    const capturedPhoto = document.getElementById('capturedPhoto');
    const captureBtn = document.getElementById('captureBtn');
    const retakeBtn = document.getElementById('retakeBtn');
    const downloadPhotoBtn = document.getElementById('downloadPhotoBtn');
    
    if (!video || !canvas) return;
    
    // Set canvas size to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame to canvas
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Get image data
    capturedImageData = canvas.toDataURL('image/png');
    
    // Show captured photo
    if (capturedPhoto) {
        capturedPhoto.src = capturedImageData;
        capturedPhoto.style.display = 'block';
    }
    
    // Hide video
    video.style.display = 'none';
    
    // Stop camera stream
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }
    
    // Update buttons
    if (captureBtn) captureBtn.classList.add('hidden');
    if (retakeBtn) retakeBtn.classList.remove('hidden');
    if (downloadPhotoBtn) downloadPhotoBtn.classList.remove('hidden');
    
    playSound('success');
    createConfetti();
}

function retakePhoto() {
    const video = document.getElementById('cameraVideo');
    const capturedPhoto = document.getElementById('capturedPhoto');
    const captureBtn = document.getElementById('captureBtn');
    const retakeBtn = document.getElementById('retakeBtn');
    const downloadPhotoBtn = document.getElementById('downloadPhotoBtn');
    
    // Hide captured photo
    if (capturedPhoto) {
        capturedPhoto.style.display = 'none';
    }
    
    // Update buttons
    if (captureBtn) captureBtn.classList.remove('hidden');
    if (retakeBtn) retakeBtn.classList.add('hidden');
    if (downloadPhotoBtn) downloadPhotoBtn.classList.add('hidden');
    
    // Restart camera
    startCamera();
}

function downloadPhoto() {
    if (!capturedImageData) {
        showNotification(CONFIG.currentLang === 'en' ? 'No photo to download!' : 'डाउनलोड करने के लिए कोई फोटो नहीं!');
        return;
    }
    
    const link = document.createElement('a');
    link.download = 'NewYear2026_Photo.png';
    link.href = capturedImageData;
    link.click();
    
    playSound('success');
    unlockAchievement(CONFIG.currentLang === 'en' ? 'Photo Downloaded! 📸' : 'फोटो डाउनलोड हुई! 📸');
}

// Frame selection
function initializeFrameSelection() {
    document.querySelectorAll('.frame-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.frame-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            const frameType = this.getAttribute('data-frame');
            updateSelectedFrame(frameType);
            
            playSound('click');
        });
    });
}

function updateSelectedFrame(frameType) {
    // In production, this would update the actual frame overlay
    console.log('Selected frame:', frameType);
}


// ====================================== 
// 🎁 FORTUNE COOKIE FUNCTIONALITY
// ====================================== 

let currentCategory = 'general';

function initializeFortuneCookie() {
    // Category selection
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.getAttribute('data-category');
            playSound('click');
        });
    });
}

function crackFortuneCookie() {
    const fortuneCookie = document.getElementById('fortuneCookie');
    const fortuneText = document.getElementById('fortuneText');
    const fortuneSlip = document.getElementById('fortuneSlip');
    const fortuneShare = document.getElementById('fortuneShare');
    const crackBtn = document.getElementById('crackCookieBtn');
    
    if (!fortuneCookie || !fortuneText) return;
    
    // Get random fortune from selected category
    const fortunes = FORTUNES[CONFIG.currentLang][currentCategory];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    
    // Update fortune text
    fortuneText.textContent = randomFortune;
    
    // Animate cookie cracking
    fortuneCookie.classList.add('cracked');
    
    // Show fortune slip
    if (fortuneSlip) {
        fortuneSlip.classList.remove('hidden');
    }
    
    // Show share button
    if (fortuneShare) {
        setTimeout(() => {
            fortuneShare.classList.remove('hidden');
        }, 1000);
    }
    
    // Hide crack button
    if (crackBtn) {
        crackBtn.style.display = 'none';
    }
    
    // Store fortune for sharing
    CONFIG.currentFortune = randomFortune;
    
    playSound('success');
    createConfetti();
    unlockAchievement(CONFIG.currentLang === 'en' ? 'Fortune Revealed! 🔮' : 'भविष्यफल खुला! 🔮');
}

function shareFortune() {
    const fortune = CONFIG.currentFortune;
    
    if (!fortune) {
        showNotification(CONFIG.currentLang === 'en' ? 'Crack the cookie first!' : 'पहले कुकी तोड़ें!');
        return;
    }
    
    const message = CONFIG.currentLang === 'en'
        ? `🔮 My 2026 Fortune:\n\n"${fortune}"\n\n✨ Discover your fortune too!\n${window.location.origin}`
        : `🔮 मेरा 2026 भविष्यफल:\n\n"${fortune}"\n\n✨ अपना भविष्यफल भी जानें!\n${window.location.origin}`;
    
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    
    updateShareCount();
    playSound('success');
}


// ====================================== 
// 🎯 VIRAL CHALLENGE SYSTEM
// ====================================== 

function updateChallengeProgress() {
    const shareCount = CONFIG.shareCount;
    const progressBar = document.getElementById('challengeProgressBar');
    const challengeCount = document.getElementById('challengeCount');
    
    if (progressBar) {
        const percentage = Math.min((shareCount / 5) * 100, 100);
        progressBar.style.width = percentage + '%';
    }
    
    if (challengeCount) {
        challengeCount.textContent = `${Math.min(shareCount, 5)}/5`;
    }
    
    // Update steps
    if (shareCount >= 1) {
        const step2 = document.getElementById('step2');
        if (step2) step2.classList.add('completed');
    }
    
    if (shareCount >= 5) {
        const step3 = document.getElementById('step3');
        if (step3) step3.classList.add('completed');
        unlockSecretGift();
    }
}

function joinChallenge() {
    showPage('createPage');
    playSound('click');
    showNotification(
        CONFIG.currentLang === 'en' 
            ? 'Create and share your wish to complete the challenge! 🚀'
            : 'चैलेंज पूरा करने के लिए अपनी शुभकामना बनाएं और शेयर करें! 🚀'
    );
}

function unlockSecretGift() {
    const secretGift = document.getElementById('secretGift');
    
    if (secretGift) {
        secretGift.classList.remove('hidden');
        playSound('success');
        createConfetti();
        triggerFireworks();
    }
}


// ====================================== 
// 🏆 ACHIEVEMENT SYSTEM
// ====================================== 

function unlockAchievement(message) {
    // Check if already unlocked
    if (CONFIG.achievements.includes(message)) return;
    
    CONFIG.achievements.push(message);
    localStorage.setItem('achievements', JSON.stringify(CONFIG.achievements));
    
    // Show achievement popup
    showAchievementPopup(message);
}

function showAchievementPopup(message) {
    const achievementPopup = document.getElementById('achievementPopup');
    
    if (achievementPopup) {
        achievementPopup.querySelector('span').textContent = message;
        achievementPopup.classList.remove('hidden');
        
        playSound('success');
        
        setTimeout(() => {
            achievementPopup.classList.add('hidden');
        }, 4000);
    }
}

function closeAchievement() {
    const achievementSystem = document.getElementById('achievementSystem');
    if (achievementSystem) {
        achievementSystem.classList.add('hidden');
    }
}


// ====================================== 
// 💝 DONATION/PAYMENT FUNCTIONS
// ====================================== 

let selectedAmount = 0;

function initializeDonationPage() {
    // Amount selection
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedAmount = parseInt(this.getAttribute('data-amount'));
            playSound('click');
        });
    });
    
    // Custom amount
    const customAmountInput = document.getElementById('customAmount');
    if (customAmountInput) {
        customAmountInput.addEventListener('input', function() {
            selectedAmount = parseInt(this.value) || 0;
            document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
        });
    }
}

function payWithUPI() {
    if (selectedAmount === 0) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please select an amount!' : 'कृपया राशि चुनें!');
        return;
    }
    
    // In production, integrate actual UPI payment
    const upiID = 'yourname@paytm'; // Replace with actual UPI ID
    const upiURL = `upi://pay?pa=${upiID}&pn=NewYearWishes&am=${selectedAmount}&cu=INR&tn=Support NewYear2026`;
    
    showNotification(
        CONFIG.currentLang === 'en'
            ? `Opening UPI app for ₹${selectedAmount}... Thank you! 💝`
            : `₹${selectedAmount} के लिए UPI ऐप खोल रहे हैं... धन्यवाद! 💝`
    );
    
    window.location.href = upiURL;
    playSound('success');
}

function payWithPhonePe() {
    if (selectedAmount === 0) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please select an amount!' : 'कृपया राशि चुनें!');
        return;
    }
    
    // PhonePe payment URL
    const upiID = 'yourname@ybl'; // Replace with actual PhonePe UPI ID
    const upiURL = `phonepe://pay?pa=${upiID}&pn=NewYearWishes&am=${selectedAmount}&cu=INR`;
    
    showNotification(
        CONFIG.currentLang === 'en'
            ? `Opening PhonePe for ₹${selectedAmount}... 🙏`
            : `₹${selectedAmount} के लिए PhonePe खोल रहे हैं... 🙏`
    );
    
    window.location.href = upiURL;
    playSound('success');
}

function payWithGPay() {
    if (selectedAmount === 0) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please select an amount!' : 'कृपया राशि चुनें!');
        return;
    }
    
    // Google Pay payment URL
    const upiID = 'yourname@okaxis'; // Replace with actual GPay UPI ID
    const upiURL = `gpay://upi/pay?pa=${upiID}&pn=NewYearWishes&am=${selectedAmount}&cu=INR`;
    
    showNotification(
        CONFIG.currentLang === 'en'
            ? `Opening Google Pay for ₹${selectedAmount}... 💚`
            : `₹${selectedAmount} के लिए Google Pay खोल रहे हैं... 💚`
    );
    
    window.location.href = upiURL;
    playSound('success');
}

function payWithPaytm() {
    if (selectedAmount === 0) {
        showNotification(CONFIG.currentLang === 'en' ? 'Please select an amount!' : 'कृपया राशि चुनें!');
        return;
    }
    
    // Paytm payment URL
    const upiID = 'yourname@paytm'; // Replace with actual Paytm UPI ID
    const upiURL = `paytmmp://pay?pa=${upiID}&pn=NewYearWishes&am=${selectedAmount}&cu=INR`;
    
    showNotification(
        CONFIG.currentLang === 'en'
            ? `Opening Paytm for ₹${selectedAmount}... 💙`
            : `₹${selectedAmount} के लिए Paytm खोल रहे हैं... 💙`
    );
    
    window.location.href = upiURL;
    playSound('success');
}


// ====================================== 
// ⏰ COUNTDOWN TIMER TO 2026
// ====================================== 

function startCountdown() {
    const targetDate = new Date('January 1, 2026 00:00:00').getTime();
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update countdown display
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');
        
        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
        // If countdown finished
        if (distance < 0) {
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            
            // Trigger celebration
            createConfetti();
            triggerFireworks();
        }
    }, 1000);
}


// ====================================== 
// 📊 NOTIFICATION SYSTEM
// ====================================== 

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification-toast';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}


// ====================================== 
// 📱 LIVE WISH COUNTER (SOCIAL PROOF)
// ====================================== 

function updateLiveCounter() {
    const counterEl = document.getElementById('wishCounter');
    
    if (counterEl) {
        setInterval(() => {
            let currentCount = parseInt(counterEl.textContent.replace(/,/g, ''));
            currentCount += Math.floor(Math.random() * 3) + 1;
            counterEl.textContent = currentCount.toLocaleString();
        }, 5000);
    }
}


// ====================================== 
// 📊 ANALYTICS & TRACKING
// ====================================== 

function trackEvent(eventName, eventData = {}) {
    // In production, integrate with Google Analytics or other analytics
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
    
    // Store in localStorage for basic tracking
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push({
        name: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('events', JSON.stringify(events));
}
// ====================================== 
// 🎬 EVENT LISTENERS & INITIALIZATION
// ====================================== 

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎊 Happy New Year 2026 Website Loaded!');
    
    // Initialize all features
    initializeApp();
    
    // Load saved preferences
    loadUserPreferences();
    
    // Check URL parameters
    loadWishFromURL();
    
    // Start countdown
    startCountdown();
    
    // Update live counter
    updateLiveCounter();
    
    // Initialize page-specific features
    initializeCreatePage();
    initializeFortuneCookie();
    initializeDonationPage();
    initializeFrameSelection();
    
    // Track page load
    trackEvent('page_load', { page: 'landing' });
});


// ====================================== 
// 🚀 APP INITIALIZATION
// ====================================== 

function initializeApp() {
    // Music Toggle
    const musicToggle = document.getElementById('musicToggle');
    if (musicToggle) {
        musicToggle.addEventListener('click', toggleMusic);
    }
    
    // Sound Toggle
    const soundToggle = document.getElementById('soundToggle');
    if (soundToggle) {
        soundToggle.addEventListener('click', toggleSound);
    }
    
    // Theme Switcher
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            switchTheme(theme);
            trackEvent('theme_change', { theme });
        });
    });
    
    // Language Switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
            trackEvent('language_change', { language: lang });
        });
    });
    
    // Landing Page Buttons
    const revealBtn = document.getElementById('revealBtn');
    if (revealBtn) {
        revealBtn.addEventListener('click', function() {
            showPage('wishRevealPage');
            trackEvent('reveal_clicked');
        });
    }
    
    const createOwnBtn = document.getElementById('createOwnBtn');
    if (createOwnBtn) {
        createOwnBtn.addEventListener('click', function() {
            showPage('createPage');
            trackEvent('create_clicked');
        });
    }
    
    // Generate Wish Link Button
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateWishLink();
            trackEvent('link_generated');
        });
    }
    
    // Photo Booth Buttons
    const startCameraBtn = document.getElementById('startCameraBtn');
    if (startCameraBtn) {
        startCameraBtn.addEventListener('click', function() {
            startCamera();
            trackEvent('camera_started');
        });
    }
    
    const captureBtn = document.getElementById('captureBtn');
    if (captureBtn) {
        captureBtn.addEventListener('click', function() {
            capturePhoto();
            trackEvent('photo_captured');
        });
    }
    
    const retakeBtn = document.getElementById('retakeBtn');
    if (retakeBtn) {
        retakeBtn.addEventListener('click', retakePhoto);
    }
    
    const downloadPhotoBtn = document.getElementById('downloadPhotoBtn');
    if (downloadPhotoBtn) {
        downloadPhotoBtn.addEventListener('click', downloadPhoto);
    }
    
    // Fortune Cookie Button
    const crackCookieBtn = document.getElementById('crackCookieBtn');
    if (crackCookieBtn) {
        crackCookieBtn.addEventListener('click', function() {
            crackFortuneCookie();
            trackEvent('fortune_revealed', { category: currentCategory });
        });
    }
    
    // Challenge Button
    const joinChallengeBtn = document.getElementById('joinChallengeBtn');
    if (joinChallengeBtn) {
        joinChallengeBtn.addEventListener('click', function() {
            joinChallenge();
            trackEvent('challenge_joined');
        });
    }
    
    // Update challenge progress from saved count
    const savedShareCount = localStorage.getItem('shareCount');
    if (savedShareCount) {
        CONFIG.shareCount = parseInt(savedShareCount);
        updateChallengeProgress();
    }
    
    // Footer navigation links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').substring(1);
            showPage(pageId);
        });
    });
    
    // Random fireworks on canvas click
    canvas.addEventListener('click', function(e) {
        createFirework(e.clientX, e.clientY);
    });
    
    // Prevent right-click on images (optional protection)
    document.addEventListener('contextmenu', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    });
}


// ====================================== 
// 💾 LOCAL STORAGE MANAGEMENT
// ====================================== 

function loadUserPreferences() {
    // Load theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        CONFIG.currentTheme = savedTheme;
        switchTheme(savedTheme);
    }
    
    // Load language
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        CONFIG.currentLang = savedLang;
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        switchLanguage(savedLang);
    }
    
    // Load achievements
    const savedAchievements = localStorage.getItem('achievements');
    if (savedAchievements) {
        CONFIG.achievements = JSON.parse(savedAchievements);
    }
    
    // Load music preference
    const musicEnabled = localStorage.getItem('musicEnabled');
    if (musicEnabled === 'true') {
        CONFIG.musicEnabled = true;
        document.getElementById('musicToggle')?.classList.add('active');
    }
    
    // Load sound preference
    const soundEnabled = localStorage.getItem('soundEnabled');
    if (soundEnabled !== null) {
        CONFIG.soundEnabled = soundEnabled === 'true';
        if (CONFIG.soundEnabled) {
            document.getElementById('soundToggle')?.classList.add('active');
        }
    }
}

function saveUserPreferences() {
    localStorage.setItem('theme', CONFIG.currentTheme);
    localStorage.setItem('language', CONFIG.currentLang);
    localStorage.setItem('musicEnabled', CONFIG.musicEnabled);
    localStorage.setItem('soundEnabled', CONFIG.soundEnabled);
}

// Save preferences when changed
window.addEventListener('beforeunload', saveUserPreferences);


// ====================================== 
// 📱 MOBILE OPTIMIZATIONS
// ====================================== 

function detectMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function optimizeForMobile() {
    if (detectMobile()) {
        // Reduce particle count on mobile
        document.body.classList.add('mobile-device');
        
        // Disable some animations on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
            document.body.classList.add('low-performance');
        }
        
        // Add touch feedback
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            btn.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
        
        // Optimize video for mobile
        const video = document.getElementById('cameraVideo');
        if (video) {
            video.setAttribute('playsinline', 'true');
        }
    }
}

// Initialize mobile optimizations
optimizeForMobile();


// ====================================== 
// 🔧 UTILITY FUNCTIONS
// ====================================== 

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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    const colors = ['#ff6b9d', '#ffd700', '#00f5ff', '#b24bf3', '#38ef7d', '#ff8c00'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch (e) {
        return false;
    }
}


// ====================================== 
// 🐛 ERROR HANDLING
// ====================================== 

window.addEventListener('error', function(e) {
    console.error('Error occurred:', e.error);
    
    // Log error for analytics
    trackEvent('error', {
        message: e.error?.message,
        stack: e.error?.stack,
        filename: e.filename,
        lineno: e.lineno
    });
    
    // Don't show error to user unless critical
    return true; // Prevents default error handling
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    
    trackEvent('unhandled_rejection', {
        reason: e.reason?.toString()
    });
});

// Fallback for unsupported features
function checkBrowserSupport() {
    const features = {
        canvas: !!document.createElement('canvas').getContext,
        localStorage: (function() {
            try {
                localStorage.setItem('test', 'test');
                localStorage.removeItem('test');
                return true;
            } catch(e) {
                return false;
            }
        })(),
        webGL: (function() {
            try {
                const canvas = document.createElement('canvas');
                return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
            } catch(e) {
                return false;
            }
        })(),
        getUserMedia: !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
    };
    
    // Warn about unsupported features
    if (!features.canvas) {
        console.warn('Canvas not supported - fireworks disabled');
    }
    
    if (!features.localStorage) {
        console.warn('LocalStorage not supported - preferences won\'t be saved');
    }
    
    if (!features.getUserMedia) {
        console.warn('Camera not supported - photo booth disabled');
        const photoBoothBtn = document.querySelector('[href="#photoBoothPage"]');
        if (photoBoothBtn) {
            photoBoothBtn.style.opacity = '0.5';
            photoBoothBtn.title = 'Camera not supported on this device';
        }
    }
    
    return features;
}

// Check browser support on load
const browserSupport = checkBrowserSupport();


// ====================================== 
// 🚀 PERFORMANCE OPTIMIZATIONS
// ====================================== 

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Optimize animations based on device performance
function optimizeAnimations() {
    // Reduce motion if user prefers
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduce-motion');
    }
    
    // Check FPS and reduce animations if low
    let lastTime = performance.now();
    let frames = 0;
    let fps = 60;
    
    function checkFPS() {
        const currentTime = performance.now();
        frames++;
        
        if (currentTime >= lastTime + 1000) {
            fps = Math.round((frames * 1000) / (currentTime - lastTime));
            frames = 0;
            lastTime = currentTime;
            
            // If FPS is low, reduce effects
            if (fps < 30) {
                document.body.classList.add('low-fps');
                console.warn('Low FPS detected, reducing animations');
            }
        }
        
        requestAnimationFrame(checkFPS);
    }
    
    requestAnimationFrame(checkFPS);
}

// Initialize optimizations
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

optimizeAnimations();

// Preload critical resources
function preloadCriticalResources() {
    const resources = [
        // Add URLs of critical resources to preload
    ];
    
    resources.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = url.endsWith('.css') ? 'style' : url.endsWith('.js') ? 'script' : 'fetch';
        document.head.appendChild(link);
    });
}


// ====================================== 
// 🎯 URL PARAMETER HANDLING
// ====================================== 

function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function updateURLParameter(key, value) {
    const url = new URL(window.location);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
}

function removeURLParameter(key) {
    const url = new URL(window.location);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
}


// ====================================== 
// 📊 VISITOR STATISTICS
// ====================================== 

function updateVisitorStats() {
    // Get or create visitor ID
    let visitorId = localStorage.getItem('visitorId');
    if (!visitorId) {
        visitorId = 'visitor_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('visitorId', visitorId);
    }
    
    // Increment visit count
    let visitCount = parseInt(localStorage.getItem('visitCount') || '0');
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    
    // Track first visit date
    if (!localStorage.getItem('firstVisit')) {
        localStorage.setItem('firstVisit', new Date().toISOString());
    }
    
    // Track last visit
    localStorage.setItem('lastVisit', new Date().toISOString());
    
    // Track session
    sessionStorage.setItem('sessionStart', sessionStorage.getItem('sessionStart') || new Date().toISOString());
    
    trackEvent('visitor_stats', {
        visitorId,
        visitCount,
        isReturning: visitCount > 1
    });
}

updateVisitorStats();


// ====================================== 
// 🎨 DYNAMIC THEME PREVIEW
// ====================================== 

// Add CSS for theme previews dynamically
const themeStyles = document.createElement('style');
themeStyles.textContent = `
    .theme-fireworks { background: linear-gradient(135deg, rgba(255, 107, 157, 0.2), rgba(102, 126, 234, 0.2)); }
    .theme-galaxy { background: linear-gradient(135deg, rgba(138, 43, 226, 0.3), rgba(75, 0, 130, 0.3)); }
    .theme-golden { background: linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 140, 0, 0.3)); }
    .theme-romantic { background: linear-gradient(135deg, rgba(255, 105, 180, 0.3), rgba(255, 20, 147, 0.3)); }
    .theme-nature { background: linear-gradient(135deg, rgba(34, 139, 34, 0.3), rgba(144, 238, 144, 0.3)); }
    
    @media (max-width: 768px) {
        .reduce-motion * { animation-duration: 0.01ms !important; }
        .low-performance .stars, .low-performance #fireworksCanvas { display: none; }
        .low-fps .sparkle-effect { display: none; }
    }
`;
document.head.appendChild(themeStyles);


// ====================================== 
// 🎊 SPECIAL EFFECTS ON PAGE VISIBILITY
// ====================================== 

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when tab is hidden
        bgMusic.pause();
    } else {
        // Resume if music was enabled
        if (CONFIG.musicEnabled) {
            bgMusic.play().catch(e => console.log('Autoplay prevented'));
        }
        
        // Welcome back effect
        triggerFireworks();
    }
});


// ====================================== 
// 🎯 KEYBOARD SHORTCUTS (Easter Eggs)
// ====================================== 

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K: Toggle confetti
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        createConfetti();
        playSound('success');
    }
    
    // Ctrl/Cmd + F: Trigger fireworks
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        triggerFireworks();
    }
    
    // Ctrl/Cmd + M: Toggle music
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        toggleMusic();
    }
    
    // Escape: Close modals
    if (e.key === 'Escape') {
        closeAchievement();
    }
});


// ====================================== 
// 🎁 SPECIAL DATE FEATURES
// ====================================== 

function checkSpecialDate() {
    const today = new Date();
    const month = today.getMonth() + 1; // 0-indexed
    const day = today.getDate();
    
    // New Year's Day
    if (month === 1 && day === 1) {
        showNotification('🎊 Happy New Year! 🎊');
        createConfetti();
        triggerFireworks();
        unlockAchievement('Visited on New Year! 🎉');
    }
    
    // New Year's Eve
    if (month === 12 && day === 31) {
        showNotification('🎆 New Year\'s Eve! Get ready for 2026! 🎆');
        // Start continuous fireworks
        setInterval(() => {
            if (Math.random() > 0.5) {
                triggerFireworks();
            }
        }, 3000);
    }
    
    // Christmas
    if (month === 12 && day === 25) {
        showNotification('🎄 Merry Christmas! 🎅');
        unlockAchievement('Christmas Visitor! 🎄');
    }
}

checkSpecialDate();


// ====================================== 
// 🌐 SHARE API (Modern Web Share)
// ====================================== 

async function nativeShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: '🎊 Happy New Year 2026!',
                text: 'Check out this amazing New Year wish I created!',
                url: window.location.href
            });
            
            updateShareCount();
            playSound('success');
            trackEvent('native_share');
        } catch (err) {
            console.log('Share cancelled or failed:', err);
        }
    } else {
        // Fallback to WhatsApp
        shareToWhatsApp();
    }
}


// ====================================== 
// 🎬 SCROLL ANIMATIONS
// ====================================== 

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all cards
    document.querySelectorAll('.glass-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize scroll animations if supported
if ('IntersectionObserver' in window) {
    initScrollAnimations();
}


// ====================================== 
// 💫 PWA SUPPORT (Progressive Web App)
// ====================================== 

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}

// Install prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button if you want
    console.log('App can be installed');
});

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                trackEvent('pwa_installed');
            }
            deferredPrompt = null;
        });
    }
}


// ====================================== 
// 🎯 FINAL INITIALIZATION
// ====================================== 

console.log(`
╔═══════════════════════════════════════╗
║   🎊 HAPPY NEW YEAR 2026 🎊          ║
║   Website Successfully Loaded!        ║
║   ✨ Spread Joy & Love ✨            ║
╚═══════════════════════════════════════╝
`);

// Log performance metrics
window.addEventListener('load', () => {
    if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`⚡ Page loaded in ${loadTime}ms`);
        trackEvent('performance', { loadTime });
    }
});

// Expose some functions globally for inline onclick handlers
window.shareToWhatsApp = shareToWhatsApp;
window.shareToFacebook = shareToFacebook;
window.shareToTwitter = shareToTwitter;
window.shareToInstagram = shareToInstagram;
window.copyLink = copyLink;
window.downloadWish = downloadWish;
window.sendLoveBack = sendLoveBack;
window.triggerEmojiRain = triggerEmojiRain;
window.shareFortune = shareFortune;
window.copyGeneratedLink = copyGeneratedLink;
window.shareGeneratedLink = shareGeneratedLink;
window.downloadQR = downloadQR;
window.closeAchievement = closeAchievement;
window.payWithUPI = payWithUPI;
window.payWithPhonePe = payWithPhonePe;
window.payWithGPay = payWithGPay;
window.payWithPaytm = payWithPaytm;

// Ready state
console.log('🎉 All systems ready! Happy New Year 2026! 🎉');
