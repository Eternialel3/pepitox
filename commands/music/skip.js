module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const success = queue.skip();

        return message.channel.send(success ? `**${queue.current.title}** a été skip.` : `Quelque chose s'est mal passée.`);
    },
};