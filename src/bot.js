import * as Discord from 'discord.js';
import { getTemperature } from './weather.js';

const token = "";
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
});

async function onMessage(message) {
    // Get the numbers out of message.content
    // message.content is a string

    let numbers = (message.content.match(/\d+/));
    let zipcode = numbers[0]
    const temp = await getTemperature(zipcode);
    message.reply(`heres the temperature: ${temp}*f`);
    

    console.log(numbers);
}

async function onReady() {
    console.log('the bot is ready');
}

client.on("messageCreate", onMessage);
client.on("ready", onReady);
client.login(token);