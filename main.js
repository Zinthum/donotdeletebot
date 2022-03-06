const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "CHANNEL", "REACTION"]});

const prefix = '.';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Zinthum's Bot is online!");
});

client.on('messageCreate', message =>{
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
        message.channel.send('The owner of this server is <@!540937043186941972>');

    }else if (command == 'hi'){
        message.channel.send("Hello! Welcome to Zinthum's Server!");

    }else if (command == 'rickroll'){
        message.channel.send('https://youtu.be/dQw4w9WgXcQ');

    }else if (command == 'etps'){
        message.channel.send('discord.gg/etps');

    }else if (command == 'beef'){
        message.channel.send('discord.gg/beef');

    }else if (command == 'rip'){
        message.channel.send('💀⚰️🪦');

    }else if (command == 'giveaway'){
        if(message.member.roles.cache.has('872790088818516028')){
            message.channel.send('A giveaway has started in <#872807200937095208>! Go react with 🎉 to enter the giveaway.');
        } else {
            message.channel.send("You don't have the right permissions to run this command!");
        }
        
    }else if (command == 'instagram'){
        message.channel.send('https://www.instagram.com/zinthum_yt/');

    }else if (command == 'ig'){
        message.channel.send('https://www.instagram.com/zinthum_yt/')
        
    }else if (command == 'reactionrole'){
        if(message.member.roles.cache.has('872790088818516028')){
            client.commands.get('reactionrole').execute(message, args, Discord, client);
        } else {
            message.channel.send("You don't have the right permissions to run this command!");
        }

    }else if (command == 'new'){
        message.channel.send('https://youtu.be/iPBdk0sMA6g');

    }else if (command == 'tiktok'){
        message.channel.send('https://www.tiktok.com/@zinthum');
    }
});







client.login(process.env.token);