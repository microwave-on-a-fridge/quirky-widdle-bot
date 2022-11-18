const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai7')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044332585893898/Screenshot_2022-11-13-21-30-33-49_a63b0f8076346d26cbdc1b971a1da2a7.jpg?width=339&height=753');
	},
};
