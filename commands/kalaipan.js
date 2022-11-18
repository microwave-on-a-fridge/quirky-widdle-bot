const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalaipan')
		.setDescription('kalai pan!'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948781658440630272/1043051867082588180/IMG_1652.jpg?width=566&height=753');
	},
};
