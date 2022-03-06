module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
      const channel = '877205506383573052';
      const GiveawayRole = message.guild.roles.cache.find(role => role.id === "877205752165568614");
      const PollRole = message.guild.roles.cache.find(role => role.id === "939600919748804698");

      const GiveawayEmoji = '🌈';
      const PollEmoji = '🎲';

        let embed = new Discord.MessageEmbed()
           .setColor('#e42643')
           .setTitle('Choose a role to never miss an event!')
           .setDescription('Choosing a role will allow you to never miss any events!\n\n' + `${GiveawayEmoji} Giveaway Ping\n` + `${PollEmoji} Poll Ping`);
        message.delete();

        const msg = await message.channel.send({ embeds: [embed] }); 
        await msg.react('🌈');
        await msg.react('🎲');
    }
}

const Discord = require('discord.js');
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE", "CHANNEL", "REACTION"]});

client.on("messageReactionAdd", async (reaction, member, guild, message) => {
    if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (member.bot) return;
  if (!reaction.message.guilds) return;
  {
    if (reaction.emoji.name === "🌈") {
      await channel.reaction.message.guilds.members.cache.get(member.id).roles.add(GiveawayRole);
    }
  }
  {
    if (reaction.emoji.name === "🎲") {
      await channel.reaction.message.guilds.members.cache.get(member.id).roles.add(PollRole);
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guilds) return;
  {
      if (reaction.emoji.name === "🌈") {
        await channel.reaction.message.guilds.members.cache.get(user.id).roles.remove(GiveawayRole);
      }
    }
  {
      if (reaction.emoji.name === "🎲") {
        await channel.reaction.message.guilds.members.cache.get(user.id).roles.remove(PollRole);
      }
    } 
  });