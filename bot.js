const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By :  MAGIC SERVER`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :  MAGIC SERVER' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`MAGIC SHOP`,"http://twitch.tv//idk")
});


	
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 25,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يوم
 استخدامات الرابط : 25**`)

    }
});


client.on('message', message => {

    if (message.content === "#mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات  ")
           });
             }
if (message.content === "#umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات")
           });
             }



});






client.on('message', message => {

              if (!message.channel.guild) return;

      if(message.content =='#members')

      var IzRo = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)

      .setFooter(message.author.username, message.author.avatarURL)

      .setTitle('Members info')

      .addBlankField(true)

      .addField(':green_book:| الاونلاين ',

      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)

      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)

      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)

      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)

      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)

      message.channel.send(IzRo);

    });






client.on('message', (message) => {

    if (message.content.startsWith('#kick')) {

        var member= message.mentions.members.first();

        member.kick().then((member) => {

            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send(":x:");

        });

    }

});




client.on('message', (message) => {

    if (message.content.startsWith('#ban')) {

      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية الاداره فقط');

        var member= message.mentions.members.first();

        member.ban().then((member) => {

         message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');

        }).catch(() => {

            message.channel.send('Error :_:');

        });

    }

});






client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;

if (message.content.startsWith(prefix + 'dnd')) {
  if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('dnd');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;


if (message.content.startsWith(prefix + 'online')) {
  if (message.author.id !== '400955088052420610') return message.react('⚠')
  client.user.setStatus('online');  
message.react("✅")
}
                        
 });

client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;
if (message.content.startsWith(prefix + 'idle')) {
   if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('idle');  
message.react("✅")
}
                        
 });


client.on('message', message => {
var prefix = "#";

  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id == 410835593451405312)
return;


if (message.content.startsWith(prefix + 'invisible')) {
    if (message.author.id !== '400955088052420610') return message.react('⚠')
client.user.setStatus('invisible');  
message.react("✔")
}
                        
 });





const adminprefix = "#";;
const devs = ['400955088052420610'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'playing')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then;
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`);
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'streaming')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير ستريم البوت إلى  ${argresult}**`);
} else
 if (message.content.startsWith(adminprefix + 'listening')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
    message.channel.sendMessage(`**تم تغيير ليسنق البوت إلى  ${argresult}**`);
} else
 if (message.content.startsWith(adminprefix + 'watching')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
    message.channel.sendMessage(`**تم تغيير واتشنق البوت إلى  ${argresult}**`);
} 

});





client.on("message", message => {
      if (message.guild) {
      let embed = new Discord.RichEmbed()
      let args = message.content.split(' ').slice(1).join(' ');
      if(message.content.split(' ')[0] ==prefix + "bc") {
      if (message.author.bot) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return;
      if (!args[1]) {
              message.channel.send(`${prefix}bc <message>`);
return;
          
  }
const client = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)   
             .setTitle(' جاري ارسال رسالتك ') 
             .addBlankField(true)
             .addField(':two_men_holding_hands: | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
             .addField(':incoming_envelope: | الرسالة ', args)
             .setColor('RANDOM')  
              message.channel.sendEmbed(client);  
                 message.channel.send('لتأكيد الرسالة(نعم/لا)');

      let user = message.author;
const collector = new Discord.MessageCollector(message.channel, m => user === user, { time: 10000 }) 
     collector.on('collect', message => {
      if (message.content == "نعم") {
              message.guild.members.forEach(m => {
      var bc = new Discord.RichEmbed()
             .setAuthor(message.author.username, message.author.avatarURL)
             .addField(' الـسيرفر', `${message.guild.name}`,true)
             .addField(' الـمرسل ', `${message.author.username}#${message.author.discriminator}`,true)
             .addField(' الرسالة ', args)
             .setThumbnail(message.guild.iconURL)
             .setColor('RANDOM')
             m.send(`${m}`,{embed: bc});
 })                
  } else if (message.content == "لا") {
return message.reply('لن يتم ارسال الرسالة');
  }                          
});
  }
  } else {
return;
  }        
});






client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'chat');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

client.on("ready", () => {

    var guild;

    while (!guild)

        guild = client.guilds.get("486718537616850964");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            dat[Inv] = Invite.uses;

        });

    });

});

 

 

 

client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("509340242499731468");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("486718537616850964");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});







const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});


client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
            
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});





client.on('message', message => {
    let args = message.content.split(" ").slice(1);
if (message.content.startsWith("مسح")) {
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.reply("**يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if (!messagecount) return message.reply("**أختر كميه الرسائل المراد مسحها .**").then(messages => messages.delete(5000))
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });





client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send(':no_entry: | You dont have **ADMINISTRATOR** Permission!' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله ${args}`)
.setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))
 
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
 
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
 
EmbedBc.on("collect", r => {
message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
  .setTitle('`-Broadcast-`')
.setAuthor(`Server : ${message.guild.name}`)
.setFooter(`Sender : ${message.author.username}`)
.setDescription(`Message : ${args}`)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
m.send(args);
msg.delete();
})
})
})
}
});








client.login(process.env.BOT_TOKEN);
