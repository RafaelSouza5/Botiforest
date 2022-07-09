const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ['pg'],


    run: async (client, message, args) => {
        let ping = client.ws.ping;
        
        message.reply({
            embeds: [new Discord.MessageEmbed()

                .setTitle(":robot: Ping do bot")
                .setColor("BLACK")
                .setDescription(`O ping do bot é de ${ping}ms!`)
                .setThumbnail("https://cdn.discordapp.com/attachments/559509927354433551/585683011823992832/ezgif.com-resize.gif")
            ]
        })
    }
}