const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    if (args.length === 0) {
        const embed = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setColor(process.env.COR_EMBED)
            .setTitle("Iniciando assistente desafio de Osiris!")
            .setDescription("Selecione a opção desejada")
            .addFields([
                { name: "Listar Grades Criadas", value: "💠" },
                { name: "Nova Grade", value: "🌀" },
                { name: "Sair", value: "❌" }
            ]);

        msg.channel.send({ embed }).then(async (embed) => {
            try {

                await embed.react("💠");
                await embed.react("🌀");
                await embed.react("❌");
                const collector = embed.createReactionCollector((reaction, user) =>
                    [
                        "💠",
                        "🌀",
                        "❌",
                    ].includes(reaction.emoji.name) && !user.bot,
                    {
                        //time: 5000,
                    }
                );
                collector.on("collect", (reaction, user) => {
                    switch (reaction.emoji.name) {
                        case "💠":
                            try {
                                try {
                                    var grades = 0;
                                    if (grades == 0) {
                                        msg.channel.send(`\`Não há grades criadas para o momento.\``);
                                        msg.channel.send(`\`Iniciando nova chamada de grade.\``);
                                        const embed = new MessageEmbed()
                                            .setAuthor(`${msg.author.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                            .setColor(process.env.COR_EMBED)
                                            .setThumbnail("https://braytech.org/static/images/extracts/badges/01E3-00000248.png")
                                            .setTitle("Nova Grade")
                                            .setDescription("Para iniciar nova atividade e importante selecionar qual você necessita.")
                                            .addFields([
                                                { name: "Incursões", value: '👨‍🚀', inline: true },
                                                { name: "Atividades", value: '👨‍💻', inline: true },
                                                { name: "Masmorras", value: '👩🏻‍🔬', inline: true },
                                                { name: "Missões", value: '👨🏼‍✈️', inline: true },
                                                { name: "Campanha", value: '🚶🏼', inline: true },
                                                { name: "Patrulha", value: '🚴🏼‍♀️', inline: true },
                                                { name: "Atividades", value: '🤾🏼', inline: true },
                                            ]);
                                        msg.channel.send({ embed: embed }).then(async (embed) => {

                                            await embed.react("👨‍🚀");
                                            await embed.react("👨‍💻");
                                            await embed.react("👩🏻‍🔬");
                                            await embed.react("👨🏼‍✈️");
                                            await embed.react("🚶🏼");
                                            await embed.react("🚴🏼‍♀️");
                                            await embed.react("🤾🏼");

                                            const collector = embed.createReactionCollector((reaction, user) =>
                                                [
                                                    "👨‍🚀",
                                                    "👨‍💻",
                                                    "👩🏻‍🔬",
                                                    "👨🏼‍✈️",
                                                    "🚶🏼",
                                                    "🚴🏼‍♀️",
                                                    "🤾🏼",
                                                ].includes(reaction.emoji.name) && !user.bot,
                                                {
                                                    //time: 5000,
                                                }
                                            );
                                            collector.on("collect", (reaction, user) => {
                                                switch (reaction.emoji.name) {
                                                    case "👨‍🚀":
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
                                            });
                                        });
                                    } else {

                                    }



                                } catch (error) {

                                }

                                /**
                                 * Lista as grades encontradas e seus codigos
                                 * traz a informação de quem esta mantendo
                                 * apenas no click sem tempo para expirar
                                 */
                                console.log("Ação -> " + reaction.emoji.name);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "🌀":
                            try {

                                console.log("Ação -> " + reaction.emoji.name);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "❌":
                            try {

                                console.log("Ação -> " + reaction.emoji.name);
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
        msg.channel.bulkDelete(1);
    }
}
module.exports = {
    name: "grade",
    ajuda: "Faz a manutenção da Grade referente ao Destiny 2.",
    execute
}