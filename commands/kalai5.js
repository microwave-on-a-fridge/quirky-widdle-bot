const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kalai5')
		.setDescription('kalai pic'),
	async execute(interaction) {
		await interaction.reply('https://media.discordapp.net/attachments/1043043977445785620/1043044331503767602/A8E3C478-AFE0-4D89-B61C-06A795D0F6D9.jpg?width=471&height=754');
	},
};
