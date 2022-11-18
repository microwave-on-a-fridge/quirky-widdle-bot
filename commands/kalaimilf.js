const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalaimilfnokia')
		.setDescription('kalai milf! (nokia edition)'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948781658440630272/1043051841161793566/IMG_1683.png?width=426&height=753');
	},
};
