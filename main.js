const { Player } = require('discord-player');
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGES
    ],
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');

const prefix = "-";

//charge les données du fichier data.json dans le sous-dossier data
var data = require("./data/data.json");

client.login(process.env.TOKEN);

client.on("messageCreate", message => {
   if (message.author.bot) return; // Si le message provient d'un bot, non analyse du message

   if (message.content.toLowerCase().includes("bruwah")) {
     message.channel.send("BRUUUUUUUUUUUUUUUUUUUUUUUUUUUUUH :rofl: :rofl: :rofl:")
   }
   if (message.content.toLowerCase().includes("je sait")) {
     message.channel.send("Apprends à écrire JJ l'analphabète")
   }
   if (message.content.toLowerCase().includes("en effet")) {
     message.channel.send("Réplique n°1 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("intéressant")) {
     message.channel.send("Réplique n°2 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("intriguant")) {
     message.channel.send("Réplique n°3 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("bruh")) {
     message.channel.send("Réplique n°4 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("gringe")) {
     message.channel.send("Réplique n°5 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("ish") && !message.content.toLowerCase().includes("ish ish")) {
     message.channel.send("Réplique n°6 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("oula")) {
     message.channel.send("Réplique n°7 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("oof")) {
     message.channel.send("Réplique n°8 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("okk")) {
     message.channel.send("Réplique n°9 sur 9 de JJ utilisée, essayez-en une nouvelle.")
   }
   if (message.content.toLowerCase().includes("tg")) {
     message.channel.send("Cet utilisateur très beau et très intelligent, cet être parfait et rempli de lumières vous demande de fermer votre énorme gosier de gros porc. :)")
   }
   if (message.content.toLowerCase().includes("-_-")) {
     message.channel.send("_--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--__--_-____-_-_-_-_-_--_-__-_-_-_-_--_")
   }
   if (message.content.toLowerCase().includes("lougarox")) {
      message.channel.send("ntr")
   }
   if (message.content.toLowerCase().includes("amogus")) {
      message.channel.send("⠀⠀⠀⠀⠀⢰⡿⠋⠁⠀⠀⠈⠉⠙⠻⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⢀⣿⠇⠀⢀⣴⣶⡾⠿⠿⠿⢿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⣀⣀⣸⡿⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠙⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⣾⡟⠛⣿⡇⠀⠀⢸⣿⣿⣷⣤⣤⣤⣤⣶⣶⣿⠇⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀\n⢀⣿⠀⢀⣿⡇⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠿⣿⡏⠀⠀⠀⠀⢴⣶⣶⣿⣿⣿⣆\n⢸⣿⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⣿⡇⣀⣠⣴⣾⣮⣝⠿⠿⠿⣻⡟\n⢸⣿⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠉⠀\n⠸⣿⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠀\n⠀⠻⣷⣶⣿⣇⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣛⣛⣻⠉⠁⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⢸⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀\n⠀⠀⠀⠀⢸⣿⣀⣀⣀⣼⡿⢿⣿⣿⣿⣿⣿⡿⣿⣿⡿")
   }
   if (message.content.toLowerCase().includes("femme")) {
     message.channel.send ("https://clips.twitch.tv/PolishedArtsyNightingalePraiseIt-mggEj7PCU03tIeHH")
   }
   if (message.content.toLowerCase().includes("ish ish")) {
     message.channel.send("https://tenor.com/view/person-of-interest-poi-root-martine-martine-rousseau-gif-22957720")
   }
   if (message.content.toLowerCase().includes("darksoul")) {
      message.channel.send("https://tenor.com/view/karen-araragi-monogatari-monogatari-series-dekkosun-toothbrush-gif-14605642")
   }
   if (message.content.toLowerCase().includes("pire perso")) {
      message.channel.send("https://tenor.com/view/eren-snk-aot-anime-gif-5108421") // fuck eren pire perso 
   }

  /* if (message.author.id === "693171137898872903") {
      message.channel.send("Arrête de parler JJ par pitié...")
   }*/
   /*if (message.author.id === "456018378189045760") {
      message.delete();
      message.channel.send("Ose parler Thomas pour voir ^^")
   }*/

   if (message.content.toLowerCase().includes("force")) {
      message.channel.send("Force à toi frérot 🤣🤣🤣👊👊👊🔥🔥🔥")
   }
   if (message.content.toLowerCase().includes("live")) {
      message.channel.send("https://www.jeuxactu.com/datas/divers/d/i/divers-jeux-video/vn/divers-jeux-video-5b6e971b3d44c.jpg")
   }
   if (message.content.toLowerCase().includes("🔥")) {
      message.channel.send("Bouffe tes morts JJ")
   }

   /*if (message.content.includes("?")) {
      message.channel.send("OUAIS MAIS C'EST PAS TOI QUI DÉCIDE")
   }*/

   if (message.content === "test") {
      message.reply("mange tes morts")
   }
   if (message.content === prefix + "erwan") {
      const embedtest = new Discord.MessageEmbed()
         .setColor("#0099ff")
         .setTitle("Comment être un aussi gros bg qu'Erwan ?")
         .setAuthor("Erwan le big bg")
         .setDescription("Vous êtes un gros déchet commme la photo si contre ? Voici les astuces pour être aussi bo qu'Erwan ;))")
         .setThumbnail("https://cdn.discordapp.com/attachments/505552173690519552/895768904494886953/image0.jpg")         
         .addField("Le gel douche ?", "Un qui sent l'ananas UwU")
         .addField("Le déodorant ?", "jsp c un stick mdr")
         .addField("Le dentifrice ?", "un truc pour gencives sensibles :((((((")
         .addField("Sexe ?", "40cm")
         .setTimestamp()
         .setFooter("Ce bot est invisible c un vampir lol", "https://cdn.discordapp.com/attachments/371213680307732482/908046128296120340/B500E7C5-A44C-44CB-B41A-13AF41657254.jpg")
      message.channel.send({embeds: [embedtest]})
   }
   
    //compteurs :
    //bonjour
   if(message.content.toLowerCase().includes("bonjour")){
    data.c1+=1;
  }
  if(message.content === prefix + "Count(" + "bonjour" + ")" ) {
      data.c1-=1;
    message.channel.send("\"Bonjour\" a été envoyé " + data.c1 + " fois." );
  }
  
    //j'essai
  if(message.content.toLowerCase().includes("j'essai")){
    data.c2+=1;
  }
  if(message.content === prefix + "Count(" + "j'essai" + ")" ) {
      data.c2-=1;
    message.channel.send("\"j'essai\" a été envoyé " + data.c2 + " fois." );
  }
    
  //ça m'as
  if(message.content.toLowerCase().includes("ça m'as")){
    data.c3+=1;
  }
  if(message.content === prefix + "Count(" + "ça m'as" + ")" ) {
      data.c3-=1;
    message.channel.send("\"ça m'as\" a été envoyé " + data.c3 + " fois." );
  }
    
    
  if (message.content === "bite"){
    message.react("🤣")
  }
  if (message.content.toLowerCase().includes("fuck discord")) {
    message.channel.send("+ 1 😡")
    message.react("➕")
    message.react("1️⃣")
    message.react("😡")
  }
  if (message.content.toLowerCase().includes("tekaté")) {
    message.channel.send("T'as quel âge pour dire tekaté bouffon ?")
  }
  if (message.content.toLowerCase().includes("princesse")) {
    message.channel.send("https://tenor.com/view/ai-hayasaka-together-blushing-anime-kaguya-sama-love-is-war-gif-17948041")
  }
  if (message.content.toLowerCase().includes("koi")) {
    message.channel.send("https://cdn.discordapp.com/attachments/371213680307732482/910199870109921400/5udurl.jpg");
  }
})
