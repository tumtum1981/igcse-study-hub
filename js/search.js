/**
 * IGCSE Study Hub - Search Engine
 * Client-side search functionality
 */

class SearchEngine {
    constructor() {
        this.index = SEARCH_INDEX || [];
        this.searchInput = null;
        this.resultsContainer = null;
        this.debounceTimer = null;
        this.isOpen = false;
        this.init();
    }

    init() {
        // Create search UI
        this.createSearchUI();
        this.bindEvents();
    }

    createSearchUI() {
        // Find the nav-links ul
        const navLinks = document.querySelector('.nav-links');
        if (!navLinks) return;

        // Create search container
        const searchContainer = document.createElement('li');
        searchContainer.className = 'search-container';
        searchContainer.innerHTML = `
            <div class="search-bar">
                <input type="text"
                       class="search-bar__input"
                       placeholder="Search topics..."
                       aria-label="Search topics">
                <button class="search-bar__button" aria-label="Search">
                    <span class="search-icon">&#128269;</span>
                </button>
            </div>
            <div class="search-results" aria-live="polite"></div>
        `;

        // Insert before theme switcher
        const themeSwitcher = navLinks.querySelector('.theme-switcher');
        if (themeSwitcher) {
            navLinks.insertBefore(searchContainer, themeSwitcher);
        } else {
            navLinks.appendChild(searchContainer);
        }

        this.searchInput = searchContainer.querySelector('.search-bar__input');
        this.resultsContainer = searchContainer.querySelector('.search-results');
    }

    bindEvents() {
        if (!this.searchInput) return;

        // Input event with debounce
        this.searchInput.addEventListener('input', (e) => {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.handleSearch(e.target.value);
            }, 300);
        });

        // Focus event
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value.length >= 2) {
                this.showResults();
            }
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            const searchContainer = document.querySelector('.search-container');
            if (searchContainer && !searchContainer.contains(e.target)) {
                this.hideResults();
            }
        });

        // Keyboard navigation
        this.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideResults();
                this.searchInput.blur();
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.focusNextResult();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.focusPrevResult();
            }
        });
    }

    handleSearch(query) {
        query = query.trim().toLowerCase();

        if (query.length < 2) {
            this.hideResults();
            return;
        }

        const results = this.search(query);
        this.renderResults(results, query);
        this.showResults();
    }

    search(query) {
        const terms = query.split(/\s+/);

        const scored = this.index.map(page => {
            let score = 0;

            // Title match (highest weight)
            if (page.title.toLowerCase().includes(query)) {
                score += 100;
            }
            terms.forEach(term => {
                if (page.title.toLowerCase().includes(term)) {
                    score += 50;
                }
            });

            // Code match (high weight)
            if (page.code && page.code.toLowerCase().includes(query)) {
                score += 80;
            }

            // Keyword match (medium weight)
            page.keywords.forEach(keyword => {
                if (keyword.toLowerCase().includes(query)) {
                    score += 30;
                }
                terms.forEach(term => {
                    if (keyword.toLowerCase().includes(term)) {
                        score += 15;
                    }
                });
            });

            // Excerpt match (lower weight)
            terms.forEach(term => {
                if (page.excerpt.toLowerCase().includes(term)) {
                    score += 5;
                }
            });

            return { ...page, score };
        });

        // Filter and sort by score
        return scored
            .filter(page => page.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 6);
    }

    renderResults(results, query) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="search-results__empty">
                    No results found for "${this.escapeHtml(query)}"
                </div>
            `;
            return;
        }

        // Calculate correct path prefix based on current page depth
        const pathPrefix = this.getPathPrefix();

        const html = results.map((result, index) => `
            <a href="${pathPrefix}${result.url}"
               class="search-result"
               data-index="${index}"
               tabindex="0">
                <span class="search-result__badge search-result__badge--${result.subject}">
                    ${this.getSubjectLabel(result.subject)}
                </span>
                <span class="search-result__title">${this.highlightMatch(result.title, query)}</span>
                <span class="search-result__code">${result.code}</span>
                <span class="search-result__excerpt">${this.highlightMatch(result.excerpt, query)}</span>
            </a>
        `).join('');

        this.resultsContainer.innerHTML = html;

        // Add keyboard navigation to results
        const resultLinks = this.resultsContainer.querySelectorAll('.search-result');
        resultLinks.forEach(link => {
            link.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    this.focusNextResult();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.focusPrevResult();
                } else if (e.key === 'Escape') {
                    this.hideResults();
                    this.searchInput.focus();
                }
            });
        });
    }

    getPathPrefix() {
        const path = window.location.pathname;
        const depth = (path.match(/\//g) || []).length;

        // Adjust based on common folder structures
        if (path.includes('/subjects/') && path.includes('/block-')) {
            return '../../../';
        } else if (path.includes('/subjects/')) {
            return '../../';
        } else if (path.includes('/tests/') && path.includes('/block-')) {
            return '../../../';
        } else if (path.includes('/tests/')) {
            return '../';
        }
        return '';
    }

    getSubjectLabel(subject) {
        const labels = {
            'biology': 'Bio',
            'chemistry': 'Chem',
            'physics': 'Phys',
            'separate-biology': 'Sep Bio'
        };
        return labels[subject] || subject;
    }

    highlightMatch(text, query) {
        const escaped = this.escapeHtml(text);
        const terms = query.split(/\s+/).filter(t => t.length >= 2);

        let highlighted = escaped;
        terms.forEach(term => {
            const regex = new RegExp(`(${this.escapeRegex(term)})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark class="search-highlight">$1</mark>');
        });

        return highlighted;
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    showResults() {
        this.resultsContainer.classList.add('visible');
        this.isOpen = true;
    }

    hideResults() {
        this.resultsContainer.classList.remove('visible');
        this.isOpen = false;
    }

    focusNextResult() {
        const results = this.resultsContainer.querySelectorAll('.search-result');
        const current = document.activeElement;
        const currentIndex = Array.from(results).indexOf(current);

        if (currentIndex === -1 || currentIndex === results.length - 1) {
            results[0]?.focus();
        } else {
            results[currentIndex + 1]?.focus();
        }
    }

    focusPrevResult() {
        const results = this.resultsContainer.querySelectorAll('.search-result');
        const current = document.activeElement;
        const currentIndex = Array.from(results).indexOf(current);

        if (currentIndex === -1) {
            this.searchInput.focus();
        } else if (currentIndex === 0) {
            this.searchInput.focus();
        } else {
            results[currentIndex - 1]?.focus();
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SearchEngine();
});
