const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.reply(`Le temps indiqué est supérieur au temps de durée de la musique.`);

        await queue.seek(timeToMS);

        message.channel.send(`Musique mise à **${ms(timeToMS, { long: true })}**.`);
    },
};