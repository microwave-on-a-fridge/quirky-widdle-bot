const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai17')
		.setDescription('kalai pic (SHIRTLESS!)'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044637054603264/IMG_2929.jpg?width=566&height=753');
	},
};
