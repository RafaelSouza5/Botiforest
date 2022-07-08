module.exports = {
    app: {
        prefix: "!",
        token: "OTk0NjQ2ODMyMzY4MDcwNzY2.Gn9Y9D.6n8dq5Ci7XGrU--uaG6eBhEHt0OQ4h8CYs58ec",
        // playing: "✝ SHIRO ✝",
    },

    opt: {
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};