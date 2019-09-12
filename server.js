// Server must handle api requests as client side cannot due to CORS

const express = require('express');
const request = require('request');
var app = express(); 

//want this to be interchangeable 
var toobsSteam64ID = '76561198042252133';

// Need port 
var port = process.env.PORT || 4000;
var server = app.listen(port);

console.log("TrackYourItems listening on port: " + port);
console.log("localhost:" + port + "/trackyouritems");

// May not be necessary 
app.all('/trackyouritems', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.all('/prices', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

// cannot remember whether there was a reason I did this or not 
// instead of using the steam api directly - CORS?
// can probably do this without server but better for if we use API later on
app.get('/trackyouritems', function(req, resp){
    
    var link = 'http://steamcommunity.com/inventory/' + toobsSteam64ID + '/730/2?l=english&cou';
    request.get(link, function(error, res, body){

        resp.setHeader('Content-Type', 'application/json');
        resp.send(body);
    });
});

app.get('/prices', function(req, resp){
    
    var link = 'https://steamcommunity.com/market/priceoverview/?appid=730&currency=3&market_hash_name=Glock-18%20|%20Warhawk%20(Minimal%20Wear)';
    request.get(link, function(error, res, body){
        resp.setHeader('Content-Type', 'application/json');
        resp.send(body);
    });
});

