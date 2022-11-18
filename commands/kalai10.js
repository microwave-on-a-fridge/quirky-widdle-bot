const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai10')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043045730635497482/IMG_2704.jpg?width=566&height=753');
	},
};
