module.exports = async (client) => {
    console.log(`Prêt à diffamer les connards ^^`);

    client.on('error', console.error); // Afficher les erreurs

    client.user.setActivity(client.config.app.playing);
};