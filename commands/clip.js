import axios from "axios"
const { SlashCommandBuilder } = require('discord.js');

/**
 * Objectif de cette commande récuperer un clip aléatoire de la chaine voulu, par défaut chaine de adwuin sinon streameur preciser en commande line '/clip wolviloutre'
 * 
 * A utiliser Axios
 *  - Api Twitch via axios
 *  - Gestion des différentes reponse de l'api
 *  - Récupérer et manager des crédentials twitch
 *  - Ajouter d'autre paramétre
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName('clip')
        .setDescription('Répond avec un clip aléatoire de la chaine!')
        .addStringOption(option => 
            option.setName('streamer')
            .setDescription('Change le streameur utiliser pour récupérer le clip')
        ),
    
    async execute(interaction) {
        // Ici on utilise une condition simple pour gérer la commande streamer si elle est là, on l'utilise dans l'url, ce code peux être optimiser pour générer l'url entièrement
        let streamer = interaction.getString('streamer')
        if (streamer) {
            await interaction.reply("https://www.twitch.tv/"+streamer+"/clip/PatientAnimatedPastaMau5-n6mK1_oRBZt3pqwa");
        } else {
            await interaction.reply("https://www.twitch.tv/adwuin/clip/PatientAnimatedPastaMau5-n6mK1_oRBZt3pqwa");
        }
	},
};
