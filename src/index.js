const Discord = require("discord.js");
const arquivo = require("dotenv"); //biblioteca de configuração de acesso ao servidor
const fs = require("fs");
const path = require("path");
const Destiny2API = require('node-destiny-2');

const MessageEmbed = require("discord.js").MessageEmbed;

arquivo.config(); //abre arquivo

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const destiny = new Destiny2API({
    key: bot.login.CHAVE,
    oauthConfg: {
        id: bot.login.CLIENT_ID,
        secret: ''
    }
});

//destiny2
destiny.getManifest()
    .then(res => console.log(`Manifest: ${res.Response}`))
    .catch(err => console.log(`Error: ${err}`));

//lê os arquivos js
const commandFiles = fs.readdirSync(path.join(__dirname, "/commands")).filter((filename) => filename.endsWith(".js"));

//varre os arquivos js para verificar os comandos
for (var filename of commandFiles) {
    const command = require(`./commands/${filename}`);
    bot.commands.set(command.name, command);
}

bot.login(process.env.TOKEN);

bot.on("ready", () => {
    console.log(`${bot.user.username} ON-LINE!`);
});

bot.on("message", (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;
    const args = msg.content.slice(process.env.PREFIX.length).split(" ");
    const command = args.shift().toLowerCase();//converte todos os caracteres para minusculo evita erros
    try {
        bot.commands.get(command).execute(bot, msg, args);
    } catch (e) {
        console.error(e);
        process.on('UnhandledPromiseRejection', error => {
            console.error('Erro ao executar comando:', error);
        });
        return msg.reply("Guardião, não posso executar tal comando! \n" + command);
    }
});
//quando um novo membro adentra ao servidor
bot.on("guildMemberAdd", member => {
    const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Sundance")
        .setAuthor(`${member.user.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
        .setDescription("Cayde-6 me enviou para ajudar você!")
        .setThumbnail("https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif")
        .addFields(
            { name: 'Novo Guardião', value: `${member.user.username}` },
            { name: 'bip!', value: `Guardião, olhe para cima guardião!` }
        )
        .setTimestamp()
        .setFooter(`https://deganutti.github.io`)
        ;
    member.guild.channels.cache.get('575771588298014732').send(embed).then(msg => { });
});
//quando um membro sai do servidor
bot.on("guildMemberRemove", member => {
    const embed = new MessageEmbed()
        .setColor("RED")
        .setTitle("Sundance")
        .setAuthor(`${member.user.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
        .setDescription("Cayde-6 me enviou para ajudar você!")
        .setThumbnail("https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif")
        .addFields(
            { name: 'Adeus Guardião', value: `${member.user.username}` },
            { name: 'bip!', value: `Guardião caido, sua luz se extiguil!` }
        )
        .setTimestamp()
        .setFooter(`https://deganutti.github.io`)
        ;
    member.guild.channels.cache.get('575771588298014732').send(embed).then(msg => { });
});
bot.on('raw', async dados => {
    if (dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") {
        return;
    }
    if (dados.d.message_id != "id_da_nsg") {
        return;
    }
});






console.log(bot.commands);