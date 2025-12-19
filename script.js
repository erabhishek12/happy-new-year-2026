/* ============================================ */
/* 🚀 NEW YEAR MAGIC 2026 - COMPLETE JAVASCRIPT */
/* Author: Abhishek Kumar */
/* Version: 1.0.0 */
/* ============================================ */

(function() {
    'use strict';

    /* ============================================ */
    /* 📦 CONFIGURATION & CONSTANTS */
    /* ============================================ */
    const CONFIG = {
        siteName: 'New Year Magic 2026',
        siteUrl: window.location.origin + window.location.pathname,
        targetYear: 2026,
        targetDate: new Date('January 1, 2026 00:00:00').getTime(),
        defaultTheme: 'fireworks',
        defaultLanguage: 'en',
        defaultTone: 'fun',
        upiId: '9546983729@fam',
        upiName: 'Abhishek Kumar',
        supportAmounts: [49, 99, 199, 499],
        animationSpeed: 60, // FPS
        maxParticles: 100,
        maxFireworks: 5,
    };

    /* ============================================ */
    /* 🗣️ LANGUAGE STRINGS */
    /* ============================================ */
    const STRINGS = {
        en: {
            happyNewYear: 'Happy New Year',
            wishes: [
                'Happy New Year',
                'Prosperous New Year',
                'Wonderful New Year',
                'Magical New Year',
                'Blessed New Year',
                'Amazing New Year',
                'Fantastic New Year',
                'Incredible New Year'
            ],
            tones: {
                fun: [
                    'May your year be full of fun and laughter! 🎉',
                    'Party hard and achieve harder! 🥳',
                    'Let\'s make 2026 absolutely epic! 🚀',
                    'New year, new memes, new adventures! 😄'
                ],
                emotional: [
                    'You mean the world to me. Happy New Year! 💕',
                    'Grateful for every moment with you. 🥺',
                    'May our bond grow stronger in 2026! ❤️',
                    'You make every year special. 🌟'
                ],
                spiritual: [
                    'May divine blessings shower upon you! 🙏',
                    'Wishing you inner peace and enlightenment. ✨',
                    'May God\'s grace guide your path. 🙏',
                    'Blessed beginnings await you! 🕉️'
                ],
                motivational: [
                    'This is YOUR year to shine! 🔥',
                    'Dream big, work hard, achieve more! 💪',
                    'Success is calling your name! 🏆',
                    'Unleash your true potential in 2026! 🚀'
                ]
            },
            affirmations: [
                '2026 is going to be my year of transformation and success!',
                'I am ready to embrace all the opportunities coming my way!',
                'Every day brings me closer to my dreams and goals!',
                'I am grateful for the blessings in my life!',
                'I attract positivity, love, and abundance!',
                'My potential is limitless and my future is bright!',
                'I choose happiness and success in everything I do!',
                'The best is yet to come for me!'
            ],
            shareText: '✨ Someone special sent you New Year wishes! Open to see your surprise 🎆',
            copySuccess: 'Link copied to clipboard! 📋',
            promiseSaved: 'Your promise has been saved! 💪',
            reflectionsSaved: 'Your reflections have been saved! 🙏',
            linkGenerated: 'Magic link generated successfully! ✨',
            installApp: 'Add to Home Screen for quick access!'
        },
        hi: {
            happyNewYear: 'नव वर्ष की शुभकामनाएं',
            wishes: [
                'नव वर्ष की शुभकामनाएं',
                'समृद्ध नव वर्ष',
                'शानदार नव वर्ष',
                'जादुई नव वर्ष',
                'धन्य नव वर्ष',
                'अद्भुत नव वर्ष',
                'शानदार नव वर्ष',
                'अविश्वसनीय नव वर्ष'
            ],
            tones: {
                fun: [
                    'आपका साल मज़े और हंसी से भरा हो! 🎉',
                    'खूब पार्टी करो और खूब मेहनत करो! 🥳',
                    '2026 को बिल्कुल शानदार बनाते हैं! 🚀',
                    'नया साल, नए मीम्स, नए एडवेंचर! 😄'
                ],
                emotional: [
                    'तुम मेरे लिए दुनिया हो। नव वर्ष की शुभकामनाएं! 💕',
                    'तुम्हारे साथ हर पल के लिए आभारी हूं। 🥺',
                    '2026 में हमारा रिश्ता और मजबूत हो! ❤️',
                    'तुम हर साल को खास बनाते हो। 🌟'
                ],
                spiritual: [
                    'दिव्य आशीर्वाद आप पर बरसें! 🙏',
                    'आंतरिक शांति और ज्ञान की कामना! ✨',
                    'भगवान की कृपा आपका मार्गदर्शन करे। 🙏',
                    'धन्य शुरुआत आपका इंतजार कर रही है! 🕉️'
                ],
                motivational: [
                    'यह आपका चमकने का साल है! 🔥',
                    'बड़े सपने देखो, मेहनत करो, और पाओ! 💪',
                    'सफलता आपका नाम पुकार रही है! 🏆',
                    '2026 में अपनी असली क्षमता दिखाओ! 🚀'
                ]
            },
            affirmations: [
                '2026 मेरे परिवर्तन और सफलता का साल होगा!',
                'मैं आने वाले सभी अवसरों को गले लगाने के लिए तैयार हूं!',
                'हर दिन मुझे मेरे सपनों के करीब लाता है!',
                'मैं अपने जीवन के आशीर्वादों के लिए आभारी हूं!',
                'मैं सकारात्मकता, प्यार और समृद्धि को आकर्षित करता/करती हूं!',
                'मेरी क्षमता असीमित है और मेरा भविष्य उज्ज्वल है!',
                'मैं हर काम में खुशी और सफलता चुनता/चुनती हूं!',
                'मेरे लिए सबसे अच्छा अभी आना बाकी है!'
            ],
            shareText: '✨ किसी खास ने आपको नव वर्ष की शुभकामनाएं भेजी हैं! खोलें और अपना सरप्राइज देखें 🎆',
            copySuccess: 'लिंक कॉपी हो गया! 📋',
            promiseSaved: 'आपका वादा सेव हो गया! 💪',
            reflectionsSaved: 'आपके विचार सेव हो गए! 🙏',
            linkGenerated: 'जादू लिंक बन गया! ✨',
            installApp: 'होम स्क्रीन पर जोड़ें!'
        }
    };

    /* ============================================ */
    /* 🎯 STATE MANAGEMENT */
    /* ============================================ */
    const state = {
        currentPage: 'landing',
        currentLanguage: 'en',
        currentTheme: 'fireworks',
        soundEnabled: false,
        isLoading: true,
        urlParams: {},
        promiseStep: 1,
        selectedFocus: null,
        selectedWord: null,
        selectedTone: 'fun',
        selectedWishLang: 'en',
        generatedLink: '',
        deferredPrompt: null,
        animationFrameIds: {},
        particles: [],
        fireworks: [],
        confetti: []
    };

    /* ============================================ */
    /* 🔧 UTILITY FUNCTIONS */
    /* ============================================ */
    const utils = {
        // Get element by ID
        $(id) {
            return document.getElementById(id);
        },

        // Query selector
        $$(selector) {
            return document.querySelectorAll(selector);
        },

        // Single query selector
        $q(selector) {
            return document.querySelector(selector);
        },

        // Add event listener
        on(element, event, handler) {
            if (element) {
                element.addEventListener(event, handler);
            }
        },

        // Remove event listener
        off(element, event, handler) {
            if (element) {
                element.removeEventListener(event, handler);
            }
        },

        // Delegate event
        delegate(parent, selector, event, handler) {
            if (parent) {
                parent.addEventListener(event, (e) => {
                    if (e.target.matches(selector) || e.target.closest(selector)) {
                        handler(e);
                    }
                });
            }
        },

        // Parse URL parameters
        getUrlParams() {
            const params = new URLSearchParams(window.location.search);
            return {
                name: params.get('name') || params.get('n') || '',
                sender: params.get('sender') || params.get('s') || '',
                theme: params.get('theme') || params.get('t') || CONFIG.defaultTheme,
                tone: params.get('tone') || params.get('o') || CONFIG.defaultTone,
                message: params.get('message') || params.get('m') || '',
                lang: params.get('lang') || params.get('l') || CONFIG.defaultLanguage
            };
        },

        // Generate shareable link
        generateLink(params) {
            const url = new URL(CONFIG.siteUrl);
            Object.keys(params).forEach(key => {
                if (params[key]) {
                    url.searchParams.set(key, params[key]);
                }
            });
            return url.toString();
        },

        // Copy to clipboard
        async copyToClipboard(text) {
            try {
                await navigator.clipboard.writeText(text);
                return true;
            } catch (err) {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                const result = document.execCommand('copy');
                document.body.removeChild(textarea);
                return result;
            }
        },

        // Debounce function
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Throttle function
        throttle(func, limit) {
            let inThrottle;
            return function(...args) {
                if (!inThrottle) {
                    func.apply(this, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        // Random number between min and max
        random(min, max) {
            return Math.random() * (max - min) + min;
        },

        // Random integer between min and max
        randomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },

        // Random item from array
        randomItem(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        },

        // Format date
        formatDate(date) {
            return new Intl.DateTimeFormat(state.currentLanguage === 'hi' ? 'hi-IN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(date);
        },

        // Check if mobile device
        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        // Check reduced motion preference
        prefersReducedMotion() {
            return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        },

        // Encode string for URL
        encodeParam(str) {
            return encodeURIComponent(str).replace(/%20/g, '+');
        },

        // Decode string from URL
        decodeParam(str) {
            return decodeURIComponent(str.replace(/\+/g, '%20'));
        },

        // Local storage helpers
        storage: {
            set(key, value) {
                try {
                    localStorage.setItem(`nym2026_${key}`, JSON.stringify(value));
                } catch (e) {
                    console.warn('LocalStorage not available');
                }
            },
            get(key) {
                try {
                    const item = localStorage.getItem(`nym2026_${key}`);
                    return item ? JSON.parse(item) : null;
                } catch (e) {
                    return null;
                }
            },
            remove(key) {
                try {
                    localStorage.removeItem(`nym2026_${key}`);
                } catch (e) {
                    console.warn('LocalStorage not available');
                }
            }
        }
    };

    /* ============================================ */
    /* 🍞 TOAST NOTIFICATIONS */
    /* ============================================ */
    const toast = {
        container: null,

        init() {
            this.container = utils.$('toastContainer');
        },

        show(message, type = 'info', duration = 3000) {
            if (!this.container) return;

            const icons = {
                success: '✅',
                error: '❌',
                info: 'ℹ️',
                warning: '⚠️'
            };

            const toastEl = document.createElement('div');
            toastEl.className = `toast ${type}`;
            toastEl.innerHTML = `
                <span class="toast-icon">${icons[type]}</span>
                <span class="toast-message">${message}</span>
            `;

            this.container.appendChild(toastEl);

            setTimeout(() => {
                toastEl.remove();
            }, duration);
        },

        success(message) {
            this.show(message, 'success');
        },

        error(message) {
            this.show(message, 'error');
        },

        info(message) {
            this.show(message, 'info');
        }
    };

    /* ============================================ */
    /* 🪟 MODAL MANAGER */
    /* ============================================ */
    const modal = {
        current: null,

        open(modalId) {
            const modalEl = utils.$(modalId);
            if (modalEl) {
                modalEl.classList.add('active');
                document.body.classList.add('no-scroll');
                this.current = modalEl;
            }
        },

        close(modalId) {
            const modalEl = modalId ? utils.$(modalId) : this.current;
            if (modalEl) {
                modalEl.classList.remove('active');
                document.body.classList.remove('no-scroll');
                this.current = null;
            }
        },

        init() {
            // Close on overlay click
            utils.$$('.modal-overlay').forEach(overlay => {
                utils.on(overlay, 'click', () => this.close());
            });

            // Close buttons
            utils.on(utils.$('closeShareModal'), 'click', () => this.close('shareModal'));
            utils.on(utils.$('closeUpiModal'), 'click', () => this.close('upiModal'));
            utils.on(utils.$('closeSuccessModal'), 'click', () => this.close('successModal'));

            // ESC key to close
            utils.on(document, 'keydown', (e) => {
                if (e.key === 'Escape' && this.current) {
                    this.close();
                }
            });
        }
    };

    /* ============================================ */
    /* 🔄 PRELOADER */
    /* ============================================ */
    const preloader = {
        element: null,

        init() {
            this.element = utils.$('preloader');
        },

        hide() {
            if (this.element) {
                setTimeout(() => {
                    this.element.classList.add('hidden');
                    state.isLoading = false;
                    // Start animations after preloader hides
                    animations.init();
                }, 2000);
            }
        }
    };

    /* ============================================ */
    /* 🌐 LANGUAGE MANAGER */
    /* ============================================ */
    const language = {
        current: 'en',

        init() {
            // Check URL param first
            if (state.urlParams.lang) {
                this.current = state.urlParams.lang;
            } else {
                // Check saved preference
                const saved = utils.storage.get('language');
                if (saved) {
                    this.current = saved;
                } else {
                    // Auto-detect from browser
                    const browserLang = navigator.language || navigator.userLanguage;
                    if (browserLang.startsWith('hi')) {
                        this.current = 'hi';
                    }
                }
            }
            state.currentLanguage = this.current;
            this.apply();
            this.updateToggle();
        },

        toggle() {
            this.current = this.current === 'en' ? 'hi' : 'en';
            state.currentLanguage = this.current;
            utils.storage.set('language', this.current);
            this.apply();
            this.updateToggle();
        },

        updateToggle() {
            const btn = utils.$('langToggle');
            if (btn) {
                btn.querySelector('.lang-text').textContent = this.current.toUpperCase();
            }
        },

        apply() {
            // Update all elements with data-lang attributes
            utils.$$('[data-lang-en]').forEach(el => {
                const text = el.getAttribute(`data-lang-${this.current}`);
                if (text) {
                    el.textContent = text;
                }
            });

            // Update placeholders
            utils.$$('[data-placeholder-en]').forEach(el => {
                const placeholder = el.getAttribute(`data-placeholder-${this.current}`);
                if (placeholder) {
                    el.placeholder = placeholder;
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = this.current;
        },

        getString(key) {
            return STRINGS[this.current][key] || STRINGS.en[key];
        },

        getRandomWish() {
            const wishes = STRINGS[this.current].wishes;
            return utils.randomItem(wishes);
        },

        getToneMessage(tone) {
            const messages = STRINGS[this.current].tones[tone];
            return utils.randomItem(messages);
        },

        getAffirmation() {
            const affirmations = STRINGS[this.current].affirmations;
            return utils.randomItem(affirmations);
        }
    };

    /* ============================================ */
    /* 🎨 THEME MANAGER */
    /* ============================================ */
    const theme = {
        current: 'fireworks',
        themes: ['fireworks', 'galaxy', 'golden', 'nature', 'romantic'],

        init() {
            // Check URL param first
            if (state.urlParams.theme && this.themes.includes(state.urlParams.theme)) {
                this.current = state.urlParams.theme;
            } else {
                // Check saved preference
                const saved = utils.storage.get('theme');
                if (saved && this.themes.includes(saved)) {
                    this.current = saved;
                }
            }
            state.currentTheme = this.current;
            this.apply();
        },

        set(themeName) {
            if (this.themes.includes(themeName)) {
                this.current = themeName;
                state.currentTheme = themeName;
                utils.storage.set('theme', themeName);
                this.apply();
            }
        },

        apply() {
            // Remove all theme classes
            this.themes.forEach(t => {
                document.body.classList.remove(`theme-${t}`);
            });
            // Add current theme class
            document.body.classList.add(`theme-${this.current}`);

            // Update theme buttons if on create page
            utils.$$('.theme-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.theme === this.current);
            });
        },

        cycle() {
            const currentIndex = this.themes.indexOf(this.current);
            const nextIndex = (currentIndex + 1) % this.themes.length;
            this.set(this.themes[nextIndex]);
            toast.info(`Theme: ${this.themes[nextIndex].charAt(0).toUpperCase() + this.themes[nextIndex].slice(1)}`);
        }
    };

    /* ============================================ */
    /* 🔊 AUDIO MANAGER */
    /* ============================================ */
    const audio = {
        bgMusic: null,
        fireworkSound: null,
        revealSound: null,
        successSound: null,
        enabled: false,

        init() {
            this.bgMusic = utils.$('bgMusic');
            this.fireworkSound = utils.$('fireworkSound');
            this.revealSound = utils.$('revealSound');
            this.successSound = utils.$('successSound');

            // Set volumes
            if (this.bgMusic) this.bgMusic.volume = 0.3;
            if (this.fireworkSound) this.fireworkSound.volume = 0.5;
            if (this.revealSound) this.revealSound.volume = 0.6;
            if (this.successSound) this.successSound.volume = 0.5;
        },

        toggle() {
            this.enabled = !this.enabled;
            state.soundEnabled = this.enabled;
            this.updateIcon();

            if (this.enabled) {
                this.playBackground();
            } else {
                this.stopBackground();
            }
        },

        updateIcon() {
            const btn = utils.$('soundToggle');
            if (btn) {
                btn.querySelector('.sound-icon').textContent = this.enabled ? '🔊' : '🔇';
            }
        },

        playBackground() {
            if (this.bgMusic && this.enabled) {
                this.bgMusic.play().catch(() => {});
            }
        },

        stopBackground() {
            if (this.bgMusic) {
                this.bgMusic.pause();
                this.bgMusic.currentTime = 0;
            }
        },

        playFirework() {
            if (this.fireworkSound && this.enabled) {
                this.fireworkSound.currentTime = 0;
                this.fireworkSound.play().catch(() => {});
            }
        },

        playReveal() {
            if (this.revealSound && this.enabled) {
                this.revealSound.currentTime = 0;
                this.revealSound.play().catch(() => {});
            }
        },

        playSuccess() {
            if (this.successSound && this.enabled) {
                this.successSound.currentTime = 0;
                this.successSound.play().catch(() => {});
            }
        }
    };

    /* ============================================ */
    /* ⏱️ COUNTDOWN TIMER */
    /* ============================================ */
    const countdown = {
        elements: {},
        interval: null,

        init() {
            this.elements = {
                days: utils.$('days'),
                hours: utils.$('hours'),
                minutes: utils.$('minutes'),
                seconds: utils.$('seconds'),
                container: utils.$('countdownContainer')
            };

            this.update();
            this.interval = setInterval(() => this.update(), 1000);
        },

        update() {
            const now = new Date().getTime();
            const distance = CONFIG.targetDate - now;

            if (distance < 0) {
                // New Year has arrived!
                this.showCelebration();
                clearInterval(this.interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (this.elements.days) this.elements.days.textContent = String(days).padStart(2, '0');
            if (this.elements.hours) this.elements.hours.textContent = String(hours).padStart(2, '0');
            if (this.elements.minutes) this.elements.minutes.textContent = String(minutes).padStart(2, '0');
            if (this.elements.seconds) this.elements.seconds.textContent = String(seconds).padStart(2, '0');
        },

        showCelebration() {
            if (this.elements.container) {
                this.elements.container.innerHTML = `
                    <h2 class="celebration-text" style="font-size: 2rem; color: var(--gold);">
                        🎆 Happy New Year 2026! 🎆
                    </h2>
                `;
            }
            animations.triggerCelebration();
        }
    };

    /* ============================================ */
    /* 🧭 NAVIGATION */
    /* ============================================ */
    const navigation = {
        currentPage: 'landing',

        init() {
            // Page navigation links
            utils.$$('.nav-link').forEach(link => {
                utils.on(link, 'click', (e) => {
                    e.preventDefault();
                    const page = link.dataset.page;
                    this.goTo(page);
                    this.closeMobileMenu();
                });
            });

            // Buttons with page targets
            utils.$$('[data-page-target]').forEach(btn => {
                utils.on(btn, 'click', () => {
                    const page = btn.dataset.pageTarget;
                    this.goTo(page);
                });
            });

            // Mobile menu toggle
            const menuBtn = utils.$('navMenuBtn');
            const navLinks = utils.$('navLinks');
            utils.on(menuBtn, 'click', () => {
                menuBtn.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Check URL hash on load
            const hash = window.location.hash.replace('#', '');
            if (hash && utils.$(hash)) {
                this.goTo(hash);
            }

            // Check if coming from shared link
            if (state.urlParams.name) {
                this.goTo('wishes');
            }
        },

        goTo(pageId) {
            if (!utils.$(pageId)) return;

            // Hide all pages
            utils.$$('.page').forEach(page => {
                page.classList.remove('active');
            });

            // Show target page
            const targetPage = utils.$(pageId);
            targetPage.classList.add('active');

            // Update nav links
            utils.$$('.nav-link').forEach(link => {
                link.classList.toggle('active', link.dataset.page === pageId);
            });

            // Update state
            this.currentPage = pageId;
            state.currentPage = pageId;

            // Update URL hash
            history.pushState(null, '', `#${pageId}`);

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Page-specific actions
            this.onPageEnter(pageId);
        },

        onPageEnter(pageId) {
            switch (pageId) {
                case 'wishes':
                    wishPage.init();
                    break;
                case 'promise':
                    promisePage.init();
                    break;
                case 'gratitude':
                    gratitudePage.init();
                    break;
                case 'create':
                    createPage.init();
                    break;
            }
        },

        closeMobileMenu() {
            const menuBtn = utils.$('navMenuBtn');
            const navLinks = utils.$('navLinks');
            if (menuBtn) menuBtn.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        }
    };

    /* ============================================ */
    /* 💌 WISH PAGE */
    /* ============================================ */
    const wishPage = {
        initialized: false,

        init() {
            if (this.initialized) return;

            const params = state.urlParams;

            // Set recipient name
            const displayName = utils.$('displayName');
            if (displayName) {
                displayName.textContent = params.name || 'Friend';
            }

            // Set sender info
            if (params.sender) {
                const senderInfo = utils.$('senderInfo');
                const senderName = utils.$('senderName');
                if (senderInfo && senderName) {
                    senderInfo.style.display = 'inline-flex';
                    senderName.textContent = params.sender;
                }
            }

            // Set custom message
            if (params.message) {
                const customContainer = utils.$('customMessageContainer');
                const customMessage = utils.$('customMessage');
                if (customContainer && customMessage) {
                    customContainer.style.display = 'block';
                    customMessage.textContent = utils.decodeParam(params.message);
                }
            }

            // Apply theme from params
            if (params.theme) {
                theme.set(params.theme);
            }

            // Start typing animation
            this.startTypingAnimation();

            // Trigger animations
            setTimeout(() => {
                animations.triggerConfetti();
                audio.playReveal();
                this.createBalloons();
            }, 500);

            this.initialized = true;
        },

        startTypingAnimation() {
            const typingText = utils.$('typingText');
            if (!typingText) return;

            const wishText = language.getRandomWish();
            const toneMessage = language.getToneMessage(state.urlParams.tone || 'fun');
            
            let i = 0;
            const typeWriter = () => {
                if (i < wishText.length) {
                    typingText.textContent += wishText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    // Update tagline with tone message
                    const tagline = utils.$q('.wish-tagline');
                    if (tagline) {
                        tagline.textContent = toneMessage;
                    }
                }
            };
            
            setTimeout(typeWriter, 1000);
        },

        createBalloons() {
            const container = utils.$('balloonsContainer');
            if (!container) return;

            const balloonEmojis = ['🎈', '🎊', '🎉', '🎀', '⭐', '💫'];
            
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.className = 'balloon';
                    balloon.textContent = utils.randomItem(balloonEmojis);
                    balloon.style.left = utils.random(5, 95) + '%';
                    balloon.style.animationDuration = utils.random(4, 8) + 's';
                    container.appendChild(balloon);

                    // Remove after animation
                    setTimeout(() => balloon.remove(), 8000);
                }, i * 500);
            }
        }
    };

    /* ============================================ */
    /* 📝 PROMISE PAGE */
    /* ============================================ */
    const promisePage = {
        currentStep: 1,
        totalSteps: 3,
        data: {
            name: '',
            focus: '',
            promise: ''
        },

        init() {
            this.bindEvents();
            this.loadSaved();
        },

        bindEvents() {
            // Focus buttons
            utils.$$('.focus-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    utils.$$('.focus-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.data.focus = btn.dataset.focus;
                    state.selectedFocus = btn.dataset.focus;
                });
            });

            // Character count
            const promiseText = utils.$('promiseText');
            const charCount = utils.$('promiseCharCount');
            if (promiseText && charCount) {
                utils.on(promiseText, 'input', () => {
                    charCount.textContent = promiseText.value.length;
                    this.data.promise = promiseText.value;
                });
            }

            // Name input
            const nameInput = utils.$('promiseName');
            if (nameInput) {
                utils.on(nameInput, 'input', () => {
                    this.data.name = nameInput.value;
                });
            }

            // Navigation buttons
            utils.on(utils.$('promiseNextBtn'), 'click', () => this.nextStep());
            utils.on(utils.$('promisePrevBtn'), 'click', () => this.prevStep());
            utils.on(utils.$('generatePromiseBtn'), 'click', () => this.generate());
            utils.on(utils.$('downloadPromiseBtn'), 'click', () => this.download());
            utils.on(utils.$('sharePromiseBtn'), 'click', () => this.share());
            utils.on(utils.$('newPromiseBtn'), 'click', () => this.reset());
        },

        nextStep() {
            if (this.validateStep()) {
                this.currentStep++;
                this.updateSteps();
            }
        },

        prevStep() {
            this.currentStep--;
            this.updateSteps();
        },

        validateStep() {
            switch (this.currentStep) {
                case 1:
                    if (!this.data.name.trim()) {
                        toast.error('Please enter your name');
                        return false;
                    }
                    break;
                case 2:
                    if (!this.data.focus) {
                        toast.error('Please select a focus area');
                        return false;
                    }
                    break;
            }
            return true;
        },

        updateSteps() {
            // Update step visibility
            utils.$$('.form-step').forEach((step, index) => {
                step.classList.toggle('active', index + 1 === this.currentStep);
            });

            // Update buttons
            const prevBtn = utils.$('promisePrevBtn');
            const nextBtn = utils.$('promiseNextBtn');
            const generateBtn = utils.$('generatePromiseBtn');

            if (prevBtn) prevBtn.style.display = this.currentStep > 1 ? 'inline-flex' : 'none';
            if (nextBtn) nextBtn.style.display = this.currentStep < this.totalSteps ? 'inline-flex' : 'none';
            if (generateBtn) generateBtn.style.display = this.currentStep === this.totalSteps ? 'inline-flex' : 'none';
        },

        generate() {
            if (!this.data.promise.trim()) {
                toast.error('Please write your promise');
                return;
            }

            // Save data
            utils.storage.set('promise', this.data);

            // Update result card
            const focusIcons = {
                health: '💪',
                wealth: '💰',
                study: '📚',
                career: '💼',
                family: '👨‍👩‍👧‍👦',
                spiritual: '🧘'
            };

            const focusBadge = utils.$('promiseFocusBadge');
            if (focusBadge) {
                focusBadge.innerHTML = `
                    <span class="focus-icon">${focusIcons[this.data.focus]}</span>
                    <span class="focus-name">${this.data.focus.charAt(0).toUpperCase() + this.data.focus.slice(1)}</span>
                `;
            }

            const userName = utils.$('promiseUserName');
            if (userName) userName.textContent = this.data.name;

            const content = utils.$('promiseContent');
            if (content) content.textContent = `"${this.data.promise}"`;

            const date = utils.$('promiseDate');
            if (date) date.textContent = utils.formatDate(new Date());

            // Show result, hide form
            const form = utils.$('promiseForm');
            const result = utils.$('promiseResult');
            if (form) form.style.display = 'none';
            if (result) result.style.display = 'block';

            // Trigger celebration
            animations.triggerConfetti();
            audio.playSuccess();
            toast.success(language.getString('promiseSaved'));
        },

        async download() {
            const card = utils.$('promiseCard');
            if (!card) return;

            try {
                // Using html2canvas library would be ideal here
                // For now, we'll create a simple text-based download
                toast.info('Promise card saved! Take a screenshot to share.');
                
                // Alternative: Copy promise text
                const text = `🎯 My New Year Promise 2026\n\nFocus: ${this.data.focus}\n\n"${this.data.promise}"\n\n- ${this.data.name}\n\n✨ New Year Magic 2026`;
                await utils.copyToClipboard(text);
                toast.success('Promise text copied!');
            } catch (err) {
                toast.error('Could not download. Please screenshot.');
            }
        },

        share() {
            const text = `🎯 I made my New Year Promise 2026!\n\nFocus: ${this.data.focus}\n"${this.data.promise}"\n\nCreate yours: ${CONFIG.siteUrl}#promise`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'My New Year Promise 2026',
                    text: text,
                    url: `${CONFIG.siteUrl}#promise`
                }).catch(() => {});
            } else {
                this.shareWhatsApp(text);
            }
        },

        shareWhatsApp(text) {
            const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        },

        reset() {
            this.currentStep = 1;
            this.data = { name: '', focus: '', promise: '' };
            
            // Reset form
            const nameInput = utils.$('promiseName');
            const promiseText = utils.$('promiseText');
            if (nameInput) nameInput.value = '';
            if (promiseText) promiseText.value = '';
            
            utils.$$('.focus-btn').forEach(b => b.classList.remove('active'));
            
            // Show form, hide result
            const form = utils.$('promiseForm');
            const result = utils.$('promiseResult');
            if (form) form.style.display = 'block';
            if (result) result.style.display = 'none';
            
            this.updateSteps();
        },

        loadSaved() {
            const saved = utils.storage.get('promise');
            if (saved) {
                this.data = saved;
                const nameInput = utils.$('promiseName');
                if (nameInput && saved.name) nameInput.value = saved.name;
            }
        }
    };

    /* ============================================ */
    /* 🙏 GRATITUDE PAGE */
    /* ============================================ */
    const gratitudePage = {
        data: {
            bestMemory: '',
            gratefulFor: '',
            toImprove: '',
            word: ''
        },

        init() {
            this.bindEvents();
            this.loadSaved();
            this.updateAffirmation();
        },

        bindEvents() {
            // Word buttons
            utils.$$('.word-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    utils.$$('.word-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.data.word = btn.dataset.word;
                    state.selectedWord = btn.dataset.word;
                });
            });

            // Custom word input
            const customWord = utils.$('customWord');
            if (customWord) {
                utils.on(customWord, 'input', () => {
                    if (customWord.value.trim()) {
                        utils.$$('.word-btn').forEach(b => b.classList.remove('active'));
                        this.data.word = customWord.value;
                    }
                });
            }

            // Textarea inputs
            const inputs = ['bestMemory', 'gratefulFor', 'toImprove'];
            inputs.forEach(id => {
                const el = utils.$(id);
                if (el) {
                    utils.on(el, 'input', () => {
                        this.data[id] = el.value;
                    });
                }
            });

            // Save button
            utils.on(utils.$('saveReflectionsBtn'), 'click', () => this.save());
            
            // Share button
            utils.on(utils.$('shareReflectionsBtn'), 'click', () => this.share());
            
            // New affirmation button
            utils.on(utils.$('newAffirmationBtn'), 'click', () => this.updateAffirmation());
        },

        save() {
            utils.storage.set('gratitude', this.data);
            animations.triggerConfetti();
            audio.playSuccess();
            toast.success(language.getString('reflectionsSaved'));
        },

        share() {
            const word = this.data.word || 'Success';
            const text = `🌟 My word for 2026: ${word}\n\nWhat's yours? Create at: ${CONFIG.siteUrl}#gratitude`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'My 2026 Word',
                    text: text,
                    url: `${CONFIG.siteUrl}#gratitude`
                }).catch(() => {});
            } else {
                const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
                window.open(url, '_blank');
            }
        },

        updateAffirmation() {
            const textEl = utils.$('affirmationText');
            if (textEl) {
                textEl.textContent = `"${language.getAffirmation()}"`;
            }
        },

        loadSaved() {
            const saved = utils.storage.get('gratitude');
            if (saved) {
                this.data = saved;
                Object.keys(saved).forEach(key => {
                    const el = utils.$(key);
                    if (el && saved[key]) {
                        el.value = saved[key];
                    }
                });
            }
        }
    };

    /* ============================================ */
    /* ✨ CREATE PAGE */
    /* ============================================ */
    const createPage = {
        data: {
            sender: '',
            recipient: '',
            theme: 'fireworks',
            tone: 'fun',
            message: '',
            lang: 'en'
        },

        init() {
            this.bindEvents();
            this.loadSaved();
        },

        bindEvents() {
            // Sender name
            const senderInput = utils.$('senderNameInput');
            if (senderInput) {
                utils.on(senderInput, 'input', () => {
                    this.data.sender = senderInput.value;
                    this.updatePreview();
                });
            }

            // Recipient name
            const recipientInput = utils.$('recipientNameInput');
            if (recipientInput) {
                utils.on(recipientInput, 'input', () => {
                    this.data.recipient = recipientInput.value;
                    this.updatePreview();
                });
            }

            // Theme buttons
            utils.$$('.theme-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    utils.$$('.theme-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.data.theme = btn.dataset.theme;
                    theme.set(btn.dataset.theme);
                    this.updatePreview();
                });
            });

            // Tone buttons
            utils.$$('.tone-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    utils.$$('.tone-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.data.tone = btn.dataset.tone;
                    state.selectedTone = btn.dataset.tone;
                    this.updatePreview();
                });
            });

            // Language buttons
            utils.$$('.lang-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    utils.$$('.lang-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    this.data.lang = btn.dataset.lang;
                    state.selectedWishLang = btn.dataset.lang;
                });
            });

            // Custom message
            const customMsg = utils.$('customMessageInput');
            const charCount = utils.$('customMsgCharCount');
            if (customMsg) {
                utils.on(customMsg, 'input', () => {
                    this.data.message = customMsg.value;
                    if (charCount) charCount.textContent = customMsg.value.length;
                    this.updatePreview();
                });
            }

            // Generate button
            utils.on(utils.$('generateMagicBtn'), 'click', () => this.generate());

            // Copy link button
            utils.on(utils.$('copyLinkBtn'), 'click', () => this.copyLink());

            // Share buttons
            utils.on(utils.$('shareWhatsappLink'), 'click', () => this.shareWhatsApp());
            utils.on(utils.$('shareTelegramLink'), 'click', () => this.shareTelegram());
            utils.on(utils.$('shareTwitterLink'), 'click', () => this.shareTwitter());
            utils.on(utils.$('shareFacebookLink'), 'click', () => this.shareFacebook());
        },

        updatePreview() {
            const previewSender = utils.$('previewSender');
            const previewRecipient = utils.$('previewRecipient');
            const previewMessage = utils.$('previewMessage');
            const previewCustom = utils.$('previewCustom');
            const previewTheme = utils.$('previewThemeIndicator');

            const themeEmojis = {
                fireworks: '🎆',
                galaxy: '🌌',
                golden: '🏆',
                nature: '🌿',
                romantic: '💕'
            };

            if (previewSender) previewSender.textContent = `From: ${this.data.sender || 'You'}`;
            if (previewRecipient) previewRecipient.textContent = `Dear ${this.data.recipient || 'Friend'}`;
            if (previewMessage) previewMessage.textContent = 'Happy New Year 2026!';
            if (previewCustom) previewCustom.textContent = this.data.message || '';
            if (previewTheme) {
                previewTheme.textContent = `${themeEmojis[this.data.theme]} ${this.data.theme.charAt(0).toUpperCase() + this.data.theme.slice(1)}`;
            }
        },

        generate() {
            if (!this.data.recipient.trim()) {
                toast.error('Please enter recipient\'s name');
                return;
            }

            // Save data
            utils.storage.set('createData', this.data);

            // Generate link
            const params = {
                name: this.data.recipient,
                sender: this.data.sender,
                theme: this.data.theme,
                tone: this.data.tone,
                lang: this.data.lang
            };

            if (this.data.message) {
                params.message = utils.encodeParam(this.data.message);
            }

            state.generatedLink = utils.generateLink(params);

            // Show link section
            const linkInput = utils.$('generatedLink');
            const linkSection = utils.$('generatedLinkSection');
            const sponsoredCreate = utils.$('sponsoredCreate');

            if (linkInput) linkInput.value = state.generatedLink;
            if (linkSection) linkSection.style.display = 'block';
            if (sponsoredCreate) sponsoredCreate.style.display = 'block';

            // Celebration
            animations.triggerConfetti();
            audio.playSuccess();
            toast.success(language.getString('linkGenerated'));

            // Scroll to link section
            if (linkSection) {
                linkSection.scrollIntoView({ behavior: 'smooth' });
            }
        },

        async copyLink() {
            if (state.generatedLink) {
                const success = await utils.copyToClipboard(state.generatedLink);
                const copyIcon = utils.$('copyIcon');
                
                if (success) {
                    if (copyIcon) copyIcon.textContent = '✅';
                    toast.success(language.getString('copySuccess'));
                    
                    setTimeout(() => {
                        if (copyIcon) copyIcon.textContent = '📋';
                    }, 2000);
                } else {
                    toast.error('Failed to copy');
                }
            }
        },

        getShareText() {
            const lang = state.currentLanguage;
            const recipientName = this.data.recipient || 'you';
            return lang === 'hi' 
                ? `✨ ${this.data.sender || 'किसी खास'} ने ${recipientName} के लिए नव वर्ष की शुभकामनाएं भेजी हैं! 🎆\n\nखोलें और अपना सरप्राइज देखें:`
                : `✨ ${this.data.sender || 'Someone special'} sent New Year wishes for ${recipientName}! 🎆\n\nOpen to see your surprise:`;
        },

        shareWhatsApp() {
            const text = `${this.getShareText()}\n${state.generatedLink}`;
            const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        },

        shareTelegram() {
            const text = this.getShareText();
            const url = `https://t.me/share/url?url=${encodeURIComponent(state.generatedLink)}&text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        },

        shareTwitter() {
            const text = `${this.getShareText()} ${state.generatedLink}`;
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(url, '_blank');
        },

        shareFacebook() {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(state.generatedLink)}`;
            window.open(url, '_blank');
        },

        loadSaved() {
            const saved = utils.storage.get('createData');
            if (saved) {
                this.data = { ...this.data, ...saved };
                
                const senderInput = utils.$('senderNameInput');
                if (senderInput && saved.sender) senderInput.value = saved.sender;
            }
        }
    };

    /* ============================================ */
    /* 🎆 ANIMATIONS */
    /* ============================================ */
    const animations = {
        fireworksCanvas: null,
        particlesCanvas: null,
        confettiCanvas: null,
        fireworksCtx: null,
        particlesCtx: null,
        confettiCtx: null,

        init() {
            if (utils.prefersReducedMotion()) return;

            this.fireworksCanvas = utils.$('fireworksCanvas');
            this.particlesCanvas = utils.$('particlesCanvas');
            this.confettiCanvas = utils.$('confettiCanvas');

            if (this.fireworksCanvas) {
                this.fireworksCtx = this.fireworksCanvas.getContext('2d');
                this.resizeCanvas(this.fireworksCanvas);
            }

            if (this.particlesCanvas) {
                this.particlesCtx = this.particlesCanvas.getContext('2d');
                this.resizeCanvas(this.particlesCanvas);
            }

            if (this.confettiCanvas) {
                this.confettiCtx = this.confettiCanvas.getContext('2d');
                this.resizeCanvas(this.confettiCanvas);
            }

            // Handle resize
            window.addEventListener('resize', utils.debounce(() => {
                this.resizeCanvas(this.fireworksCanvas);
                this.resizeCanvas(this.particlesCanvas);
                this.resizeCanvas(this.confettiCanvas);
            }, 250));

            // Start background particles
            this.initParticles();
            this.animateParticles();

            // Start periodic fireworks
            this.startFireworks();
        },

        resizeCanvas(canvas) {
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        },

        // Particle System
        initParticles() {
            state.particles = [];
            const count = utils.isMobile() ? 30 : 50;

            for (let i = 0; i < count; i++) {
                state.particles.push({
                    x: utils.random(0, window.innerWidth),
                    y: utils.random(0, window.innerHeight),
                    size: utils.random(1, 3),
                    speedX: utils.random(-0.5, 0.5),
                    speedY: utils.random(-0.5, 0.5),
                    opacity: utils.random(0.3, 0.8),
                    color: utils.randomItem(['#ffd700', '#ffffff', '#ffa500', '#ff6b6b', '#4ecdc4'])
                });
            }
        },

        animateParticles() {
            if (!this.particlesCtx || utils.prefersReducedMotion()) return;

            const ctx = this.particlesCtx;
            const canvas = this.particlesCanvas;

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                state.particles.forEach(p => {
                    // Update position
                    p.x += p.speedX;
                    p.y += p.speedY;

                    // Wrap around edges
                    if (p.x < 0) p.x = canvas.width;
                    if (p.x > canvas.width) p.x = 0;
                    if (p.y < 0) p.y = canvas.height;
                    if (p.y > canvas.height) p.y = 0;

                    // Draw particle
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = p.opacity;
                    ctx.fill();
                });

                ctx.globalAlpha = 1;
                state.animationFrameIds.particles = requestAnimationFrame(animate);
            };

            animate();
        },

        // Fireworks System
        startFireworks() {
            if (utils.prefersReducedMotion()) return;

            const launchFirework = () => {
                if (state.currentPage === 'landing' || state.currentPage === 'wishes') {
                    this.createFirework();
                }
                
                // Random interval for next firework
                setTimeout(launchFirework, utils.random(2000, 5000));
            };

            setTimeout(launchFirework, 1000);
        },

        createFirework() {
            if (!this.fireworksCtx) return;

            const canvas = this.fireworksCanvas;
            const ctx = this.fireworksCtx;

            const x = utils.random(100, canvas.width - 100);
            const targetY = utils.random(100, canvas.height / 2);
            const startY = canvas.height;

            // Rocket
            const rocket = {
                x: x,
                y: startY,
                targetY: targetY,
                speed: 8,
                exploded: false
            };

            // Particles after explosion
            const particles = [];
            const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#ff9ff3', '#54a0ff', '#5f27cd'];
            const color = utils.randomItem(colors);

            const animate = () => {
                ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                if (!rocket.exploded) {
                    // Draw rocket trail
                    ctx.beginPath();
                    ctx.arc(rocket.x, rocket.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = '#ffd700';
                    ctx.fill();

                    // Move rocket up
                    rocket.y -= rocket.speed;

                    // Check if reached target
                    if (rocket.y <= rocket.targetY) {
                        rocket.exploded = true;
                        audio.playFirework();

                        // Create explosion particles
                        for (let i = 0; i < 50; i++) {
                            const angle = (Math.PI * 2 / 50) * i;
                            const speed = utils.random(2, 6);
                            particles.push({
                                x: rocket.x,
                                y: rocket.y,
                                vx: Math.cos(angle) * speed,
                                vy: Math.sin(angle) * speed,
                                alpha: 1,
                                color: color,
                                size: utils.random(2, 4)
                            });
                        }
                    }
                } else {
                    // Animate explosion particles
                    let alive = false;
                    particles.forEach(p => {
                        if (p.alpha > 0) {
                            alive = true;
                            p.x += p.vx;
                            p.y += p.vy;
                            p.vy += 0.1; // Gravity
                            p.alpha -= 0.02;

                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                            ctx.fillStyle = p.color;
                            ctx.globalAlpha = p.alpha;
                            ctx.fill();
                        }
                    });
                    ctx.globalAlpha = 1;

                    if (!alive) {
                        return; // End animation
                    }
                }

                requestAnimationFrame(animate);
            };

            animate();
        },

        // Confetti System
        triggerConfetti() {
            if (!this.confettiCtx || utils.prefersReducedMotion()) return;

            const canvas = this.confettiCanvas;
            const ctx = this.confettiCtx;
            const confetti = [];
            const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'];

            // Create confetti pieces
            for (let i = 0; i < 150; i++) {
                confetti.push({
                    x: utils.random(0, canvas.width),
                    y: utils.random(-canvas.height, 0),
                    size: utils.random(5, 15),
                    color: utils.randomItem(colors),
                    speed: utils.random(3, 8),
                    angle: utils.random(0, Math.PI * 2),
                    spin: utils.random(-0.2, 0.2),
                    opacity: 1
                });
            }

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                let active = false;
                confetti.forEach(c => {
                    if (c.y < canvas.height + 50 && c.opacity > 0) {
                        active = true;
                        c.y += c.speed;
                        c.x += Math.sin(c.angle) * 2;
                        c.angle += c.spin;

                        if (c.y > canvas.height * 0.8) {
                            c.opacity -= 0.02;
                        }

                        ctx.save();
                        ctx.translate(c.x, c.y);
                        ctx.rotate(c.angle);
                        ctx.fillStyle = c.color;
                        ctx.globalAlpha = c.opacity;
                        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size / 2);
                        ctx.restore();
                    }
                });

                ctx.globalAlpha = 1;

                if (active) {
                    requestAnimationFrame(animate);
                }
            };

            animate();
        },

        triggerCelebration() {
            this.triggerConfetti();
            
            // Multiple fireworks
            for (let i = 0; i < 5; i++) {
                setTimeout(() => this.createFirework(), i * 500);
            }
        }
    };

    /* ============================================ */
    /* 💰 UPI PAYMENT */
    /* ============================================ */
    const upiPayment = {
        init() {
            // Support buttons
            utils.$$('.support-btn').forEach(btn => {
                utils.on(btn, 'click', () => {
                    const amount = btn.dataset.amount;
                    this.openPayment(amount);
                });
            });

            // Copy UPI ID
            utils.on(utils.$('copyUpiBtn'), 'click', () => this.copyUpiId());
        },

        openPayment(amount) {
            const upiAmount = utils.$('upiAmount');
            const upiDeepLink = utils.$('upiDeepLink');

            if (upiAmount) upiAmount.textContent = `₹${amount}`;
            
            // Generate UPI deep link
            const upiUrl = `upi://pay?pa=${CONFIG.upiId}&pn=${encodeURIComponent(CONFIG.upiName)}&am=${amount}&cu=INR&tn=${encodeURIComponent('Support New Year Magic 2026')}`;
            
            if (upiDeepLink) upiDeepLink.href = upiUrl;

            modal.open('upiModal');
        },

        async copyUpiId() {
            const success = await utils.copyToClipboard(CONFIG.upiId);
            if (success) {
                toast.success('UPI ID copied!');
            }
        }
    };

    /* ============================================ */
    /* 📱 PWA HANDLER */
    /* ============================================ */
    const pwa = {
        deferredPrompt: null,

        init() {
            // Listen for beforeinstallprompt
            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                this.deferredPrompt = e;
                state.deferredPrompt = e;
                this.showInstallPrompt();
            });

            // Install button
            utils.on(utils.$('pwaInstall'), 'click', () => this.install());
            utils.on(utils.$('pwaLater'), 'click', () => this.hidePrompt());

            // Register service worker
            this.registerSW();
        },

        async registerSW() {
            if ('serviceWorker' in navigator) {
                try {
                    await navigator.serviceWorker.register('/sw.js');
                } catch (err) {
                    console.log('SW registration failed');
                }
            }
        },

        showInstallPrompt() {
            const prompt = utils.$('pwaPrompt');
            if (prompt && !utils.storage.get('pwaPromptDismissed')) {
                setTimeout(() => {
                    prompt.style.display = 'block';
                }, 5000);
            }
        },

        hidePrompt() {
            const prompt = utils.$('pwaPrompt');
            if (prompt) {
                prompt.style.display = 'none';
                utils.storage.set('pwaPromptDismissed', true);
            }
        },

        async install() {
            if (this.deferredPrompt) {
                this.deferredPrompt.prompt();
                const { outcome } = await this.deferredPrompt.userChoice;
                
                if (outcome === 'accepted') {
                    toast.success('App installed!');
                }
                
                this.deferredPrompt = null;
                this.hidePrompt();
            }
        }
    };

    /* ============================================ */
    /* 🔝 SCROLL HANDLER */
    /* ============================================ */
    const scrollHandler = {
        scrollTopBtn: null,
        nav: null,

        init() {
            this.scrollTopBtn = utils.$('scrollTopBtn');
            this.nav = utils.$('mainNav');

            window.addEventListener('scroll', utils.throttle(() => {
                this.handleScroll();
            }, 100));

            // Scroll to top button click
            utils.on(this.scrollTopBtn, 'click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        },

        handleScroll() {
            const scrollY = window.scrollY;

            // Show/hide scroll to top button
            if (this.scrollTopBtn) {
                this.scrollTopBtn.classList.toggle('visible', scrollY > 300);
            }

            // Nav background on scroll
            if (this.nav) {
                this.nav.classList.toggle('scrolled', scrollY > 50);
            }
        }
    };

    /* ============================================ */
    /* 🎫 SHARE MODAL */
    /* ============================================ */
    const shareModal = {
        init() {
            // Share buttons in wish page
            utils.on(utils.$('shareWhatsappBtn'), 'click', () => this.shareWish('whatsapp'));
            utils.on(utils.$('sendLoveBackBtn'), 'click', () => navigation.goTo('create'));

            // Share options in modal
            utils.$$('.share-option').forEach(btn => {
                utils.on(btn, 'click', () => {
                    const platform = btn.dataset.share;
                    this.share(platform);
                });
            });
        },

        shareWish(platform) {
            const name = state.urlParams.name || 'Friend';
            const lang = state.currentLanguage;
            const text = lang === 'hi'
                ? `✨ ${name} के लिए नव वर्ष 2026 की शुभकामनाएं! 🎆\n\nअपनी भी बनाएं:`
                : `✨ New Year 2026 wishes for ${name}! 🎆\n\nCreate your own:`;
            
            const url = CONFIG.siteUrl;

            switch (platform) {
                case 'whatsapp':
                    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
                    break;
            }
        },

        share(platform) {
            const url = state.generatedLink || CONFIG.siteUrl;
            const text = language.getString('shareText');

            switch (platform) {
                case 'whatsapp':
                    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
                    break;
                case 'telegram':
                    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                    break;
                case 'twitter':
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + url)}`, '_blank');
                    break;
                case 'facebook':
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
                    break;
                case 'copy':
                    utils.copyToClipboard(url).then(() => {
                        toast.success(language.getString('copySuccess'));
                    });
                    break;
            }

            modal.close('shareModal');
        }
    };

    /* ============================================ */
    /* 🚀 INITIALIZATION */
    /* ============================================ */
    const app = {
        init() {
            // Parse URL parameters first
            state.urlParams = utils.getUrlParams();

            // Initialize all modules
            preloader.init();
            toast.init();
            modal.init();
            language.init();
            theme.init();
            audio.init();
            countdown.init();
            navigation.init();
            upiPayment.init();
            pwa.init();
            scrollHandler.init();
            shareModal.init();

            // Bind global events
            this.bindEvents();

            // Hide preloader
            preloader.hide();

            // Log welcome message
            console.log('%c✨ New Year Magic 2026 ✨', 'color: #ffd700; font-size: 24px; font-weight: bold;');
            console.log('%cMade with ❤️ by Abhishek Kumar', 'color: #fff; font-size: 14px;');
            console.log('%chttps://i-m-er-abhi.vercel.app', 'color: #4ecdc4; font-size: 12px;');
        },

        bindEvents() {
            // Language toggle
            utils.on(utils.$('langToggle'), 'click', () => language.toggle());

            // Sound toggle
            utils.on(utils.$('soundToggle'), 'click', () => audio.toggle());

            // Theme quick toggle
            utils.on(utils.$('themeQuickToggle'), 'click', () => theme.cycle());

            // Reveal button - special animation
            utils.on(utils.$('revealBtn'), 'click', () => {
                audio.playReveal();
                animations.triggerConfetti();
            });

            // Keyboard navigation
            utils.on(document, 'keydown', (e) => {
                // Prevent default for space on buttons
                if (e.key === ' ' && e.target.tagName === 'BUTTON') {
                    e.preventDefault();
                    e.target.click();
                }
            });

            // Handle visibility change (pause animations when tab is hidden)
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    // Pause animations
                    Object.values(state.animationFrameIds).forEach(id => {
                        cancelAnimationFrame(id);
                    });
                } else {
                    // Resume animations
                    animations.animateParticles();
                }
            });
        }
    };

    /* ============================================ */
    /* 🎬 START APPLICATION */
    /* ============================================ */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => app.init());
    } else {
        app.init();
    }

    // Expose to global scope for debugging (optional)
    window.NYM2026 = {
        state,
        utils,
        language,
        theme,
        animations,
        toast
    };

})();