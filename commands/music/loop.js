const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.reply(`Tu dois d'abord désactiver la loop de la musique (${client.config.app.px}loop).`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.reply(success ? `La loop de la queue est **${queue.repeatMode === 0 ? 'activée' : 'désactivée'}**.` : `Quelque chose s'est mal passée.`);
        } else {
            if (queue.repeatMode === 2) return message.reply(`Tu dois d'abord désactiver la loop de la queue (${client.config.app.px}loop queue).`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.reply(success ? `La loop de la musique est **${queue.repeatMode === 0 ? 'activée' : 'désactivée'}**. Pour répéter la queue entière utilisez (-loop queue).` : `Quelque chose s'est mal passée.`);
        };
    },
};