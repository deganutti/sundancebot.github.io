const MessageEmbed = require("discord.js").MessageEmbed;

const arquivo = require("dotenv"); //biblioteca de configuração de acesso ao servidor
const fs = require("fs");
const path = require("path");

const execute = (bot, msg, args) => {

    if (args.length === 0) {
        const embed = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setColor(process.env.COR_EMBED)
            .setTitle("Guardião / Guardiã, escolha sua classe !")
            .setDescription("Conforme você possuí dentro de Destiny")
            .addFields([
                { name: process.env.NIVEL_1, value: "🧙🏽", inline: true },
                { name: process.env.NIVEL_2, value: "👩🏼‍🦳", inline: true },
                { name: process.env.NIVEL_3, value: "🔰", inline: true }
            ])
            ;
        msg.member.send({ embed }).then(async (embed) => {
            try {
                await embed.react("🧙🏽");
                await embed.react("👩🏼‍🦳");
                await embed.react("🔰");
                const collector = embed.createReactionCollector((reaction, user) =>
                    [
                        "🧙🏽",
                        "👩🏼‍🦳",
                        "🔰",
                    ].includes(reaction.emoji.name) && !user.bot,
                    {
                        time: 2000,
                    }
                );
                collector.on("collect", (reaction, user) => {
                    switch (reaction.emoji.name) {
                        case "🧙🏽":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === process.env.NIVEL_1);
                                if (role) msg.member.roles.add(role);
                                //  msg.member.send(r.name);
                                console.log("novo cargo " + role);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "👩🏼‍🦳":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === process.env.NIVEL_2);
                                if (role) msg.member.roles.add(role);
                                // msg.member.send(r.name);
                                console.log("novo cargo " + role);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "🔰":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === process.env.NIVEL_3);
                                if (role) msg.member.roles.add(role);
                                // msg.member.send(r.name);
                                console.log("novo cargo " + role);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                    }
                })
            } catch (e) {
                console.error("Atenção => Erro encontrado " + e);
            }
        });
    } else {
        if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply("Guardião, \n O viajante não lhe deu a luz para isso!");
        console.log(args);

        const [mention, roleArg] = args;

        const guardiao = msg.mentions.members.first();
        if (!guardiao) return msg.reply(`Guardião, e necessário informar quem irá receber o cargo.`);

        if (!roleArg) return msg.reply(`Olá guardião, você precisa escolher um cargo!`);

        const role = msg.guild.roles.cache.find((r) => (r.name == roleArg));
        if (!role) return msg.reply(`Guadião, cargo solicitado não localizado! \`${roleArg}\``);

        guardiao.roles.add(role);
    }
    //  msg.channel.bulkDelete(1);
}
module.exports = {
    name: "selos",
    ajuda: `Gerenciamento de classe do BOT`,
    execute
} 