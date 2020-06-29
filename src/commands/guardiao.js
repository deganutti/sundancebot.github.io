const MessageEmbed = require("discord.js").MessageEmbed;

const execute = (bot, msg, args) => {

    const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Sundance")
        .setAuthor(`${msg.author.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
        .setDescription("Cayde-6 me enviou para ajudar você!")
        .setThumbnail("https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif")
        .addField('Data & hora', '31/12/2020 18:00', `Juntar-se`, true)
        .addField(`Ação`, `Juntar-se ✅`, true)
        .addField(`Ação`, `Criar novo ➕ `, true)
        .addField(`Ação`, `Sair 💢`, true)
        .addFields(
            { name: 'Titulares', value: `${msg.author.username}\n${msg.author.username}\n${msg.author.username}\n${msg.author.username}\n${msg.author.username}` },
            { name: 'Numero de membros: ', value: `${msg.guild.memberCount}` },
        )
        .setImage(`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`)
        .setTimestamp()
        .setFooter(`https://deganutti.github.io`)
        ;


    msg.channel.send(embed).then(msg => {
        msg.react("✅");
        msg.react("💢");
        msg.react("➕");
        bot.on('raw', async dados => {
            if (dados.t !== 'MESSAGE_REACTION_ADD' && dados.t !== 'MESSAGE_REACTION_REMOVE' && user.id === 'someID') return;
            if (dados.d.emoji.name === "✅") {
                msg.channel.send(`Click ✅ ok! ${dados.t}`);
            }
            if (dados.d.emoji.name === "➕") {
                msg.channel.send(`Click ➕ ${dados.t}`);
                if (dados.t == 'MESSAGE_REACTION_ADD') {
                    msg.channel.send(`Olá guardião ${msg.author.username} \n Você está na lista de espera para fazer o pareamento aguarde!`);
                }
                if (dados.t == 'MESSAGE_REACTION_REMOVE') {
                    msg.channel.send(`Olá guardião ${msg.author.username} \n Você saiu da lista de espera!`);
                }
            }
            if (dados.d.emoji.name === "💢") {
                msg.channel.send(`Click 💢 raiva! ${dados.t}`);
            }

        });
    });


}
module.exports = {
    name: "guardiao",
    ajuda: "Consulta o gardião solicitado.",
    execute
}
