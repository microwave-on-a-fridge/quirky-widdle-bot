const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya2')
		.setDescription('kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948434162489131058/1043068341314666526/IMG_1659.jpg?width=424&height=754');
	},
};
