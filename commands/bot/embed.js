const Discord = require('discord.js')

module.exports = {
    name: 'ch',
    aliases: ['ch'],


    run: async (client, message, args) => {

        const channel = message.guild.channels.cache.get(args[0]);

        message.channel.delete();
    }
}