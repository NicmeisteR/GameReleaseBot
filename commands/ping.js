const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'ping',
	description: '',
	cooldown: 0,
	execute(message, args) {

        message.channel.send("Kappa bot best bot, mean.. PONG!")
	},
	name: 'about',
	description: '',
	cooldown: 0,
	execute(message, args) {

		message.channel.send("This bot connects with the IGDB to give information about video game releases! You can contribute to this repo on https://github.com/AndyTheNerd/GameReleaseBot")
	},
};