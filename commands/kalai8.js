const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai8')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044335832285264/IMG_3048.jpg?width=566&height=753');
	},
};
