/**
 * Main Application Controller
 * Handles navigation and general functionality
 */

/**
 * Theme Manager
 * Handles theme switching and persistence
 */
class ThemeManager {
    constructor() {
        this.themes = {
            undertale: 'css/themes/undertale.css',
            minecraft: 'css/themes/minecraft.css',
            bbc: 'css/themes/bbc.css'
        };
        this.currentTheme = localStorage.getItem('igcse-theme') || 'undertale';
        // Reset to undertale if user had an old/invalid theme selected
        if (!this.themes[this.currentTheme]) {
            this.currentTheme = 'undertale';
        }
        this.init();
    }

    init() {
        // Apply saved theme on load
        this.applyTheme(this.currentTheme);

        // Set up theme switcher if present
        const selector = document.querySelector('.theme-switcher__select');
        if (selector) {
            selector.value = this.currentTheme;
            selector.addEventListener('change', (e) => {
                this.applyTheme(e.target.value);
            });
        }
    }

    applyTheme(themeName) {
        // Get the base path by counting how deep we are in the folder structure
        const pathDepth = this.getPathDepth();
        const basePath = '../'.repeat(pathDepth);

        // Update the theme stylesheet
        let themeLink = document.querySelector('link[data-theme]');
        if (!themeLink) {
            // Find the main.css link and add theme link AFTER it (so theme overrides main.css)
            const mainCss = document.querySelector('link[href*="main.css"]');
            if (mainCss) {
                themeLink = document.createElement('link');
                themeLink.rel = 'stylesheet';
                themeLink.setAttribute('data-theme', 'true');
                mainCss.parentNode.insertBefore(themeLink, mainCss.nextSibling);
            }
        }

        if (themeLink) {
            themeLink.href = basePath + this.themes[themeName];
        }

        // Update body class for theme-specific overrides
        document.body.classList.remove('theme-undertale', 'theme-minecraft', 'theme-bbc');
        document.body.classList.add('theme-' + themeName);

        // Save preference
        this.currentTheme = themeName;
        localStorage.setItem('igcse-theme', themeName);

        // Update selector if it exists
        const selector = document.querySelector('.theme-switcher__select');
        if (selector) {
            selector.value = themeName;
        }
    }

    getPathDepth() {
        // Calculate path depth based on current location
        const path = window.location.pathname;
        const websiteIndex = path.indexOf('website');
        if (websiteIndex === -1) return 0;

        const relativePath = path.substring(websiteIndex + 8); // +8 for 'website/'
        const depth = (relativePath.match(/\//g) || []).length;
        return Math.max(0, depth);
    }
}

class NavigationManager {
    constructor() {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.init();
    }

    init() {
        if (this.navToggle && this.navLinks) {
            this.navToggle.addEventListener('click', () => {
                this.navLinks.classList.toggle('open');
                const isOpen = this.navLinks.classList.contains('open');
                this.navToggle.setAttribute('aria-expanded', isOpen);
            });
        }

        this.highlightCurrentPage();

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-main') && this.navLinks) {
                this.navLinks.classList.remove('open');
            }
        });
    }

    highlightCurrentPage() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.nav-link');

        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.replace(/\.\.\//g, '').replace('index.html', ''))) {
                link.classList.add('active');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
});
