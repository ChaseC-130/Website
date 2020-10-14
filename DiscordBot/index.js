require('dotenv').config();
var AWS = require('aws-sdk');
const fs = require('fs');
const Discord = require('discord.js');
const { type } = require('os');
const client = new Discord.Client();

var path = require('path');

var s3 = new AWS.S3();


const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: "s3.us-east-1.amazonaws.com/onslaughtleaderboards",
    Key: 'stats.txt',
    Body: fileContent
  };

  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }

    console.log(`Uploaded file successfully. ${data.Location}`);
  });
};


uploadFile("stats.txt")


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!upload') {
    msg.reply("Your stats have been successfully uploaded!");   
    
  }
}
);

const TOKEN = process.env.TOKEN;
client.login(TOKEN);