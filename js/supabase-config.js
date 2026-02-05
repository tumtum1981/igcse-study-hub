/**
 * Supabase Configuration
 * Replace the placeholder values with your Supabase project credentials
 *
 * To get these values:
 * 1. Go to https://supabase.com and create a free account
 * 2. Create a new project
 * 3. Go to Settings > API
 * 4. Copy the "Project URL" and "anon public" key
 */

const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
};

// Required key for new user registration
const SIGNUP_KEY = 'FEEDME';

// Initialize Supabase client (only if credentials are configured)
let supabase = null;

function initSupabase() {
    if (SUPABASE_CONFIG.url === 'YOUR_SUPABASE_URL' ||
        SUPABASE_CONFIG.anonKey === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('Supabase not configured. Progress tracking disabled.');
        return null;
    }

    if (typeof window.supabase !== 'undefined') {
        return window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    }

    console.warn('Supabase library not loaded. Progress tracking disabled.');
    return null;
}

// Export for use in other modules
window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.SIGNUP_KEY = SIGNUP_KEY;
window.initSupabase = initSupabase;
