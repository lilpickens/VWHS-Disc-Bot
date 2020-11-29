try {
    //ROBOBOT
    const Discord = require('discord.js');
    const bot = new Discord.Client();
    //const Attachment = new Discord.Attachment();
    const token = 'NzYxNzgzOTQzODAzNTY4MTI4.X3folQ.6YnVFdzk11-BVo7o8Nk2JsMNOoc'
    //required command modules
    const help = require('./commands/help.js');
    const role = require('./commands/role.js');
    const holiday = require('./commands/holidays.js');

    const prefix = '>';
    let version = '0.1.0'
    
    
    //writes in console and sets bots discord activity
    bot.on('ready', () =>{
        console.log('This bot is online!');
        bot.user.setActivity('for >help', {type: "WATCHING"}).catch(console.error);
    });
    
    //Welcome message for new server members
    bot.on('guildMemberAdd', member =>{
    
        const channel = member.guild.channels.cache.find(ch => ch.name === "welcome");
        if(!channel) return;
    
        channel.send(`Welcome to the Van Wert High School Discord Server, ${member}! Please read the info channel!`)
    });
    
    
    //The main body of command code
    bot.on('message', message =>{
        if (message.author.bot || !message.content.startsWith('>')) return; 
    
        let args = message.content.substring(prefix.length).split(" ") ;
    
        switch(args[0]) {
                
            //help command dms user server commands
            case 'help':
                help.help(message.author);
            break;
    
    
            //ping command responds with pong to check if the bot is online
            case 'ping':
                message.channel.send('pong!');
            break;

            case 'holiday':
                holiday.holidays(args, message.channel)
            break;
            
            
            //the command first arguement for any role assigning
            case 'role':
                role.role(message, args);
            break;
    
            //the default message if the command isnt finished or found
            default:
                message.channel.send('Sorry! I don\'t understand!');
        }
    });
    
    bot.login(token);
    
    }
    catch (err) {
        console.log(err)
    }