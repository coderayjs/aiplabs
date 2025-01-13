const { Telegraf } = require('telegraf');
const { TwitterApi } = require('twitter-api-v2');
const config = require('./config');
const { BotError, ErrorCodes, handleError } = require('./utils/errorHandler');
const path = require('path');

class IntelliRaidBot {
    constructor() {
        try {
            // Initialize maps and settings first
            this.settings = new Map();
            this.activeRaids = new Map();
            this.raidIntervals = new Map();

            // Validate configuration
            if (!config.telegram.token) {
                throw new BotError(
                    'Missing Telegram token',
                    ErrorCodes.CONFIG,
                    { configPath: '.env.local' }
                );
            }

            // Initialize bot
            this.bot = new Telegraf(config.telegram.token, {
                telegram: {
                    apiRoot: 'https://api.telegram.org',
                    timeout: 30000,
                    retries: 3,
                    apiPrefix: 'bot'
                }
            });

            this.setupErrorHandling();
            this.setupCommands();
            
            console.log('Bot initialized successfully');

            // Add video path
            this.videoPath = path.join(__dirname, 'assets', 'videos', 'chat_locked.mp4');

            this.RAID_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds

        } catch (error) {
            handleError(error);
            throw error;
        }
    }

    setupErrorHandling() {
        // Global error handler
        this.bot.catch(async (err, ctx) => {
            await handleError(err, ctx);
        });

        // Handle specific errors
        process.on('uncaughtException', async (error) => {
            await handleError(new BotError(
                'Uncaught exception',
                ErrorCodes.INITIALIZATION,
                { error: error.message }
            ));
        });

        process.on('unhandledRejection', async (error) => {
            await handleError(new BotError(
                'Unhandled rejection',
                ErrorCodes.INITIALIZATION,
                { error: error.message }
            ));
        });
    }

    setupCommands() {
        // Raid command - Start a new raid
        this.bot.command('raid', async (ctx) => {
            const raidMenu = `
🕊 Send me a link to a Twitter post:

❗ Please, use method with post link and number of likes retweets replies and bookmarks to skip these steps next time, example:
/raid https://x.com/username/status/12345678900987654321 4 3 5 2
            `;
            await ctx.reply(raidMenu);
        });

        // Add command - Add tweet to queue
        this.bot.command('add', async (ctx) => {
            const addMenu = `
➕ Add Tweet to Queue

Send the tweet link to add it to the raid queue.
Current queue limit: 5 tweets

Format: https://twitter.com/user/status/123...
            `;
            await ctx.reply(addMenu);
        });

        // Settings command - Configure raid settings
        this.bot.command('settings', async (ctx) => {
            const chatId = ctx.chat.id;
            const settings = this.settings.get(chatId) || this.getDefaultSettings();

            const settingsMenu = `
⚙️ Raid Settings

Current Requirements:
📱 Likes: ${settings.likes}
🔄 Retweets: ${settings.retweets}
💬 Replies: ${settings.replies}
🔖 Bookmarks: ${settings.bookmarks}

⏰ Raid Duration: ${settings.duration} minutes
            `;
            await ctx.reply(settingsMenu);
        });

        // Setup command - Initial configuration
        this.bot.command('setup', async (ctx) => {
            const setupMenu = `
🔧 Raid Setup

1. Requirements:
   Current: ${this.getRequirementsText(ctx.chat.id)}

2. Duration:
   Current: 30 minutes

3. Auto-lock:
   Current: Enabled

Reply with number to modify setting
            `;
            await ctx.reply(setupMenu);
        });

        // Cancel command - Stop current raid
        this.bot.command('cancel', async (ctx) => {
            const chatId = ctx.chat.id;
            
            // Check if user is admin
            try {
                const member = await ctx.getChatMember(ctx.from.id);
                if (member.status !== 'creator' && member.status !== 'administrator') {
                    return ctx.reply('⚠️ Only admins can cancel raids');
                }

                // Check if there's an active raid
                if (!this.activeRaids.has(chatId)) {
                    return ctx.reply('❌ No active raid to cancel');
                }

                // Cancel the raid
                await this.cancelRaid(chatId, ctx);
                
            } catch (error) {
                console.error('Error in cancel command:', error);
                await ctx.reply('❌ Error canceling raid');
            }
        });

        // Handle Twitter/X links
        this.bot.on('text', async (ctx) => {
            try {
                const text = ctx.message.text;
                if (text.includes('twitter.com') || text.includes('x.com')) {
                    console.log('Processing tweet link:', text);
                    await this.handleTweetLink(ctx, text);
                }
            } catch (error) {
                await handleError(error, ctx);
            }
        });
    }

    getDefaultSettings() {
        return {
            likes: 5,
            retweets: 5,
            replies: 5,
            bookmarks: 3,
            duration: 30
        };
    }

    getRequirementsText(chatId) {
        const settings = this.settings.get(chatId) || this.getDefaultSettings();
        return `${settings.likes}L ${settings.retweets}RT ${settings.replies}Rep ${settings.bookmarks}BM`;
    }

    generateProgressBar(current, total, size = 10) {
        const progress = Math.floor((current / total) * size);
        const filled = '█'.repeat(progress);
        const empty = '▒'.repeat(size - progress);
        return filled + empty;
    }

    formatTimeLeft(startTime) {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, this.RAID_DURATION - elapsed);
        
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    async handleTweetLink(ctx, text) {
        try {
            const chatId = ctx.chat.id;

            if (this.activeRaids.has(chatId)) {
                throw new BotError(
                    'Raid already in progress',
                    ErrorCodes.RAID,
                    { chatId }
                );
            }

            // Send CHAT LOCKED video
            try {
                await ctx.replyWithVideo({ 
                    source: this.videoPath,
                    width: 800,  // Match raid message width
                    height: 400  // Proportional height
                });
            } catch (videoError) {
                console.error('Failed to send lock video:', videoError);
                await ctx.reply('CHAT LOCKED');
            }

            const settings = this.settings.get(chatId) || {
                likes: 4,
                retweets: 4,
                replies: 4,
                bookmarks: 2
            };

            this.activeRaids.set(chatId, {
                tweetId: text.split('/').pop().split('?')[0],
                tweetUrl: text,
                startTime: Date.now(),
                settings,
                progress: {
                    likes: 0,
                    retweets: 0,
                    replies: 0,
                    bookmarks: 0
                }
            });

            const progressBar = this.generateProgressBar(0, 10);

            // Send raid status message with countdown
            const statusMsg = await ctx.reply(`
Raid going until the tweet has ${settings.likes} likes, ${settings.replies} replies, ${settings.retweets} retweets and ${settings.bookmarks} bookmarks:

[${progressBar}]

Likes: 0/${settings.likes}
Retweets: 0/${settings.retweets}
Replies: 0/${settings.replies}
Bookmarks: 0/${settings.bookmarks}

${text}

Trending | Events                                          15:00`);

            await ctx.pinChatMessage(statusMsg.message_id);

            // Start monitoring with countdown
            const interval = setInterval(async () => {
                const raid = this.activeRaids.get(chatId);
                if (!raid) {
                    clearInterval(interval);
                    return;
                }

                // Check if time is up
                const elapsed = Date.now() - raid.startTime;
                if (elapsed >= this.RAID_DURATION) {
                    clearInterval(interval);
                    await this.endRaid(ctx, chatId, 'Time\'s up!');
                    return;
                }

                await this.updateRaidProgress(ctx, statusMsg.message_id, raid);
            }, 1000); // Update every second for smooth countdown

            this.raidIntervals.set(chatId, interval);

        } catch (error) {
            console.error('Error in handleTweetLink:', error);
            await handleError(error, ctx);
        }
    }

    async updateRaidProgress(ctx, messageId, raid) {
        try {
            const progressBar = this.generateProgressBar(
                raid.progress.likes + raid.progress.retweets + 
                raid.progress.replies + raid.progress.bookmarks,
                raid.settings.likes + raid.settings.retweets + 
                raid.settings.replies + raid.settings.bookmarks
            );

            const timeLeft = this.formatTimeLeft(raid.startTime);

            const updatedText = `
Raid going until the tweet has ${raid.settings.likes} likes, ${raid.settings.replies} replies, ${raid.settings.retweets} retweets and ${raid.settings.bookmarks} bookmarks:

[${progressBar}]

Likes: ${raid.progress.likes}/${raid.settings.likes}
Retweets: ${raid.progress.retweets}/${raid.settings.retweets}
Replies: ${raid.progress.replies}/${raid.settings.replies}
Bookmarks: ${raid.progress.bookmarks}/${raid.settings.bookmarks}

${raid.tweetUrl}

Trending | Events                                          ${timeLeft}`;

            await ctx.telegram.editMessageText(
                ctx.chat.id,
                messageId,
                null,
                updatedText
            );

        } catch (error) {
            console.error('Error updating raid progress:', error);
        }
    }

    async endRaid(ctx, chatId, reason) {
        const raid = this.activeRaids.get(chatId);
        if (!raid) return;

        await ctx.reply(`Raid ended: ${reason}

Final Stats:
Likes: ${raid.progress.likes}/${raid.settings.likes}
Retweets: ${raid.progress.retweets}/${raid.settings.retweets}
Replies: ${raid.progress.replies}/${raid.settings.replies}
Bookmarks: ${raid.progress.bookmarks}/${raid.settings.bookmarks}

Duration: 15:00`);

        this.activeRaids.delete(chatId);
        await ctx.reply('CHAT UNLOCKED');
    }

    async cancelRaid(chatId, ctx) {
        try {
            // Clear monitoring interval
            if (this.raidIntervals.has(chatId)) {
                clearInterval(this.raidIntervals.get(chatId));
                this.raidIntervals.delete(chatId);
            }

            // Get raid info
            const raid = this.activeRaids.get(chatId);
            
            // Unpin the raid message
            try {
                if (raid.pinnedMessageId) {
                    await ctx.unpinChatMessage(raid.pinnedMessageId);
                }
            } catch (error) {
                console.error('Error unpinning message:', error);
            }

            // Send cancellation message
            await ctx.reply(`
❌ Raid Cancelled

Tweet: ${raid.tweetUrl}
Duration: ${this.formatDuration(Date.now() - raid.startTime)}
Status: Cancelled by admin
            `);

            // Unlock chat
            await ctx.reply('🔓 CHAT UNLOCKED');

            // Clean up raid data
            this.activeRaids.delete(chatId);

        } catch (error) {
            console.error('Error canceling raid:', error);
            throw error;
        }
    }

    formatDuration(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) {
            return `${hours}h ${minutes % 60}m`;
        }
        if (minutes > 0) {
            return `${minutes}m ${seconds % 60}s`;
        }
        return `${seconds}s`;
    }

    launch() {
        const startBot = async (retries = 3) => {
            try {
                await this.bot.launch();
                console.log('Bot started successfully! 🚀');
            } catch (error) {
                if (retries > 0) {
                    console.log(`Retry attempt ${4 - retries}/3 in 5 seconds...`);
                    await new Promise(resolve => setTimeout(resolve, 5000));
                    return startBot(retries - 1);
                }
                throw new BotError(
                    'Failed to start bot after 3 attempts',
                    ErrorCodes.INITIALIZATION,
                    { lastError: error.message }
                );
            }
        };

        return startBot();
    }
}

module.exports = IntelliRaidBot; 