module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `${queue.current.title} a été mis en pause.` : `Quelque chose s'est mal passée.`);
    },
};