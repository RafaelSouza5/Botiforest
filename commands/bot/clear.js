const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['c'],


    run: async (client, message, args) => {

        if (!args[0]) return message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription('\`\`\`!clear 1 a 99\`\`\`')
            ]
        }).then((msg) => {
            setTimeout(() => {
                message.delete()
                msg.delete()
            }, 20000);
        });

        if (args[0] > 99) return message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setDescription('\`\`\`!clear 1 a 99\`\`\`')
            ]
        }).then((msg) => {
            setTimeout(() => {
                message.delete()
                msg.delete()
            }, 20000);
        }); 

        let totallydel = parseInt(args[0]) + 1;
        let eraseds = totallydel - 1;

        try {
            console.log('deletou')
            message.delete()
            message.channel.bulkDelete(totallydel);
            message.channel.send(`\`${eraseds <= 1 ? `${eraseds} Mensagem Apagada.` : `${eraseds} Mensagens Apagadas.`}\``).then((msg) => {
                setTimeout(() => {
                    msg.delete()
                }, 30000);
            });
        } catch (error) {
            return message.channel.send(`\`❌ Error ❌\``)
        }
        }
    }