const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply("Guardião, \n O viajante não lhe deu a luz para isso!");
    console.log(args);

    const [mention, roleArg] = args;

    const guardiao = msg.mentions.members.first();
    if (!guardiao) return msg.reply(`Guardião, e necessário informar quem irá receber o cargo.`);

    if (!roleArg) return msg.reply("Olá guardião, você precisa escolher um cargo!");

    const role = msg.guild.roles.cache.find((r) => (r.name == roleArg));
    if (!role) return msg.reply(`Guadião, cargo solicitado não localizado! \`${roleArg}\``);

    guardiao.roles.add(role);

    msg.channel.bulkDelete(1);

}
module.exports = {
    name: "cargo",
    ajuda: `Gerenciamento de cargo do BOT`,
    execute
} 
