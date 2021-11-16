module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `${queue.current.title} a repris` : `Quelque chose s'est mal passée.`);
    },
};