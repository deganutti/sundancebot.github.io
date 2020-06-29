const Discord = require("discord.js");

const execute = (bot, msg, args) => {

    var guardiao = msg.mentions.members.first();
    if (!guardiao) {
        return msg.reply(`Informe um guardião a ser banido Ex: ${process.env.PREFIX}ban @guardiao [motivo]`);
    }
    if (guardiao === msg.member) {
        return msg.reply(`Olá, você não pode se auto-banir!`);
    }
    if (!msg.member.hasPermission("BAN_MEMBERS")) {
        return msg.reply("Você precisa de permissão para banir membros.");
    }

    msg.channel.send(`Banimento realmente e necessario para o guardião ${guardiao}?`).then(msg => {

        msg.react("✔");

        let filtro = (reaction, usuario) => reaction.emoji.name === "✔" && usuario.id === msg.author.id;

        const coletor = msg.createReactionCollector(filtro, { max: 1 });

        coletor.on("collect", cp => {
            cp.remove(msg.author.id);
            msg.channel.send(`**Membro - PUNIDO**\n\nGuardião \´${guardiao.user.username}\´`);
            guardiao.ban();
        })
    });

}
module.exports = {
    name: "ban",
    ajuda: `Expulsa um usuário do discord. Ex: ${process.env.PREFIX}ban @guardiao`,
    execute
}