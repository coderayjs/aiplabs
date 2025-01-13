class BotError extends Error {
    constructor(message, code, context = {}) {
        super(message);
        this.name = 'BotError';
        this.code = code;
        this.context = context;
        this.timestamp = new Date().toISOString();
    }
}

const ErrorCodes = {
    INITIALIZATION: 'INIT_ERROR',
    CONFIG: 'CONFIG_ERROR',
    TELEGRAM: 'TELEGRAM_ERROR',
    TWITTER: 'TWITTER_ERROR',
    RAID: 'RAID_ERROR',
    PERMISSION: 'PERMISSION_ERROR',
    RATE_LIMIT: 'RATE_LIMIT_ERROR'
};

const handleError = async (error, ctx = null) => {
    const errorTime = new Date().toISOString();
    
    // Log error details
    console.error(`[${errorTime}] ${error.name}: ${error.message}`);
    if (error.code) console.error(`Error Code: ${error.code}`);
    if (error.context) console.error('Context:', error.context);
    console.error('Stack:', error.stack);

    // User-friendly messages
    const userMessages = {
        [ErrorCodes.INITIALIZATION]: '⚠️ Bot initialization error. Please contact admin.',
        [ErrorCodes.CONFIG]: '⚠️ Configuration error. Please check settings.',
        [ErrorCodes.TELEGRAM]: '⚠️ Telegram API error. Please try again later.',
        [ErrorCodes.TWITTER]: '⚠️ Twitter API error. Please try again later.',
        [ErrorCodes.RAID]: '⚠️ Raid operation failed. Please try again.',
        [ErrorCodes.PERMISSION]: '⚠️ Permission denied. Bot needs admin rights.',
        [ErrorCodes.RATE_LIMIT]: '⚠️ Too many requests. Please wait a moment.',
        'DEFAULT': '⚠️ An error occurred. Please try again later.'
    };

    // Send user-friendly message if context exists
    if (ctx) {
        try {
            await ctx.reply(userMessages[error.code] || userMessages.DEFAULT);
        } catch (replyError) {
            console.error('Failed to send error message:', replyError);
        }
    }

    // Return formatted error for logging
    return {
        timestamp: errorTime,
        type: error.name,
        code: error.code,
        message: error.message,
        context: error.context,
        stack: error.stack
    };
};

module.exports = {
    BotError,
    ErrorCodes,
    handleError
}; 