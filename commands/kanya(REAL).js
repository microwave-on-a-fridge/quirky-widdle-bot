const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya')
		.setDescription('definitely kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/965491423187181629/1043064034565574766/IMG_1757.jpg?width=674&height=754');
	},
};
