const Discord = require("discord.js");


const execute = (bot, msg, args) => {
    try {
        if (!msg.member.hasPermission("MENAGE_MESSAGES")) {
            return msg.reply("Guardião, você não pode apagar as mensagens da sala.");
        }
        const deleteCount = parseInt(args[0]);
        if (!deleteCount || deleteCount < 1 || deleteCount > 99) {
            return msg.reply("Informe uma quantidade entre 1 e 99");
        }
        msg.channel.bulkDelete(deleteCount + 1);
        msg.channel.send(`mensagens excluidas com sucesso ${args[0]} .`);
    } catch (error) {
        console.error(error);
    }
    msg.channel.bulkDelete(1);

}
module.exports = {
    name: "del",
    ajuda: `{ha um erro devido a virificação em duas etapas - verificar.} Deleta mensagens do canal em questão! Ex: ${process.env.PREFIX}del 99`,
    execute
}