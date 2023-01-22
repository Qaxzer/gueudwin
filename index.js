require('dotenv').config();

/**
 *  Promis la documentation arrive u_u laissé moi le temps :p
 */
const fs = require('node:fs');
const path = require('node:path');

const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] });

/**
 *  Command Handler that automaticly iterate in the commands folder
 */
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isChatInputCommand()) return;
    console.log(interaction);

    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		command.execute(interaction);
	} catch (error) {
		console.error(error);
		interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

let dheure = ["00h00","01h01","02h02","03h03","04h04","05h05","06h06"]
client.on(Events.MessageCreate, msg => {
    console.log(msg)
    if (msg.author.bot) return false;

    
    if ( msg.content.toLowerCase().includes('cheater')) {
        msg.reply('if you think someone is cheating report it here');
    }

    if (dheure.some(w => msg.content.toLowerCase().includes(w))) {
        msg.reply('Bravo tu viens de gagner 1 points');
    }

});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);