// Node API / Express Server

//CSGO APP ID = 730
// var path = require("path");
const express = require('express');
// Will be using request to hit the Steam API 
const request = require('request');
var app = express(); 
var fs = require('fs');
var toobsSteam64ID = '76561198042252133';
// Steam API URL - not going to be using at this time .. yet
var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
'v2/?key=4379E2CAA72E28EF0DACC44EBC59A081&appid=730';


// Need port 
var port = process.env.PORT || 4000;
var server = app.listen(port);

console.log("TrackYourItems listening on port: " + port);
console.log("localhost:" + port + "/trackyouritems");

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Params example for reference 
// app.get('/test/:name', function(req, res){
    // var name = req.params.name;
    // res.send("Oh hey, " + name);
// });

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

