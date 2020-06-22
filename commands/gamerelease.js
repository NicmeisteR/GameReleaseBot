const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'gamerelease',
	description: 'Discover when a game released!',
    cooldown: 5,
	execute(message, args) {
        message.channel.send("Trying to figure this out api...")
	},
};