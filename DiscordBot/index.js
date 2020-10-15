require('dotenv').config();
const wget = require('node-wget-promise');
const fs = require('fs');
const Discord = require('discord.js');
const { type } = require('os');
const client = new Discord.Client();

var path = require('path');
const { url, waitForDebugger } = require('inspector');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === '!upload') {
    if (msg.attachments.first().url.indexOf("stats.txt") !== -1) {
      msg.reply("Your stats have successfully been uploaded!");
      wget(msg.attachments.first().url);
      
    }
    else {
      msg.reply("Try attaching the 'stats.txt' file from \nC:\\Users\\\\%USERPROFILE%\\Documents\\Warcraft III\\CustomMapData\\Onslaught");
    }
    leaderBoardUpdate();
  }

      
if (msg.content === '!help') {
  msg.reply("Hi! Please visit our webpage for a full list of my commands!\n https://teamgoogolflex.com/commands");
}
});


function leaderBoardUpdate() {
  var w = fs.createWriteStream('hiscores.txt', {flags: 'a'});
  var r = fs.createReadStream('stats.txt');

  w.on('close', function() {
    console.log("Updated Scores");
  });


  
  r.pipe(w);
}

client.login('NzY1NzI2MjkyOTI2NTI5NTc2.X4ZALg.v8NokrFiLBVOtoeuUcC_KYbhCIY');