const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya7')
		.setDescription('kanya GENUINE REACTION'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/965491423187181629/1043081125096079360/IMG_3202.jpg?width=434&height=754');
	},
};
