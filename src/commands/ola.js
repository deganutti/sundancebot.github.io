const execute = (bot, msg, args) => {
    return msg.channel.send("Guardian. Eyes up! Guardian!");
}
module.exports = {
    name: "ola",
    ajuda: "Apenas um oi do fantasma",
    execute,
}