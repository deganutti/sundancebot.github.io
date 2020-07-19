const MessageEmbed = require("discord.js").MessageEmbed;
const execute = (bot, msg, args) => {

    msg.channel.send("Informe o dia: ")
        .then(function () {
            msg.channel.awaitMessages(response => msg.content, {
                max: 1,
                time: 300000000,
                errors: ["time"],
            })
                .then((collected) => {
                    msg.channel.send(`O dia será: ${collected.first().content}`);
                    var dia = collected.first().content;
                    msg.channel.send("informe a hora ")
                        .then(function () {
                            msg.channel.awaitMessages(response => msg.content, {
                                max: 1,
                                time: 300000000,
                                errors: ["time"],
                            })
                                .then((collected) => {
                                    msg.channel.send(`será as: ${collected.first().content}`);
                                    var horas = collected.first().content;
                                    msg.channel.send(`Raid maracada para o dia : ${dia} às ${horas}`);

                                })
                                .catch(function () {
                                    msg.channel.send("É necessário informar uma hora");
                                });
                        });
                })
                .catch(function () {
                    msg.channel.send("É necessário informar um dia.");
                });
        });

}
module.exports = {
    name: "auto",
    execute
}