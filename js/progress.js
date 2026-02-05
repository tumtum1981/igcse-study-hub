/**
 * Progress Manager
 * Handles saving and retrieving test scores and topic confidence ratings
 */

class ProgressManager {
    constructor() {
        this.supabase = null;
        this.initialized = false;
    }

    async init() {
        if (this.initialized) return;

        this.supabase = await window.initSupabase();
        this.initialized = true;
    }

    /**
     * Check if user is logged in
     */
    isLoggedIn() {
        return window.authManager && window.authManager.isLoggedIn();
    }

    /**
     * Save a test score
     * @param {Object} scoreData - { testId, subject, block, score, total, percentage }
     */
    async saveTestScore(scoreData) {
        if (!this.supabase || !this.isLoggedIn()) return { success: false };

        const user = window.authManager.getUser();
        if (!user) return { success: false };

        try {
            const { error } = await this.supabase
                .from('test_scores')
                .insert({
                    user_id: user.id,
                    test_id: scoreData.testId,
                    subject: scoreData.subject,
                    block: scoreData.block,
                    score: scoreData.score,
                    total: scoreData.total,
                    percentage: scoreData.percentage
                });

            if (error) {
                console.error('Error saving test score:', error);
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (err) {
            console.error('Error saving test score:', err);
            return { success: false };
        }
    }

    /**
     * Get test history for current user
     * @param {number} limit - Max number of records to return
     */
    async getTestHistory(limit = 20) {
        if (!this.supabase || !this.isLoggedIn()) return [];

        const user = window.authManager.getUser();
        if (!user) return [];

        try {
            const { data, error } = await this.supabase
                .from('test_scores')
                .select('*')
                .eq('user_id', user.id)
                .order('completed_at', { ascending: false })
                .limit(limit);

            if (error) {
                console.error('Error fetching test history:', error);
                return [];
            }

            return data || [];
        } catch (err) {
            console.error('Error fetching test history:', err);
            return [];
        }
    }

    /**
     * Get personal best scores for each test
     */
    async getPersonalBests() {
        if (!this.supabase || !this.isLoggedIn()) return {};

        const user = window.authManager.getUser();
        if (!user) return {};

        try {
            const { data, error } = await this.supabase
                .from('test_scores')
                .select('test_id, percentage')
                .eq('user_id', user.id);

            if (error) {
                console.error('Error fetching personal bests:', error);
                return {};
            }

            // Group by test_id and find max percentage
            const bests = {};
            (data || []).forEach(score => {
                if (!bests[score.test_id] || score.percentage > bests[score.test_id]) {
                    bests[score.test_id] = score.percentage;
                }
            });

            return bests;
        } catch (err) {
            console.error('Error fetching personal bests:', err);
            return {};
        }
    }

    /**
     * Get progress summary for dashboard
     */
    async getProgressSummary() {
        if (!this.supabase || !this.isLoggedIn()) {
            return {
                testsCompleted: 0,
                averageScore: 0,
                topicsConfident: 0,
                bySubject: {}
            };
        }

        const user = window.authManager.getUser();
        if (!user) {
            return {
                testsCompleted: 0,
                averageScore: 0,
                topicsConfident: 0,
                bySubject: {}
            };
        }

        try {
            // Get test scores
            const { data: scores } = await this.supabase
                .from('test_scores')
                .select('*')
                .eq('user_id', user.id);

            // Get confidence ratings
            const { data: confidence } = await this.supabase
                .from('topic_confidence')
                .select('*')
                .eq('user_id', user.id);

            const testScores = scores || [];
            const confidenceRatings = confidence || [];

            // Calculate stats
            const testsCompleted = testScores.length;
            const averageScore = testsCompleted > 0
                ? Math.round(testScores.reduce((sum, s) => sum + s.percentage, 0) / testsCompleted)
                : 0;
            const topicsConfident = confidenceRatings.filter(c => c.confidence === 'confident').length;

            // Group by subject
            const bySubject = {};
            testScores.forEach(score => {
                if (!bySubject[score.subject]) {
                    bySubject[score.subject] = { tests: 0, totalPercent: 0 };
                }
                bySubject[score.subject].tests++;
                bySubject[score.subject].totalPercent += score.percentage;
            });

            // Calculate averages per subject
            Object.keys(bySubject).forEach(subject => {
                bySubject[subject].average = Math.round(
                    bySubject[subject].totalPercent / bySubject[subject].tests
                );
            });

            return {
                testsCompleted,
                averageScore,
                topicsConfident,
                bySubject
            };
        } catch (err) {
            console.error('Error fetching progress summary:', err);
            return {
                testsCompleted: 0,
                averageScore: 0,
                topicsConfident: 0,
                bySubject: {}
            };
        }
    }

    /**
     * Save or update topic confidence rating
     * @param {Object} data - { topicId, subject, block, confidence }
     */
    async saveConfidence(data) {
        if (!this.supabase || !this.isLoggedIn()) return { success: false };

        const user = window.authManager.getUser();
        if (!user) return { success: false };

        try {
            // Upsert - insert or update on conflict
            const { error } = await this.supabase
                .from('topic_confidence')
                .upsert({
                    user_id: user.id,
                    topic_id: data.topicId,
                    subject: data.subject,
                    block: data.block,
                    confidence: data.confidence,
                    updated_at: new Date().toISOString()
                }, {
                    onConflict: 'user_id,topic_id'
                });

            if (error) {
                console.error('Error saving confidence:', error);
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (err) {
            console.error('Error saving confidence:', err);
            return { success: false };
        }
    }

    /**
     * Get confidence rating for a specific topic
     * @param {string} topicId
     */
    async getConfidence(topicId) {
        if (!this.supabase || !this.isLoggedIn()) return null;

        const user = window.authManager.getUser();
        if (!user) return null;

        try {
            const { data, error } = await this.supabase
                .from('topic_confidence')
                .select('confidence')
                .eq('user_id', user.id)
                .eq('topic_id', topicId)
                .single();

            if (error && error.code !== 'PGRST116') {
                // PGRST116 = no rows returned (not an error for us)
                console.error('Error fetching confidence:', error);
            }

            return data?.confidence || null;
        } catch (err) {
            return null;
        }
    }

    /**
     * Get all confidence ratings for current user
     */
    async getAllConfidence() {
        if (!this.supabase || !this.isLoggedIn()) return {};

        const user = window.authManager.getUser();
        if (!user) return {};

        try {
            const { data, error } = await this.supabase
                .from('topic_confidence')
                .select('topic_id, confidence')
                .eq('user_id', user.id);

            if (error) {
                console.error('Error fetching all confidence:', error);
                return {};
            }

            // Convert to map
            const map = {};
            (data || []).forEach(item => {
                map[item.topic_id] = item.confidence;
            });

            return map;
        } catch (err) {
            return {};
        }
    }

    /**
     * Get total user count (for about page)
     */
    async getUserCount() {
        if (!this.supabase) return 0;

        try {
            const { data, error } = await this.supabase.rpc('get_user_count');

            if (error) {
                console.error('Error fetching user count:', error);
                return 0;
            }

            return data || 0;
        } catch (err) {
            return 0;
        }
    }
}

// Create global instance
window.progressManager = new ProgressManager();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.progressManager.init();
});

/**
 * Confidence Rating Widget Handler
 * Manages the confidence buttons on topic pages
 */
class ConfidenceWidget {
    constructor() {
        this.widget = document.querySelector('.confidence-rating');
        if (!this.widget) return;

        this.buttons = this.widget.querySelectorAll('.confidence-btn');
        this.topicId = this.widget.dataset.topicId;
        this.subject = document.body.dataset.subject || this.extractSubjectFromUrl();
        this.block = this.extractBlockFromUrl();

        this.init();
    }

    async init() {
        // Wait for auth to initialize
        await this.waitForAuth();

        if (!window.progressManager.isLoggedIn()) {
            this.widget.classList.add('logged-out');
            return;
        }

        // Load current confidence
        const current = await window.progressManager.getConfidence(this.topicId);
        if (current) {
            this.setActiveButton(current);
        }

        // Add click handlers
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => this.handleClick(btn));
        });
    }

    waitForAuth() {
        return new Promise(resolve => {
            const check = () => {
                if (window.authManager && window.authManager.initialized) {
                    resolve();
                } else {
                    setTimeout(check, 50);
                }
            };
            check();
        });
    }

    extractSubjectFromUrl() {
        const path = window.location.pathname;
        const match = path.match(/subjects\/([^/]+)/);
        return match ? match[1] : '';
    }

    extractBlockFromUrl() {
        const path = window.location.pathname;
        const match = path.match(/block-(\d+)/);
        return match ? `block-${match[1]}` : '';
    }

    setActiveButton(level) {
        this.buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.level === level);
        });
    }

    async handleClick(btn) {
        const level = btn.dataset.level;

        // Optimistically update UI
        this.setActiveButton(level);

        // Save to database
        const result = await window.progressManager.saveConfidence({
            topicId: this.topicId,
            subject: this.subject,
            block: this.block,
            confidence: level
        });

        if (!result.success) {
            console.error('Failed to save confidence rating');
        }
    }
}

// Initialize confidence widget when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ConfidenceWidget();
});
