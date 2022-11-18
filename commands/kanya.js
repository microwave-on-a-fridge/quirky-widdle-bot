const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kanya3')
		.setDescription('actually kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948434162489131058/1043068258514903110/IMG_1696.jpg?width=424&height=754');
	},
};
