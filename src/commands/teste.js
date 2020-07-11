const MessageEmbed = require("discord.js").MessageEmbed;
const Destiny2API = require('node-destiny-2');
const execute = (bot, msg, args) => {
    var Api = process.env.CHAVE; //Chave da api da BUNGIE

    //cria nova chamada da API
    const destiny = new Destiny2API({
        key: Api
    });

    // |tentativa de retorno de dados do clã ID => 3734152
    // Tentando entender a API...
    destiny.getClanWeeklyRewardState(3734152)
        .then(res => {
            console.log(res);
            valores = JSON.parse(res.Response.rewards);
            valores_1 = JSON.parse(valores[1]);
            /* msg.channel.send(`Retorno status consulta ${res.ErrorStatus}`);
             msg.channel.send(`Retorno ordem ${res.Response.order}`);
             msg.channel.send(`Retorno data final ${res.Response.endDate}`);
             */
            console.log(`Retorno rewards ${valores}`);
            console.log(`Retorno rewards 1 ${valores_1}`);
            console.log('\n\n');
        })
        .catch(err => {
            console.log(`DestinyInventoryItemDefinition Error: ${err}`);
        });




    return msg.channel.send("Guardian. Eyes up! Guardian!");


}
module.exports = {
    name: "teste",
    ajuda: "Teste de API - Destiny-2.",
    execute
}