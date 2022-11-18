const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai19')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044635993452595/7F11996B-0CF0-4EFC-94E5-6AE21D07EDCC.jpg?width=565&height=754');
	},
};
