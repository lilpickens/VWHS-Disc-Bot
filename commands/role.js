const Discord = require('discord.js');

function role(message, args) {
    let i = 1;
    let rolesGiven = [];
    let rolesNotGiven = [];
    let member = message.guild.member(message.author);

    while(i < args.length) {

        switch(args[i]) {

            //ENGLISH CLASSES:
            //American Liturature
            case 'amlit':
                member.roles.add("763229927377207338");
                rolesGiven.push(" amlit")
            break;

            //World Liturature
            case 'worldlit':
                member.roles.add("763230570963533845");
                rolesGiven.push(" worldlit")
            break;

            //English 11
            case 'english11':
                member.roles.add("763230573942276147");
                rolesGiven.push(" english11")
            break;

            //AP Language
            case 'aplang':
                member.roles.add("763230743274717238");
                rolesGiven.push(" aplang")
            break;

            //English 12
            case 'english12':
                member.roles.add("763230700676972594");
                rolesGiven.push(" english12")
            break;
            
            //AP Liturature
            case 'aplit':
                member.roles.add("763230786882633739");
                rolesGiven.push(" aplit")
            break;
            
            //MATH CLASSES:
            //Algebra 1
            case 'algebra1':
                member.roles.add("763582146220654612")
                rolesGiven.push(" algebra1")
            break;

            //Applied Geometry
            case 'appgeometry':
                member.roles.add("763582612941832192")
                rolesGiven.push(" appgeometry")
            break;

            //Geometry
            case 'geometry':
                member.roles.add("763582706302451742")
                rolesGiven.push(" geometry")
            break;

            //Integrated Math
            case 'intmath':
                member.roles.add("763582837835300884")
                rolesGiven.push(" intmath")
            break;

            //Integrated Math
            case 'algebra2':
                member.roles.add("763582970782416926")
                rolesGiven.push(" algebra2")
            break;

            //Applied Algebra 2
            case 'appalgebra2':
                member.roles.add("763583048008597515")
                rolesGiven.push(" appalgebra2")
            break;

            //Pre Calculus
            case 'precalc':
                member.roles.add("763583302635618356")
                rolesGiven.push(" precalc")
            break;

            //SR Analysis
            case 'sranalysis':
                member.roles.add("763583530894491688")
                rolesGiven.push(" sranalysis")
            break;

            //SR Statistics
            case 'srstat':
                member.roles.add("763583586602582027")
                rolesGiven.push(" srstat")
            break;

            //Calculus
            case 'calc':
                member.roles.add("763583456327761920")
                rolesGiven.push(" calc")
            break;

            //Statistics
            case 'stat':
                member.roles.add("763584045224820757")
                rolesGiven.push(" stat")
            break;

            //AP Calculus
            case 'apcalc':
                member.roles.add("763583780622565387")
                rolesGiven.push(" apcalc")
            break;

            //AP Statistics
            case 'apstat':
                member.roles.add("763583366955925585")
                rolesGiven.push(" apstat")
            break;

            //AP Computer Science
            case 'apcompsci':
                member.roles.add("763584198841729094")
                rolesGiven.push(" apcompsci")
            break;

            //SOCIAL STUDIES:
            case 'currentevents':
                member.roles.add("763940253458235422")
                rolesGiven.push(" currentevents")
            break;

            case 'civilwar':
                member.roles.add("763940896773111828")
                rolesGiven.push(" civilwar")
            break;

            case 'gov':
                member.roles.add("763940532929298463")
                rolesGiven.push(" gov")
            break;

            case 'apgov':
                member.roles.add("763940605700079647")
                rolesGiven.push(" apgov")
            break;
            
            //GRADE LEVEL ROLES
            case 'fresh':
                member.roles.add("766469008274227240")
                rolesGiven.push(" fresh")
            break;

            case 'soph':
                member.roles.add("766469230656749568")
                rolesGiven.push(" soph")
            break;

            case 'jr':
                member.roles.add("766469305613156432")
                rolesGiven.push(" jr")
            break;

            case 'sr':
                member.roles.add("766469464547262474")
                rolesGiven.push(" sr")
            break;

            //SCIENCE CLASSES
            case 'bio':
                member.roles.add("766474941859102720")
                rolesGiven.push(" bio")
            break;

            case 'invbio':
                member.roles.add("766475010595618857")
                rolesGiven.push(" invbio")
            break;

            case 'physsci':
                member.roles.add("766475091843743765")
                rolesGiven.push(" physsci")
            break;

            case 'intsci':
                member.roles.add("766476851581157426")
                rolesGiven.push(" intsci")
            break;

            case 'geology':
                member.roles.add("766475443456180244")
                rolesGiven.push(" geology")
            break;
            
            case 'chem':
                member.roles.add("766475136832110642")
                rolesGiven.push(" chemistry")
            break;

            case 'phys':
                member.roles.add("766475662139588648")
                rolesGiven.push(" phys")
            break;

            case 'anatomy':
                member.roles.add("766475791986065438")
                rolesGiven.push(" anatomy")
            break;

            case 'apchem':
                member.roles.add("766475720427569224")
                rolesGiven.push(" apchem")
            break;

            default:
                rolesNotGiven.push(`${args[i]}`)
            break;
        };

        i++;
    };

    if (rolesGiven.length > 0) {
        message.channel.send(`Roles Given: ${rolesGiven.toString()}`);
    };

    if (rolesNotGiven.length > 0) {
        message.channel.send(`Roles Not Found: ${rolesNotGiven.toString()}`);
    };
};

module.exports = {
    role
};