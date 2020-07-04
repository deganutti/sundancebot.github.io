const MessageEmbed = require("discord.js").MessageEmbed;


const { MessageAttachment } = require("discord.js");

const execute = (bot, msg, args) => {

    if (args.length === 0) {
        const embed = new MessageEmbed()
            .setAuthor(`Sundance`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
            .setThumbnail("https://www.bungie.net/common/destiny2_content/icons/dbc5231e6b09e3d05d261549b4b094d4.png")
            .setColor(process.env.COR_EMBED)
            .setTitle("Guardião os titulos que estão disponiveis são!")
            .setDescription("Veja quais você ainda não obteve e selecione.")
            .addFields([
                { name: process.env.SELO_1, value: process.env.IMG_1, inline: true },
                { name: process.env.SELO_2, value: process.env.IMG_2, inline: true },
                { name: process.env.SELO_3, value: process.env.IMG_3, inline: true },
                { name: process.env.SELO_4, value: process.env.IMG_4, inline: true },
                { name: process.env.SELO_5, value: process.env.IMG_5, inline: true },
                { name: process.env.SELO_6, value: process.env.IMG_6, inline: true },
                { name: process.env.SELO_7, value: process.env.IMG_7, inline: true },
                { name: process.env.SELO_8, value: process.env.IMG_8, inline: true },
                { name: process.env.SELO_9, value: process.env.IMG_9, inline: true },
                { name: process.env.SELO_10, value: process.env.IMG_10, inline: true },
                { name: process.env.SELO_11, value: process.env.IMG_11, inline: true },
                { name: process.env.SELO_12, value: process.env.IMG_12, inline: true },
                { name: process.env.SELO_13, value: process.env.IMG_13, inline: true },
                { name: process.env.SELO_14, value: process.env.IMG_14, inline: true },
                { name: process.env.SELO_15, value: process.env.IMG_15, inline: true },
            ])
            ;
        msg.member.send({ embed }).then(async (embed) => {
            try {
                await embed.react(process.env.IMG_1);
                await embed.react(process.env.IMG_2);
                await embed.react(process.env.IMG_3);
                await embed.react(process.env.IMG_4);
                await embed.react(process.env.IMG_5);
                await embed.react(process.env.IMG_6);
                await embed.react(process.env.IMG_7);
                await embed.react(process.env.IMG_8);
                await embed.react(process.env.IMG_9);
                await embed.react(process.env.IMG_10);
                await embed.react(process.env.IMG_11);
                await embed.react(process.env.IMG_12);
                await embed.react(process.env.IMG_13);
                await embed.react(process.env.IMG_14);
                await embed.react(process.env.IMG_15);
                const collector = embed.createReactionCollector((reaction, user) =>
                    [
                        process.env.IMG_1,
                        process.env.IMG_2,
                        process.env.IMG_3,
                        process.env.IMG_4,
                        process.env.IMG_5,
                        process.env.IMG_6,
                        process.env.IMG_7,
                        process.env.IMG_8,
                        process.env.IMG_9,
                        process.env.IMG_10,
                        process.env.IMG_11,
                        process.env.IMG_12,
                        process.env.IMG_13,
                        process.env.IMG_14,
                        process.env.IMG_15,

                    ].includes(reaction.emoji.name) && !user.bot,
                    {
                        //time: 2000,
                    }
                );
                collector.on("collect", (reaction, user) => {
                    switch (reaction.emoji.name) {
                        case process.env.IMG_1:
                            try {
                                // const selo = "";
                                const imagem = new MessageAttachment(__dirname + "/imgs/impecavel.png");
                                // msg.channel.send(imagem);

                                const selo = new MessageEmbed()
                                    .setAuthor(`${msg.author.username}`, "https://i.pinimg.com/originals/40/8a/38/408a38dcd7a86586ac5eb1283e9910e2.gif", "https://deganutti.github.io")
                                    .setColor(process.env.COR_EMBED)
                                    .setThumbnail("https://braytech.org/static/images/extracts/badges/0912-0F4C.png")
                                    .setTitle("Impecável")
                                    .setDescription("Complete todos os triunfos impecáveis da Temporada!")
                                    .addFields([
                                        { name: "Discípulo Veterano", value: '1/1' },
                                        { name: "Confiança em alta", value: '0/1' },
                                        { name: "Porto Seguro", value: '1/1.' },
                                        { name: "Guardião do Farol", value: '5/10' },
                                        { name: "Esse é o Caminho", value: '4/4' },

                                    ]);
                                msg.member.send(selo);

                                console.log("Selo selecionado ../../impecavel.png " + imagem);
                            } catch (error) {
                                console.error("Error " + error);
                            }
                            break;
                    }
                })
            } catch (e) {
                console.error("Atenção => Erro encontrado " + e);
            }
        });
    } else {
        if (!msg.member.hasPermission("MANAGE_ROLES")) return msg.reply("Guardião, \n O viajante não lhe deu a luz para isso!");
        console.log(args);

        const [mention, roleArg] = args;

        const guardiao = msg.mentions.members.first();
        if (!guardiao) return msg.reply(`Guardião, e necessário informar quem irá receber o cargo.`);

        if (!roleArg) return msg.reply(`Olá guardião, você precisa escolher um cargo!`);

        const role = msg.guild.roles.cache.find((r) => (r.name == roleArg));
        if (!role) return msg.reply(`Guadião, cargo solicitado não localizado! \`${roleArg}\``);

        guardiao.roles.add(role);
    }
    //  msg.channel.bulkDelete(1);

    msg.channel.bulkDelete(1);
}
module.exports = {
    name: "selos",
    ajuda: `Gerenciamento de classe do BOT`,
    execute
} 