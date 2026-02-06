/**
 * Theme Preloader
 * This script runs immediately to prevent flash of wrong theme.
 * Must be loaded in <head> AFTER the theme CSS link.
 */
(function() {
    const savedTheme = localStorage.getItem('igcse-theme');
    if (savedTheme && savedTheme !== 'undertale') {
        // Find and update the theme link immediately
        const themeLink = document.querySelector('link[data-theme]');
        if (themeLink) {
            // Calculate path depth from current URL
            const path = window.location.pathname;
            let depth = 0;

            if (path.includes('/subjects/')) {
                const afterSubjects = path.split('/subjects/')[1] || '';
                depth = (afterSubjects.match(/\//g) || []).length + 1;
            } else if (path.includes('/tests/')) {
                const afterTests = path.split('/tests/')[1] || '';
                depth = (afterTests.match(/\//g) || []).length + 1;
            }

            const basePath = '../'.repeat(depth);
            themeLink.href = basePath + 'css/themes/' + savedTheme + '.css';
        }
    }
    // Show page after theme is set
    document.documentElement.style.visibility = 'visible';
    document.documentElement.style.opacity = '1';
})();
