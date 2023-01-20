const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clip')
        .setDescription('Répond avec un clip aléatoire de la chaine!')
        .addStringOption(option => 
            option.setName('streamer')
            .setDescription('Change le streameur utiliser pour récupérer le clip')
        ),
    
	async execute(interaction) {
		await interaction.reply("https://www.twitch.tv/adwuin/clip/PatientAnimatedPastaMau5-n6mK1_oRBZt3pqwa?filter=clips&range=all&sort=time");
	},
};
