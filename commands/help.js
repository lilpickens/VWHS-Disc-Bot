const Discord = require('discord.js');

function help(author) {
    const helpEmbed1 = new Discord.MessageEmbed()
            .setTitle('Robotic Cougar Commands')
            .addField('General Commands', '>help, >ping')
            .addField('>help', 'Provides a list of all available commands.')
            .addField('>ping', 'A test command to test if the bot is active.')
            .addField('Role Commands', '>role YourRole YourRole ...')
            .addField('>role YourRole', 'Replace "YourRole" with the rolls you need from the list. Don\'t see your roll? Put the missing class in the "Class Requests" channel!')
            .addField('>holiday', 'Provides a countdown/timer until/since the selected event.')
            .addField('Holiday Commands', '>holiday christmas, >holiday spring, >holiday End')
            .setFooter('Have and idea for the bot? DM lilpickens!')
            .setColor(0xdf1111)
        author.send(helpEmbed1);
};

module.exports = {
    help
};