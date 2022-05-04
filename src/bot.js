import * as Discord from 'discord.js';
import { getTemperature } from './weather';

const token = "OTY5MzgwNzI3MTk4MjA4MDAw.YmskJw.5i6nGYzpyoV1GQvMw1yMUBlieZk";
const client = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
});

async function onMessage(message) {
    const temp = await getTemperature(zipcode);
    message.reply(`heres the temperature: ${temp}*f`);
}

client.on("messageCreate", onMessage);
client.on("ready", onReady)
client.login(token);