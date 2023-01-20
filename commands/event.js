const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('event')
        .setDescription('Répond avec un clip aléatoire de la chaine!')
        .addStringOption(option => 
            option.setName('title')
                .setDescription('Change le streameur utiliser pour récupérer le clip')
                .setRequired(true)
        ),
    
	async execute(interaction) {
		await interaction.reply("https://www.twitch.tv/adwuin/clip/PatientAnimatedPastaMau5-n6mK1_oRBZt3pqwa?filter=clips&range=all&sort=time");
	},
};
