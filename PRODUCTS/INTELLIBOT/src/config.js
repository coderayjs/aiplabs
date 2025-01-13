require('dotenv').config({ path: '.env.local' });

const config = {
    telegram: {
        token: process.env.BOT_TOKEN
    },
    twitter: {
        apiKey: process.env.TWITTER_API_KEY,
        apiSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_SECRET
    }
};

// Validate required environment variables
if (!config.telegram.token) {
    throw new Error('BOT_TOKEN is required in .env.local file');
}

module.exports = config; 