module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        if (!queue.previousTracks[1]) return message.reply(`Aucune musique n'a été jouée auparavant.`);

        await queue.back();

        message.channel.send(`La musique précédente va être lancée.`);
    },
};