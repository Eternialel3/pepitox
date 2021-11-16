player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`**${track.title}** est actuellement entrain de jouer !`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** a été ajouté dans la file !`);
});

/*player.on('botDisconnect', (queue) => { //Bot kick manuellement
    queue.metadata.send();
});

player.on('channelEmpty', (queue) => { //Salon vocal vide
    queue.metadata.send();
});*/

player.on('queueEnd', (queue) => { //Queue terminée
    queue.metadata.send("La file est terminée.");
});