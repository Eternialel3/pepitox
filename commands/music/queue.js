const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.reply(`Aucune musique n'est jouée actuellement.`);

        if (!queue.tracks[0]) return message.reply(`Aucune musique ne sera jouée après celle actuelle.`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Queue du serveur - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} \nDemandé par ${track.requestedBy}`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `et **${songs - 5}** autres musiques.` : `**${songs}** musique(s) restante(s) dans la playlist.`;

        embed.setDescription(`Musique jouée actuellement : ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('De rien pour la musique frérot', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};