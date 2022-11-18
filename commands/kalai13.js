const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai13')
		.setDescription('kalai pic featuring kanya'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043045729603686420/ad08e099-1e2b-40c5-ac50-10b11ab51eb4.jpg?width=565&height=754');
	},
};
