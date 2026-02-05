export default function handler(req, res) {
    // Set CORS headers for local development
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const config = {
        supabaseUrl: process.env.SUPABASE_URL || null,
        supabaseAnonKey: process.env.SUPABASE_ANON_KEY || null
    };

    // Check if configured
    if (!config.supabaseUrl || !config.supabaseAnonKey) {
        return res.status(200).json({
            configured: false,
            message: 'Supabase environment variables not set'
        });
    }

    return res.status(200).json({
        configured: true,
        supabaseUrl: config.supabaseUrl,
        supabaseAnonKey: config.supabaseAnonKey
    });
}
