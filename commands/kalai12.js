const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai12')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043045729855356978/7B174F5C-18D8-48E3-BAF9-2ADFAA115179.jpg?width=566&height=753');
	},
};
