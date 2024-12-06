//import { REST, Routes } from 'discord.js';
const Discord = require ('discord.js');
const express = require ('express');
const app = express();

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new Discord.REST({ version: '10' }).setToken('MTI5MTQyMTQxMDI0OTQxMjYyMA.GzyJXz.uW6-uupsFgTSdQosT-dmWO78-R19K80xYMu-r0');
async () => {
    try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Discord.Routes.applicationCommands('1291421410249412620'), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
    console.error(error);
    }
  }  
app.listen(3000);