// Server must handle api requests as client side cannot due to CORS
// need to figure out how to do below in client side js
require('dotenv').config();
console.log(process.env);
var totp = require('notp').totp;
var base32 = require('thirty-two');
var codeName = totp.gen(base32.decode(process.env.BIT_SKINS_SECRET));

// update after 30s then every 30s as code will change 
setInterval(function() {
    codeName = totp.gen(base32.decode(process.env.BIT_SKINS_SECRET));
    console.log(codeName);
}, 30000);
console.log(codeName);

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

app.get('/trackyouritems', function(req, resp){
    
    var link = 'http://steamcommunity.com/inventory/' + toobsSteam64ID + '/730/2?l=english&cou';
    request.get(link, function(error, res, body){
        resp.setHeader('Content-Type', 'application/json');
        resp.send(body);
    });
});

app.get('/prices', function(req, resp){
    var link = 'https://bitskins.com/api/v1/get_all_item_prices/?api_key='+ process.env.API_KEY + '&code=' + codeName + '&app_id=730';
    //console.log(link);
    request.get(link, function(error, res, body){
        resp.setHeader('Content-Type', 'application/json');
        resp.send(body);
    });
});

