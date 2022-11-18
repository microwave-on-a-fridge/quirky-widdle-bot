const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya5')
		.setDescription('kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948434162489131058/1043068416564678698/IMG_1644.jpg?width=424&height=754');
	},
};
