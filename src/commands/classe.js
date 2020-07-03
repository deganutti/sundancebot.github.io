const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    if (args.length === 0) {
        const embed = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setColor("RED")
            .setTitle("Guardião / Guardiã, escolha sua classe !")
            .setDescription("Conforme você possuí dentro de Destiny")
            .addFields([
                { name: "Arcano(a)", value: "🧙🏽", inline: true },
                { name: "Caçador(a)", value: "🔫", inline: true },
                { name: "Titã", value: "🛡", inline: true }
            ])
            ;
        msg.member.send({ embed }).then(async (embed) => {
            try {
                await embed.react("🧙🏽");
                await embed.react("🔫");
                await embed.react("🛡");
                const collector = embed.createReactionCollector((reaction, user) =>
                    [
                        "🧙🏽",
                        "🔫",
                        "🛡",
                    ].includes(reaction.emoji.name) && !user.bot,
                    {
                        time: 2000,
                    }
                );
                collector.on("collect", (reaction, user) => {
                    switch (reaction.emoji.name) {
                        case "🧙🏽":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === "Arcano");
                                if (role) msg.member.roles.add(role);
                                console.log("novo cargo " + role);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "🔫":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === "Caçador");
                                if (role) msg.member.roles.add(role);
                                console.log("novo cargo " + role);
                            } catch (error) {
                                console.error("Error " + e);
                            }
                            break;
                        case "🛡":
                            try {
                                const role = msg.guild.roles.cache.find(r => r.name === "Titã");
                                if (role) msg.member.roles.add(role);
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
    }
    msg.channel.bulkDelete(1);
}
module.exports = {
    name: "classe",
    ajuda: `Gerenciamento de classe do BOT`,
    execute
} 