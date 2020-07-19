const MessageEmbed = require("discord.js").MessageEmbed;
const discord = require("discord.js");

const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()
        .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
        .setColor(process.env.COR_EMBED)
        .setTitle("Olá guardião, aqui estão os desejos da raid ULTIMO DESEJO!")
        .setDescription("Há 14 desejos possíveis a serem ecolhidos!")
        .addFields([
            { name: process.env.DESEJO_1, value: process.env.IMG_1, inline: true },
            { name: process.env.DESEJO_2, value: process.env.IMG_2, inline: true },
            { name: process.env.DESEJO_3, value: process.env.IMG_3, inline: true },
            { name: process.env.DESEJO_4, value: process.env.IMG_4, inline: true },
            { name: process.env.DESEJO_5, value: process.env.IMG_5, inline: true },
            { name: process.env.DESEJO_6, value: process.env.IMG_6, inline: true },
            { name: process.env.DESEJO_7, value: process.env.IMG_7, inline: true },
            { name: process.env.DESEJO_8, value: process.env.IMG_8, inline: true },
            { name: process.env.DESEJO_9, value: process.env.IMG_9, inline: true },
            { name: process.env.DESEJO_10, value: process.env.IMG_10, inline: true },
            { name: process.env.DESEJO_11, value: process.env.IMG_11, inline: true },
            { name: process.env.DESEJO_12, value: process.env.IMG_12, inline: true },
            { name: process.env.DESEJO_13, value: process.env.IMG_13, inline: true },
            { name: process.env.DESEJO_14, value: process.env.IMG_14, inline: true },
            { name: process.env.DESEJO_15, value: process.env.IMG_15, inline: true }
        ])
        ;
    msg.channel.send({ embed: embed }).then(async (embed) => {
        try {
            await embed.react(process.env.IMG_1);
            await embed.react(process.env.IMG_2);
            await embed.react(process.env.IMG_3);
            await embed.react(process.env.IMG_4);
            await embed.react(process.env.IMG_5);
            await embed.react(process.env.IMG_6);
            await embed.react(process.env.IMG_7);
            await embed.react(process.env.IMG_8);
            await embed.react(process.env.IMG_9);
            await embed.react(process.env.IMG_10);
            await embed.react(process.env.IMG_11);
            await embed.react(process.env.IMG_12);
            await embed.react(process.env.IMG_13);
            await embed.react(process.env.IMG_14);
            await embed.react(process.env.IMG_15);
            const collector = embed.createReactionCollector((reaction, user) =>
                [
                    process.env.IMG_1,
                    process.env.IMG_2,
                    process.env.IMG_3,
                    process.env.IMG_4,
                    process.env.IMG_5,
                    process.env.IMG_6,
                    process.env.IMG_7,
                    process.env.IMG_8,
                    process.env.IMG_9,
                    process.env.IMG_10,
                    process.env.IMG_11,
                    process.env.IMG_12,
                    process.env.IMG_13,
                    process.env.IMG_14,
                    process.env.IMG_15,
                ].includes(reaction.emoji.name) && !user.bot,
                {
                    //time: 2000,
                }
            );
            collector.on("collect", (reaction, user) => {
                switch (reaction.emoji.name) {
                    case process.env.IMG_1:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o primeiro desejo!")
                                .setDescription(process.env.DESCRICAO_1)
                                .setImage('https://i.imgur.com/eKatQiN.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }

                        break;
                    case process.env.IMG_2:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o segundo desejo!")
                                .setDescription(process.env.DESCRICAO_2)
                                .setImage('https://i.imgur.com/LfTug2x.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_3:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o terceiro desejo!")
                                .setDescription(process.env.DESCRICAO_3)
                                .setImage('https://i.imgur.com/vx42sRf.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_4:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o quarto desejo!")
                                .setDescription(process.env.DESCRICAO_4)
                                .setImage('https://i.imgur.com/sAMe10Z.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_5:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o quinto desejo!")
                                .setDescription(process.env.DESCRICAO_5)
                                .setImage('https://i.imgur.com/VKgQbHG.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_6:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o sexto desejo!")
                                .setDescription(process.env.DESCRICAO_6)
                                .setImage('https://i.imgur.com/qhBVOC9.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_7:
                        try {
                            const embed = new MessageEmbed()
                                .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                .setThumbnail('https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif')
                                .setColor(process.env.COR_EMBED)
                                .setTitle("Olá guardião, este e o sétimo desejo!")
                                .setDescription(process.env.DESCRICAO_7)
                                .setImage('https://i.imgur.com/LLe0SNf.png')
                                .setTimestamp()
                                .setFooter(`Desenvolvido e mantido por https://deganutti.github.io`);
                            msg.channel.send({ embed: embed });
                        } catch (error) {
                            console.error(error);
                        }
                        break;
                    case process.env.IMG_8:
                        break;
                    case process.env.IMG_9:
                        break;
                    case process.env.IMG_10:
                        break;
                    case process.env.IMG_11:
                        break;
                    case process.env.IMG_12:
                        break;
                    case process.env.IMG_13:
                        break;
                    case process.env.IMG_14:
                        break;
                    case process.env.IMG_15:
                        break;
                }
            })
        } catch (e) {
            console.error("Atenção => Erro encontrado " + e);
        }
    });

}
module.exports = {
    name: "desejos",
    ajuda: `Gerenciamento de classe do BOT`,
    execute
} 