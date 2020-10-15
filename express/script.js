var theExport = ""; 
var i = 1;   



let myPromise = new Promise((resolve, reject) => {
$.getJSON("./currentLeaders.json", function(json) {
    
    
$.each(json, function (j, data) {
    console.log(data.name, data.hero, data.round);

 
    theExport += '<tr><td>' + i++ + '</td><td>' + data.name + '</td><td>' + data.round + '</td><td>' + '<i class=' + data.hero + '></i>' + "</td></tr>";

    setTimeout(function() {
        resolve("Success");
    }, 250);
})

});

});

myPromise.then((successMessage) => {
document.getElementById("board").innerHTML = theExport; 
});
