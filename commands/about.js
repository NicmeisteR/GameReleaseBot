const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'about',
	description: 'Learn more about this bot and how to contribute to it!',
	cooldown: 5,
	execute(message, args) {

        message.channel.send("This bot is made to show when a game was released! Made by AndyTheNerd and PatrossDev. Contribute to this project at https://github.com/AndyTheNerd/GameReleaseBot/")
	},
};