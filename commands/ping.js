// Import de SlashCommandBuilder depuis la librairie utiliser pour communiquer avec discord
const { SlashCommandBuilder } = require('discord.js');

/**
 * Ici comme on va utiliser se fichier dans un autre, on détermine ce que notre fichier(module) va exposer comme information.
 * 
 * Le but de cette command est très simple, on souhait qu'a chaque fois qu'un utilisateur entre '/ping', il recoit une réponse du bot avec le message pong!
 * 
 * Aucune utilité ou plus value pour un bot mais très utile pour comprend le fonctionnement d'une commande slash.
 * /
module.exports = {

	// On utilise ici l'objet SlashCommandBuilder pour définir du coup notre comment avec un nom et une description
	data: new SlashCommandBuilder()
		.setName('ping')
        .setDescription('Replies with Pong!'),
    
	// une fois que notre command est défini en terme d'option, nous avons besoin de définir son implémentaiton réel.
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
