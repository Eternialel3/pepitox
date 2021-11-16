module.exports = (client, int) => {
    const { MessageEmbed } = require('discord.js');
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    const track = queue.current;

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `Aucune musique n'est jouée actuellement.`, ephemeral: true, components: [] });

            const embed = new MessageEmbed();

            const timestamp = queue.getPlayerTimestamp();
            const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

            embed.setColor('RED');
            embed.setThumbnail(track.thumbnail);
            embed.setTitle(track.title);
            embed.setAuthor("Pépitox t'envoie un cadeau ! ;)", client.user.displayAvatarURL({ size: 1024, dynamic: true }));
            embed.setDescription(`URL : ${track.url}\nDurée **${trackDuration}**\nDemandé par ${track.requestedBy}`);
            embed.setTimestamp();

            int.member.send({ embeds: [embed]}).then(() => {
                return int.reply({ content: `Je t'ai envoyé la musique.`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `Je ne peux pas t'envoyer la musique.`, ephemeral: true, components: [] });
            });
        }
    }
};