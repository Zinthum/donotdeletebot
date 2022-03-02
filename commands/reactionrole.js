module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client){
        const channel = '<#877205506383573052>';
        const GiveawayRole = message.guild.roles.cache.find(role => role.name === "Giveaway");
        const PollRole = message.guild.roles.cache.find(role => role.name === "Poll");

        const GiveawayEmoji = '🌈';
        const PollEmoji = '🎲';

        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Choose a role to never miss an event!')
            .setDescription('Choosing a role will allow you to never miss any events!\n\n'
                + `${GiveawayEmoji} for Giveaway\n`
                + `${PollEmoji} for Poll`);

        let messageEmbed = await message.channel.send({ embeds: [embed] });      
        messageEmbed.react(GiveawayEmoji);
        messageEmbed.react(PollEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === GiveawayEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GiveawayRole);
                }
                if (reaction.emoji.name === PollEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PollRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === GiveawayEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GiveawayRole);
                }
                if (reaction.emoji.name === PollEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PollRole);
                }
            } else {
                return;
            }
        });
    }

}