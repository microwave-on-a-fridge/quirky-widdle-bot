const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('slash')
		.setDescription('slash command test'),
	async execute(interaction) {
		await interaction.reply('rivals of aether lmao');
	},
};
