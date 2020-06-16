const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/); // grabs optional arguments after command name
	const commandName = args.shift().toLowerCase(); // grabs command name 

	const command = client.commands.get(commandName)  
	if (!command) return;

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
client.login(config.token);
