function Player(playerId){
    this.playerId = playerId;
}


player1 = new Player(154691194);
Players = [player1]

function dotaScores() {
    let theExport = ""; 
    Players.forEach((player) => 
    $.getJSON('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.dotabuff.com/players/154691194'), function (data) {
    
    var avatar = (data.contents.match('(?<=ge\" content=\").+?(?=\" /><m)'))
    var name = (data.contents.match('(?<="Content-Type\" /><title>).+?(?= - Ov)'))
    var rank = (data.contents.match('(?<=...title=\"Rank.+?).+?(?=">)'));

    console.log(rank);


    var rankImage = (data.contents.match('class=\"rank-tier-base\" src=\".+?" /><img alt="'));     
          
    console.log(rankImage);

    theExport += '<tr><td>' + '<img src=' + avatar + 'width="25" height="20">' + '   ' + name + '</td><td>' + rank + "</td></tr>"
    document.getElementById("dota").innerHTML = theExport;
        
}
    )
    )

}


dotaScores();
