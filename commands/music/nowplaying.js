const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`Aucune musique n'est jouée actuellement.`);

        const track = queue.current;

        const embed = new MessageEmbed();

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.createProgressBar();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setTitle(track.title);
        embed.setURL(track.url);
        embed.setAuthor("Voici la musique qui joue actuellement :", client.user.displayAvatarURL({ size: 1024, dynamic: true }));    
        embed.setDescription(`Volume **${queue.volume}**%\nEtat du loop : **${methods[queue.repeatMode]}**\nDemandé par ${track.requestedBy}`);
        embed.addField("Durée", `${progress} (**${timestamp.progress}**%)`);
        embed.setTimestamp();
        embed.setFooter('De rien pour la musique frérot', message.author.avatarURL({ dynamic: true }));

        const saveButton = new MessageButton();

        saveButton.setLabel('Envoyez moi cette musique');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};