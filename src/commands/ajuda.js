const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    var comando = '';
    bot.commands.forEach((command) => {
        if (command.ajuda) {
            comando += `** ${process.env.PREFIX} ${command.name}** : ${command.ajuda} \n`;
        }
    }
    );
    const embed = new MessageEmbed()
        .setColor("red")
        .setTitle("Sundance")
        .setAuthor(`Olá ${msg.author.username} `, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
        .setDescription("Cayde-6 me enviou para ajudar você!")
        .setThumbnail("https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif")
        .addField('Comando Executado', 'Ajuda')
        .addFields(
            { name: 'Comando', value: `${comando} \n - FIM DA LISTA - ` }
        )
        .setTimestamp()
        .setFooter(`Perfil do desenvolvedor => https://deganutti.github.io`)
        ;
    msg.channel.send(embed).then(msg => { });
}
module.exports = {
    name: "ajuda",
    execute
}