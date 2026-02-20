// language-manager.js
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    // Detect user's language
    detectLanguage() {
        // Check URL hash first (for manual selection)
        const hash = window.location.hash.replace('#', '');
        if (hash && translations[hash]) {
            return hash;
        }

        // Check localStorage for saved preference
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && translations[saved]) {
            return saved;
        }

        // Auto-detect from browser
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0]; // 'fr-FR' -> 'fr'

        // Check if we support this language
        if (translations[langCode]) {
            return langCode;
        }

        // Default to English
        return 'en';
    }

    // Initialize language system
    init() {
        this.applyLanguage(this.currentLang);
        this.setupLanguageSwitchers();
        this.updateLanguageSelection();
    }

    // Apply language to all elements
    applyLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language ${lang} not found`);
            return;
        }

        this.currentLang = lang;
        const t = translations[lang];

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Translate all text elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                // Check if translation contains HTML (like <br />)
                if (t[key].includes('<br')) {
                    element.innerHTML = t[key];
                } else {
                    element.textContent = t[key];
                }
            }
        });

        // Update images
        if (t.images) {
            document.querySelectorAll('[data-i18n-img]').forEach(img => {
                const key = img.getAttribute('data-i18n-img');
                if (t.images[key]) {
                    img.src = t.images[key];
                }
            });
        }

        // Save preference
        localStorage.setItem('preferredLanguage', lang);

        // Update URL hash without scrolling
        history.replaceState(null, null, `#${lang}`);

        // Trigger custom event for other scripts that need to know
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    // Setup click handlers for language switchers
    setupLanguageSwitchers() {
        document.querySelectorAll('.languagepicker a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const lang = link.getAttribute('href').replace('#', '');
                this.applyLanguage(lang);
                this.updateLanguageSelection();
            });
        });
    }

    // Update active state of language buttons
    updateLanguageSelection() {
        document.querySelectorAll('.languagepicker a').forEach(link => {
            const lang = link.getAttribute('href').replace('#', '');
            if (lang === this.currentLang) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Public method to change language programmatically
    setLanguage(lang) {
        this.applyLanguage(lang);
        this.updateLanguageSelection();
    }

    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
}

// Initialize when DOM is ready
let languageManager;
document.addEventListener('DOMContentLoaded', () => {
    languageManager = new LanguageManager();
});