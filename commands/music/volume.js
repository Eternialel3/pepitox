const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const vol = parseInt(args[0]);

        if (!vol) return message.reply(`Le volume actuel est ${queue.volume} 🔊\n*Pour changer le volume, écris un nombre entre **1** et **${maxVol}**.*`);

        if (queue.volume === vol) return message.reply(`Le volume actuel est déjà ${queue.volume}.`);

        if (vol < 0 || vol > maxVol) return message.reply(`Le nombre écris est invalide. Ecris un nombre entre **1** et **${maxVol}**.`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Le volume a été modifié et est à présent de **${vol}**/**${maxVol}**%.` : `Quelque chose s'est mal passée.`);
    },
};