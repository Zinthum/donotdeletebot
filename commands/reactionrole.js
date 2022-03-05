module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
      const channel = '877205506383573052';
      const GiveawayRole = message.guild.roles.cache.find(role => role.name === "Giveaway");
      const PollRole = message.guild.roles.cache.find(role => role.name === "Poll");

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
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageReactionAdd", async (reaction, member, guild, message) => {
    if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (member.bot) return;
  if (!reaction.message.guild) return;
  {
    if (reaction.emoji.name === "🌈") {
      await reaction.message.guild.members.cache.get(member.id).roles.add("<@&877205752165568614>");
    }
  }
  {
    if (reaction.emoji.name === "🎲") {
      await reaction.message.guild.members.cache.get(member.id).roles.add("<@&939600919748804698>");
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;
    if (!reaction.message.guild) return;
  {
      if (reaction.emoji.name === "🌈") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("<@&877205752165568614>");
      }
    }
  {
      if (reaction.emoji.name === "🎲") {
        await reaction.message.guild.members.cache.get(user.id).roles.remove("<@&939600919748804698>");
      }
    } 
  });