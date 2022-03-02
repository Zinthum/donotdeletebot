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

        let messageEmbed = await message.channel.send(embed);      
        messageEmbed.react(GiveawayEmoji);
        messageEmbed.react(PollEmoji);
    }
}