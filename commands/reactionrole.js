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