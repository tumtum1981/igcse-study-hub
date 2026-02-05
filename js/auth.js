/**
 * Authentication Manager
 * Handles user signup, login, logout, and session management
 */

class AuthManager {
    constructor() {
        this.supabase = null;
        this.user = null;
        this.initialized = false;
        this.listeners = [];
    }

    async init() {
        if (this.initialized) return;

        this.supabase = await window.initSupabase();
        if (!this.supabase) {
            this.initialized = true;
            return;
        }

        // Get current session
        const { data: { session } } = await this.supabase.auth.getSession();
        if (session) {
            this.user = session.user;
            await this.loadUserProfile();
        }

        // Listen for auth changes
        this.supabase.auth.onAuthStateChange(async (event, session) => {
            if (session) {
                this.user = session.user;
                await this.loadUserProfile();
            } else {
                this.user = null;
                this.profile = null;
            }
            this.notifyListeners(event, session);
            this.updateUI();
        });

        this.initialized = true;
        this.updateUI();
    }

    async loadUserProfile() {
        if (!this.user || !this.supabase) return;

        const { data, error } = await this.supabase
            .from('profiles')
            .select('username')
            .eq('id', this.user.id)
            .single();

        if (data) {
            this.profile = data;
        }
    }

    /**
     * Sign up with email, password, username, and signup key
     * @returns {Object} { success: boolean, error?: string }
     */
    async signUp(email, password, username, signupKey) {
        if (!this.supabase) {
            return { success: false, error: 'Supabase not configured' };
        }

        // Validate signup key
        if (signupKey !== window.SIGNUP_KEY) {
            return { success: false, error: 'Invalid signup key' };
        }

        // Validate inputs
        if (!email || !password || !username) {
            return { success: false, error: 'All fields are required' };
        }

        if (password.length < 6) {
            return { success: false, error: 'Password must be at least 6 characters' };
        }

        if (username.length < 3) {
            return { success: false, error: 'Username must be at least 3 characters' };
        }

        try {
            // Check if username is taken
            const { data: existingUser } = await this.supabase
                .from('profiles')
                .select('username')
                .eq('username', username)
                .single();

            if (existingUser) {
                return { success: false, error: 'Username already taken' };
            }

            // Create auth user
            const { data, error } = await this.supabase.auth.signUp({
                email,
                password
            });

            if (error) {
                return { success: false, error: error.message };
            }

            // Create profile
            if (data.user) {
                const { error: profileError } = await this.supabase
                    .from('profiles')
                    .insert({
                        id: data.user.id,
                        username: username
                    });

                if (profileError) {
                    console.error('Profile creation error:', profileError);
                    // User created but profile failed - they can still use the system
                }
            }

            return { success: true };
        } catch (err) {
            return { success: false, error: 'An unexpected error occurred' };
        }
    }

    /**
     * Sign in with email and password
     * @returns {Object} { success: boolean, error?: string }
     */
    async signIn(email, password) {
        if (!this.supabase) {
            return { success: false, error: 'Supabase not configured' };
        }

        if (!email || !password) {
            return { success: false, error: 'Email and password are required' };
        }

        try {
            const { data, error } = await this.supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (err) {
            return { success: false, error: 'An unexpected error occurred' };
        }
    }

    /**
     * Sign out the current user
     */
    async signOut() {
        if (!this.supabase) return;

        await this.supabase.auth.signOut();
        this.user = null;
        this.profile = null;
    }

    /**
     * Check if user is logged in
     */
    isLoggedIn() {
        return this.user !== null;
    }

    /**
     * Get current user
     */
    getUser() {
        return this.user;
    }

    /**
     * Get user profile (including username)
     */
    getProfile() {
        return this.profile;
    }

    /**
     * Add auth state change listener
     */
    onAuthChange(callback) {
        this.listeners.push(callback);
    }

    notifyListeners(event, session) {
        this.listeners.forEach(cb => cb(event, session));
    }

    /**
     * Update UI elements based on auth state
     */
    updateUI() {
        const loginLinks = document.querySelectorAll('.auth-login');
        const dashboardLinks = document.querySelectorAll('.auth-dashboard');
        const usernameDisplays = document.querySelectorAll('.auth-username');

        if (this.isLoggedIn()) {
            loginLinks.forEach(el => el.style.display = 'none');
            dashboardLinks.forEach(el => el.style.display = '');
            usernameDisplays.forEach(el => {
                el.textContent = this.profile?.username || 'User';
                el.style.display = '';
            });
        } else {
            loginLinks.forEach(el => el.style.display = '');
            dashboardLinks.forEach(el => el.style.display = 'none');
            usernameDisplays.forEach(el => el.style.display = 'none');
        }
    }
}

// Create global instance
window.authManager = new AuthManager();

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.authManager.init();
});
