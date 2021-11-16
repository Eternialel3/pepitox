module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        message.author.send(`Tu as demandé la musique **${queue.current.title} | ${queue.current.author}** du serveur **${message.guild.name}**.`).then(() => {
            message.reply(`Je t'ai envoyé la musique.`);
        }).catch(error => {
            message.reply(`Je ne peux pas t'envoyer la musique.`);
        });
    },
};