const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {


    msg.channel.send(`Olá! ${msg.author.roles}`);


}
module.exports = {
    name: "cargo",
    ajuda: `Ajusta o cargo desejado`,
    execute
} 