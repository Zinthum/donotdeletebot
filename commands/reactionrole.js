module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        let embed = new Discord.MessageEmbed()
           .setColor('#e42643')
           .setTitle('Choose a role to never miss an event!')
           .setDescription('Choosing a role will allow you to never miss any events!\n\n' + `🌈 for Giveaway\n` + `🎲 for Poll`);
        message.delete();

        const msg = await message.channel.send({ embeds: [embed] }); 
        await msg.react('🌈');
        await msg.react('🎲');
    }
}

client.on("messageReactionAdd", async (reaction, member, guild, message) => {
    if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (member.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === "948710117954695179") {
    if (reaction.emoji.name === "🌈") {
      await reaction.message.guild.members.cache.get(member.id).roles.add("877205752165568614");
    }
  }
  if (reaction.message.id === "948710117954695179") {
    if (reaction.emoji.name === "🎲") {
      await reaction.message.guild.members.cache.get(member.id).roles.add("939600919748804698");
    }
  }
});

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.id === "948710117954695179") {
    if (reaction.emoji.name === "🌈") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("877205752165568614");
    }
  }
  if (reaction.message.id === "948710117954695179") {
    if (reaction.emoji.name === "🎲") {
      await reaction.message.guild.members.cache.get(user.id).roles.remove("939600919748804698");
    }
  } 
});