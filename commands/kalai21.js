const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai21')
		.setDescription('kalai pic (featuring melanie!)'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/948781658440630272/1043044583086506024/IMG_1584.jpg?width=565&height=754');
	},
};
