// Node API Server

//CSGO APP ID = 730

// Avoids tedious text manipulation by using express
// Allows you to deal with HTTP in an event driven way

// const {startDatabase} = require('./database/mongo');
// const {insertAd, getAds} = require('./database/ads');

var express = require('express');
var app = express(); 
var toobsSteam64ID = '76561198042252133';

// Will be using request to hit the Steam API 
var request = require('request');

// Steam API URL - not going to be using at this time .. yet
var url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
'v2/?key=4379E2CAA72E28EF0DACC44EBC59A081&appid=730';

// My steam inventory end point 
var myInv = 'http://steamcommunity.com/inventory/' + toobsSteam64ID + '/730/2?l=english&count=5000';

console.log("myInv link: " + myInv);

// Need port 
var port = 4000;
var server = app.listen(port);
console.log("TrackYourItems listening on port: " + port);
console.log("localhost:" + port + "/trackyouritems");
app.use('./index.html');

// Params example for reference 
// app.get('/test/:name', function(req, res){
    // var name = req.params.name;
    // res.send("Oh hey, " + name);
// });

// Their API so we get response in req.get
app.get('/trackyouritems', function(req, resp){
    var link = 'http://steamcommunity.com/inventory/' + toobsSteam64ID + '/730/2?l=english&cou';
    request.get(link, function(error, res, body){
        // Clarification on setHeader needed!
        resp.setHeader('Content-Type', 'application/json');
        resp.send(body);
        // Testing JSON parse
        var checkParse = JSON.parse(body);
        var totalInvCount = checkParse.total_inventory_count;
        console.log(checkParse.total_inventory_count);
        // Trying to figure out how to print item names and image of items only 
        // console.log(checkParse.descriptions.market_hash_name);
        var i;
        var count = 0;
        var fs = require('fs');
        var wstream = fs.createWriteStream('myOutput.txt');
        // Output each name of item in inventory - will be used later on selection screen on choosing
        // which items to track
        for(i in checkParse.descriptions){
            // count ++;
            // console.log("Am I getting here");
            console.log(checkParse.descriptions[i].market_hash_name);
            wstream.write(checkParse.descriptions[i].market_hash_name + '\n');
            // console.log("It ran through " + count + " times");
        }
    });
});

