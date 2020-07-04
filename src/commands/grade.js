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
        const retorno = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setColor(process.env.COR_EMBED)
            .setTitle("Iniciando assistente desafio de Osiris!")
            .setDescription("Selecione a opção desejada")
            .addFields([
                { name: "Listar Grades Criadas", value: "💠" },
                { name: "Nova Grade", value: "🌀" },
                { name: "Sair", value: "❌" }
            ]);
        msg.member.send({ embed }).then(async (embed) => {
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
                                    msg.member.send({ retorno }).then(async (retorno) => {
                                         
                                    });
                                } catch (error) {

                                }

                                /**
                                 * Lista as grades encontradas e seus codigos
                                 * traz a informação de quem esta mantendo
                                 * apenas no click sem tempo para expirar
                                 */
                                msg.member.send(`\`Listando grade encontradas\``);
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