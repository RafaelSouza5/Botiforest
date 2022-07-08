const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
client.config = require('./config.js');
const fs = require("fs");
const { Client, Intents } = require('discord.js');

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync('./commands/');

client.on('ready', async () => {

    console.log("Tudo Certo!")
    
    let activities = [
        `CANAL : SHIRO EDITS`,
        `${client.users.cache.size} USUÁRIOS NO SERVIDOR`,
        `ACESSE : https://exitcheat.tk/`
    ]
    c = 0;
    setInterval(() => client.user.setActivity(`${activities[c++ % activities.length]}`,{
        type: "PLAYING",
    }), 5000);
})

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for (let file of comandos) {
        let puxar = require(`./commands/${local}/${file}`)

        if (puxar.name) {
            client.commands.set(puxar.name, puxar)
        }
        if (puxar.aliases && Array.isArray(puxar.aliases))
            puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    }
});

client.login(client.config.app.token);

client.on('messageCreate', message => {

    const prefix = client.config.app.prefix;

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;

    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

    if (!message.content.startsWith(prefix)) return;
    const args = message.content
        .trim().slice(prefix.length)
        .split(/ +/g);

    let cmd = args.shift().toLowerCase()
    if (cmd.length === 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd))

    try {
        command.run(client, message, args)
    } catch (err) {
        message.delete()
        message.channel.send(`**\`\`\`❌ [ERROR]! Comando não existe ❌ \`\`\`**`).then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 8000);
        })
        console.error('Erro:' + err);
        console.log(`Tentativa do comando ${prefix}${cmd}.\nUsuário:${message.member.displayName} (${message.author.id})`)
    }
});

// client.on("ready", () => {

//    let channel = client.channels.cache.get("973052951037870170");

//   const connection = joinVoiceChannel({
//        channelId: channel.id,
//        guildId: channel.guild.id,
//        adapterCreator: channel.guild.voiceAdapterCreator,
//    })
//    console.log(`Entrei no canal ${channel.name}`)
// });

console.log(`sheik é gay`);

client.on("voiceStateUpdate", async (oldChannel, newChannel) => {
    let name = "Criar canal de rec";

    if (oldChannel.channel || newChannel.channel || !oldChannel.channel || !newChannel.channel) { // Verificação do bot quando usuario entra ou sai da call
        if (!oldChannel.channel && newChannel.channel) { // Verificando quando o usuario entra em uma call

            if (newChannel.channel.name === name) { // Verificando o nome do canal

                await newChannel.channel.guild.channels.create(`REC ON`, {
                    type: "GUILD_VOICE", permissionOverwrites: [
                        {
                            id: newChannel.id,
                            allow: "MANAGE_CHANNELS",
                            allow: "MANAGE_ROLES",
                        }
                    ]
                }).then(channel => {
                    newChannel.setChannel(channel.id);
                });
            }
        } else if (!newChannel.channel) { // Verificando quando o usuario sai de uma call
            if (oldChannel.channel.name === `REC ON`) {

                oldChannel.channel.delete() // Deletando a call

            }

        }

    }

})

process.on('multipleResolves', (type, reason, promise) => {
    console.log(' Erro Detectado: ' + type, promise, reason)
});
process.on('unhandRejection', (reason, promise) => {
    console.log(' Erro Detectado: ' + promise, reason)
});
process.on('uncaughtException', (error, origin) => {
    console.log(' Erro Detectado: ' + error, origin)
});
process.on('uncaughtExceptionMonitor', (reason, promise) => {
    console.log(' Erro Detectado: ' + promise, reason)
});
