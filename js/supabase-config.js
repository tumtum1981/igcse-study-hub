/**
 * Supabase Configuration
 * Fetches credentials from Vercel environment variables via API
 */

// Required key for new user registration
const SIGNUP_KEY = 'FEEDME';

// Supabase client (initialized asynchronously)
let supabaseClient = null;
let supabaseConfigured = false;
let initPromise = null;

async function initSupabase() {
    // Already initialized
    if (supabaseClient !== null) {
        return supabaseClient;
    }

    // If initialization is in progress, wait for it
    if (initPromise !== null) {
        return initPromise;
    }

    // Start initialization
    initPromise = (async () => {
        try {
            // Fetch config from API endpoint
            const response = await fetch('/api/config');
            const config = await response.json();

            if (!config.configured) {
                console.warn('Supabase not configured. Progress tracking disabled.');
                supabaseConfigured = false;
                return null;
            }

            if (typeof window.supabase === 'undefined') {
                console.warn('Supabase library not loaded. Progress tracking disabled.');
                supabaseConfigured = false;
                return null;
            }

            supabaseClient = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
            supabaseConfigured = true;
            return supabaseClient;

        } catch (error) {
            console.warn('Failed to load Supabase config:', error.message);
            supabaseConfigured = false;
            return null;
        }
    })();

    return initPromise;
}

function isSupabaseConfigured() {
    return supabaseConfigured;
}

// Export for use in other modules
window.SIGNUP_KEY = SIGNUP_KEY;
window.initSupabase = initSupabase;
window.isSupabaseConfigured = isSupabaseConfigured;
