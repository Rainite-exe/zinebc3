const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();


//1


client.on("message", message => {

            if (message.content.startsWith("7bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


const developers = ["490546269832609792","516292623053357087"]

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('7setg')) {
  client.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("7leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('7setw')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('7setl')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('7sets')) {
  client.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('7setname')) {
client.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('7setava')) {
client.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//2

client2.on("message", message => {

            if (message.content.startsWith("8bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client2.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('8setg')) {
  client2.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("8leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('8setw')) {
client2.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('8setl')) {
client2.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('8sets')) {
  client2.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('8setname')) {
client2.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('8setava')) {
client2.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

//3

client3.on("message", message => {

            if (message.content.startsWith("9bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **تم ارسال رسالة الى ✅** `); 
 message.delete(); 
};     
});


client3.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;
    
if (message.content.startsWith('9setg')) {
  client3.user.setGame(argresult);
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
   if (message.content === ("9leave")) {
  message.guild.leave();        
} else  
if (message.content.startsWith('9setw')) {
client3.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅ done : ${argresult}**`)
} else 
if (message.content.startsWith('9setl')) {
client3.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅ done :  ${argresult}**`)
} else 
if (message.content.startsWith('9sets')) {
  client3.user.setGame(argresult, "https://www.twitch.tv/dream");
    message.channel.send(`**✅ done : **`)
}
if (message.content.startsWith('9setname')) {
client3.user.setUsername(argresult).then
    message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith('9setava')) {
client3.user.setAvatar(argresult);
  message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.login(process.env.TOKEN);
client2.login(process.env.TOKEN2);
client3.login(process.env.TOKEN3);