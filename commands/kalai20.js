const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai20')
		.setDescription('kalai pic (also featuring kanya!)'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948781658440630272/1043044583589814313/IMG_2876.jpg?width=566&height=753');
	},
};
