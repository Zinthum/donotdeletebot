const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

const prefix = '.';

client.once('ready', () => {
    console.log("Zinthum's Bot is online!");
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!');

    }else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UC2ohNPILhIqXCLW9alK1TCQ');

    }else if (command == 'yt'){
        message.channel.send('https://www.youtube.com/channel/UC2ohNPILhIqXCLW9alK1TCQ');

    }else if (command == 'owner'){
        message.channel.send('The owner of this server is @Zinthum#3731');

    }else if (command == 'hi'){
        message.channel.send("Hello! Welcome to Zinthum's Server!");

    }else if (command == 'rickroll'){
        message.channel.send('https://youtu.be/dQw4w9WgXcQ');

    }else if (command == 'etps'){
        message.channel.send('discord.gg/etps');

    }else if (command == 'beef'){
        message.channel.send('discord.gg/beef')

    }else if (command == 'rip'){
        message.channel.send('💀💀💀')
    }
});







client.login(process.env.token);
