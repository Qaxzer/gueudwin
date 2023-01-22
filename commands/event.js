const { SlashCommandBuilder } = require('discord.js');

/**
 *  Refaire le bot d'événement déjà present sur le discord d'adwuin / lacoloc mais en mieux, va falloir que j'avance un peu le code LUL car la y'a rien
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName('event')
        .setDescription('Créer un évenement sur le discord')
        .addStringOption(option => 
            option.setName('title')
                .setDescription('Change le streameur utiliser pour récupérer le clip')
                .setRequired(true)
        ),
    
	async execute(interaction) {
		await interaction.reply("https://www.twitch.tv/adwuin/clip/PatientAnimatedPastaMau5-n6mK1_oRBZt3pqwa?filter=clips&range=all&sort=time");
	},
};
