const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai14')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043045729289109514/D1DAE41C-5218-4807-90EE-167730CC052B.jpg?width=348&height=754');
	},
};
