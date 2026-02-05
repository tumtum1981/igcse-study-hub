/**
 * Quick Test - Multiple Choice Quiz System
 * Handles answer selection, marking, and score display
 */

class QuickTest {
    constructor() {
        this.questions = document.querySelectorAll('.test-question');
        this.submitBtn = document.querySelector('.test-submit');
        this.resultsSection = document.querySelector('.test-results');
        this.scoreDisplay = document.querySelector('.test-score');
        this.answersDisplay = document.querySelector('.test-answers');
        this.retryBtn = document.querySelector('.test-retry');
        this.submitted = false;
        this.init();
    }

    init() {
        // Handle option selection
        this.questions.forEach(question => {
            const options = question.querySelectorAll('.test-option');
            options.forEach(option => {
                option.addEventListener('click', () => this.selectOption(question, option));
                option.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.selectOption(question, option);
                    }
                });
            });
        });

        // Submit button
        if (this.submitBtn) {
            this.submitBtn.addEventListener('click', () => this.submitTest());
        }

        // Retry button
        if (this.retryBtn) {
            this.retryBtn.addEventListener('click', () => this.retryTest());
        }
    }

    selectOption(question, selectedOption) {
        if (this.submitted) return;

        // Remove selection from all options in this question
        const options = question.querySelectorAll('.test-option');
        options.forEach(opt => opt.classList.remove('selected'));

        // Select the clicked option
        selectedOption.classList.add('selected');

        // Store the answer
        question.dataset.selected = selectedOption.dataset.value;
    }

    submitTest() {
        if (this.submitted) return;

        let correct = 0;
        let total = this.questions.length;
        let answersHtml = '<h3>* ANSWERS</h3>';

        this.questions.forEach((question, index) => {
            const correctAnswer = question.dataset.correct;
            const selectedAnswer = question.dataset.selected;
            const questionText = question.querySelector('.test-question__text').textContent;
            const options = question.querySelectorAll('.test-option');

            // Mark correct/incorrect
            options.forEach(opt => {
                if (opt.dataset.value === correctAnswer) {
                    opt.classList.add('correct');
                }
                if (opt.dataset.value === selectedAnswer && selectedAnswer !== correctAnswer) {
                    opt.classList.add('incorrect');
                }
            });

            // Check if correct
            const isCorrect = selectedAnswer === correctAnswer;
            if (isCorrect) {
                correct++;
                question.classList.add('answered-correct');
            } else {
                question.classList.add('answered-incorrect');
            }

            // Build answers display
            const correctOptionText = question.querySelector(`[data-value="${correctAnswer}"]`).textContent;
            answersHtml += `
                <div class="answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <span class="answer-num">Q${index + 1}.</span>
                    <span class="answer-status">${isCorrect ? '✓' : '✗'}</span>
                    <span class="answer-text">Correct: ${correctOptionText}</span>
                </div>
            `;
        });

        // Calculate percentage
        const percentage = Math.round((correct / total) * 100);

        // Determine grade message
        let gradeMessage = '';
        if (percentage >= 90) gradeMessage = '* EXCELLENT! You are filled with DETERMINATION!';
        else if (percentage >= 70) gradeMessage = '* GREAT JOB! Keep studying!';
        else if (percentage >= 50) gradeMessage = '* NOT BAD! Review the topics you missed.';
        else gradeMessage = '* KEEP TRYING! Don\'t give up!';

        // Display results
        this.scoreDisplay.innerHTML = `
            <div class="score-number">${correct} / ${total}</div>
            <div class="score-percentage">${percentage}%</div>
            <div class="score-message">${gradeMessage}</div>
        `;
        this.answersDisplay.innerHTML = answersHtml;
        this.resultsSection.classList.add('visible');
        this.submitBtn.disabled = true;
        this.submitted = true;

        // Scroll to results
        this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    retryTest() {
        // Reset all selections and styling
        this.questions.forEach(question => {
            question.classList.remove('answered-correct', 'answered-incorrect');
            delete question.dataset.selected;

            const options = question.querySelectorAll('.test-option');
            options.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
            });
        });

        // Hide results
        this.resultsSection.classList.remove('visible');
        this.submitBtn.disabled = false;
        this.submitted = false;

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new QuickTest();
});
