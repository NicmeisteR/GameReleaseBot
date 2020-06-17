const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'about',
	description: '',
	cooldown: 0,
	execute(message, args) {

        message.channel.send("Test!")
	},
};