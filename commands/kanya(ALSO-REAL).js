const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya6')
		.setDescription('definitely kanya again'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/965491423187181629/1043067663229911132/IMG_0809.jpg?width=565&height=754');
	},
};
