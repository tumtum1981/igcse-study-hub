/**
 * Quiz Answer Reveal Functionality
 * Handles click-to-reveal answer boxes
 */

class QuizManager {
    constructor() {
        this.answers = document.querySelectorAll('.quiz-answer');
        this.init();
    }

    init() {
        this.answers.forEach(answer => {
            answer.addEventListener('click', () => this.toggleAnswer(answer));
            answer.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleAnswer(answer);
                }
            });
            answer.setAttribute('role', 'button');
            answer.setAttribute('tabindex', '0');
            answer.setAttribute('aria-expanded', 'false');
        });
    }

    toggleAnswer(answerEl) {
        const isRevealed = answerEl.classList.contains('revealed');

        if (isRevealed) {
            answerEl.classList.remove('revealed');
            answerEl.setAttribute('aria-expanded', 'false');
        } else {
            answerEl.classList.add('revealed');
            answerEl.setAttribute('aria-expanded', 'true');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new QuizManager();
});
