function Player(myName, myHero, myScore) {
    this.name = myName;
    this.hero = myHero;
    this.score = myScore;
}

// Create new players
player1 = new Player("GeneralCow", "toxino", 47);
player2 = new Player("Googolplex", "cow", 20);
player3 = new Player("KingJerim", "vengeful", 69),
player4 = new Player("SkullKrusher", "toxino", 26),
player5 = new Player("Noob", "sinful", 41),
player6 = new Player("SumScrub", "collector", 22),
player7 = new Player("A q p", "gier", 26),
player8 = new Player("Bigger Johnson", "war", 28),
player9 = new Player("Smol pp", "electro", 26),
player10 = new Player("Johnson", "cow", 26),


Players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]


var i = 1
function displayLeaderboard() {
    let theExport = ""; 
    Players.sort((aPlayer, bPlayer) => bPlayer.score - aPlayer.score);
    Players.forEach((player) => theExport += '<tr><td>' + i++ + '</td><td>' + player.name + '</td><td>' + player.score + '</td><td>' + '<i class=' + player.hero + '></i>' + "</td></tr>");
    document.getElementById("board").innerHTML = theExport; 
}

displayLeaderboard();