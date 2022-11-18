const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya4')
		.setDescription('kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948434162489131058/1043068632353210368/IMG_1766.png');
	},
};
