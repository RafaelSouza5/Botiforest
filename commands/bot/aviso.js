const Discord = require('discord.js')

module.exports = {
    name: 'aviso',
    aliases: [''],


    run: async (client, message, args) => {

        message.reply({
            embeds : [new Discord.MessageEmbed()
                .setTitle(`Meus comandos são:`)
                .setDescription(
                    `» \`!aviso\` (msg) - Manda um aviso a todos do seu servidor.\n\n` +
                    `» \`!avisoembed\` | titulo | descrição | link de foto ou gif |\n` +
                    `Manda um aviso em embed a todos do seu servidor.\n` +
                    `\`Exemplo:\` [Clique aqui](http://prntscr.com/o8pluq)\n` +
                    `Obs: não tire os separadores |\n\n` +
                    `» \`!cc\` - Cria um convite permanente do servidor.\n\n` +
                    `» \`!lock\` e \`>unlock\` - Tranca e destranca o chat.\n\n` +
                    `» \`!ping\` - Mostra o ping do bot.\n\n` +
                    `» \`!convite\` - Mostra o meu convite.`
                )
                .setThumbnail(client.user.avatarURL)
                .setColor("BLACK")
                .setTimestamp()]
        })
    }
}