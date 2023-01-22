const { SlashCommandBuilder } = require('discord.js');

/**
 *  Commande issue de la documentation de discordJS qui répond l'utilisateur qui a utilisé la commande et quand il a rejoin le serveur
 */
module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
	},
};
