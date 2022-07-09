const Discord = require('discord.js');

module.exports = {
    name: 'setreact',
    aliases: [''],


    run: async (client, message, args) => {

        if (!message.member.permissions.has("ADMINISTRATOR")) {

            message.reply("\` ❌ Você não tem permissão para usar este comando ❌ \`").then(msg => {
                setTimeout(() => {
                    message.delete()
                    msg.delete()
                }, 20000);
            })

        } else {

            let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

            if (!channel) {

                message.reply({
                    embeds: [new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(`\`!setreact [canal]\``)
                    ]
                });
            } else {
                message.reply(`O canal ${channel} foi configurado.`);
                channel.send({
                    embeds: [new Discord.MessageEmbed()
                        .setColor('RED')
                        .setDescription('Clique na reação para ser registrado')

                    ]
                }).then(msg => {
                    msg.react('✅')
                });
            }

        }

        client.on('messageReactionAdd', async (reaction, user) => {
            if (!user.bot) {

                if (reaction.emoji.name == '✅') {

                    const role = reaction.message.guild.roles.cache.find(r => r.id === '994644827117461655');

                    const { guild } = reaction.message

                    const member = guild.members.cache.find(member => member.id === user.id);

                    member.roles.add(role)

                }

            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            const role = reaction.message.guild.roles.cache.find(r => r.id === '994644827117461655');

            const { guild } = reaction.message

            const member = guild.members.cache.find(member => member.id === user.id);

            member.roles.remove(role)
        });
    }
}