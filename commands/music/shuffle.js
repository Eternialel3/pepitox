module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        if (!queue.tracks[0]) return message.reply(`Aucune musique n'est jouée après celle actuelle.`);

        await queue.shuffle();

        return message.channel.send(`**${queue.tracks.length}** musiques vont se jouer de manière aléatoire !`);
    },
};