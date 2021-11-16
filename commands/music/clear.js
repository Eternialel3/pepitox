module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        if (!queue.tracks[0]) return message.reply(`Il n'y a plus de musique après celle actuellement jouée.`);

        await queue.clear();

        message.channel.send(`La queue a été effacée.`);
    },
};