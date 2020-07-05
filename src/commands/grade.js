const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    if (args.length === 0) {
        const embed = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setColor(process.env.COR_EMBED)
            .setTitle("Iniciando assistente das grades!")
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
                                        msg.reply(`\`Não há grades criadas para o momento.\``);
                                        msg.reply(`\`Iniciando nova chamada de grade.\``);
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
                                                            //iniciar incursões
                                                            msg.reply(`\`Olá guardião, localizando incurções disponíveis no momento.\``);
                                                            /**
                                                             * Irá listar todas as INCURÇÕES DISPONÍVEIS NO MOMENTO CONFORME ARQUIVO .ENV
                                                             */
                                                            const embed = new MessageEmbed()
                                                                .setAuthor(`${msg.author.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                                                .setColor(process.env.COR_EMBED)
                                                                .setThumbnail("https://braytech.org/static/images/extracts/badges/01E3-00000248.png")
                                                                .setTitle("Nova Incurção")
                                                                .setDescription("Para iniciar nova atividade e importante selecionar qual você necessita.")
                                                                .addFields([
                                                                    { name: process.env.RAID_1, value: '👨‍🚀', inline: true },
                                                                    { name: process.env.RAID_2, value: '👨‍💻', inline: true },
                                                                    { name: process.env.RAID_3, value: '👩🏻‍🔬', inline: true },
                                                                    { name: process.env.RAID_4, value: '👨🏼‍✈️', inline: true },
                                                                    { name: process.env.RAID_5, value: '🚶🏼', inline: true },
                                                                    { name: process.env.RAID_6, value: '🚴🏼‍♀️', inline: true },
                                                                    { name: process.env.RAID_7, value: '🤾🏼', inline: true },
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
                                                                            msg.reply(`\`Olá guardião, incurção ao leviatã.\``);
                                                                            const embed = new MessageEmbed()
                                                                                .setAuthor(`${msg.author.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                                                                .setColor(process.env.COR_EMBED)
                                                                                .setThumbnail("https://braytech.org/static/images/extracts/badges/01E3-00000248.png")
                                                                                .setTitle(process.env.RAID_1)
                                                                                .setDescription("Para iniciar nova atividade e importante selecionar qual você necessita.")
                                                                                .addFields([
                                                                                    { name: "Normal", value: '👨‍🚀', inline: true },
                                                                                    { name: "Prestigio", value: '👨‍💻', inline: true }
                                                                                ]);
                                                                            msg.channel.send({ embed: embed }).then(async (embed) => {
                                                                                await embed.react("👨‍🚀");
                                                                                await embed.react("👨‍💻");

                                                                                const collector = embed.createReactionCollector((reaction, user) =>
                                                                                    [
                                                                                        "👨‍🚀",
                                                                                        "👨‍💻",
                                                                                    ].includes(reaction.emoji.name) && !user.bot,
                                                                                    {
                                                                                        //time: 5000,
                                                                                    }
                                                                                );
                                                                                collector.on("collect", (reaction, user) => {
                                                                                    switch (reaction.emoji.name) {
                                                                                        case "👨‍🚀":
                                                                                            msg.reply(`\`Normal.  ${msg.author.id}\``);
                                                                                            /**
                                                                                             * Criar interação de texto com o bot
                                                                                             */
                                                                                            var usuario = msg.author.id;
                                                                                            var id_incurcao = 1;

                                                                                            msg.reply(`\`Informe da data que necessita da incurção Ex: 01/01/2000\``);
                                                                                            var data_hora = msg.mentions.members.first();
                                                                                            time: 10000;
                                                                                            msg.reply(`${data_hora}`)



                                                                                            break;
                                                                                        case "👨‍💻":
                                                                                            msg.reply(`\`Prestigio.\``);

                                                                                            break;

                                                                                    }
                                                                                });
                                                                            });
                                                                            break;

                                                                    }
                                                                });
                                                            });

                                                        } catch (error) {
                                                            console.error("Error " + error);
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
                                                            console.error("Error " + error);
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
                                //console.log("Ação -> " + reaction.emoji.name);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "🌀":
                            try {
                                msg.channel.send("/classe");
                                console.log("Ação -> " + reaction.emoji.name);
                            } catch (error) {
                                console.error("Error " + error);
                            }
                            break;
                        case "❌":
                            try {

                                console.log("Ação -> " + reaction.emoji.name);
                            } catch (error) {
                                console.error("Error " + error);
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