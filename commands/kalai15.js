const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai15')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044638300319784/Screenshot_2022-11-06-14-57-08-61_1c337646f29875672b5a61192b9010f9.jpg');
	},
};
