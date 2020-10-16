var CronJob = require('cron').CronJob;
var fs = require("fs");
const { fileURLToPath } = require('url');

const months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var job = new CronJob('*/5 * * * *', function() {
var path = ("../DiscordBot/hiscores.txt");
try {
    if (fs.existsSync(path)) {
        


// Convert all current players scored as Hex from Hiscores.txt into readable ASCII
  var fullText = fs.readFileSync(path).toString('utf-8');
  var stripped = fullText.replace(/\s/g, '');
  var count = stripped.match(/functionPreloadFilestakesnothingreturnsnothingcallPreloadStart/g || []).length;
  var exp = /"([^"]*)"/g;
  var array = stripped.match(exp);
  var codes = String(array).split('"');

  hexCodes = [];
  count = 0;
  for (i = 0; i < codes.length; i++) {
        if (i % 2 != 0) {
            hexCodes[count] = (hexToStr(codes[i]));
            count++;
        }
  }


// Create a player object for each converted player from Hiscores.txt
AllPlayers = [];
for (i = 0; i < hexCodes.length; i++) {
    AllPlayers[i] = new Player(hexCodes[i]);
}


// Grab current leaders in a String for comparison with new uploads
//var leaderFile = fs.readFileSync("./currentLeaders.json").toString('utf-8');
var leaderFile = fs.readFileSync("./currentLeaders.json").toString('utf-8');
var leaders = JSON.parse(leaderFile);
AllPlayers = JSON.stringify(AllPlayers);

var complete = leaders.concat(JSON.parse(AllPlayers));

complete.sort(function(a, b) {
    return b.round - a.round;
});

var array = complete;
var seenNames = {};

allHeroes = ["Gua", "Rul", "Sin", "The", "Ayu", "Cry", "Lig", "Arc", "Dem", "Dra", "Gre", "Mas", "Pur", "Pre", "Ven"]

array = array.filter(function(currentObject) {
    if (currentObject.name in seenNames || currentObject.round > 100 || !allHeroes.includes(currentObject.hero)) {
        return false;
    } else {
        seenNames[currentObject.name] = true;
        return true;
    }
});

console.log(array);

var done = [];
for (i = 0; i < array.length; i++) {
    if (i < 10) {
        done[i] = array[i];
    }
}

fs.writeFileSync("./currentLeaders.json", JSON.stringify(done));
//fs.unlinkSync(path);


    } 
} catch(err) {
    console.error(err);
}

}, null, true);


function hexToStr(str) {
    for (var e = str, a = "", t = 0; t < e.length; t += 2)
        a += String.fromCharCode(parseInt(e.substr(t, 2), 16)-13);
    return a;
}

function getPlayerName(str) {
    var number = new Date().getMonth();
    var month = months[number];
    return str.substring(str.lastIndexOf('&') + 1, str.lastIndexOf('#'));
}

function getRoundNumber(str) {
    var number = new Date().getMonth();
    var month = months[number];
    return str.substring(str.lastIndexOf('$') + 1, str.lastIndexOf(month));
}

function getHeroName(str) {
    var number = new Date().getMonth();
    var month = months[number];
    return str.substring(str.lastIndexOf('@') + 11, str.lastIndexOf('@') + 14);
}

function Player(data) {
    this.name = getPlayerName(data);
    this.hero = getHeroName(data);
    this.round = getRoundNumber(data);
}



job.start();