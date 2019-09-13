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

app.all('/prices/:item_name', function(req, res, next) {
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

// app.get('/prices', function(req, resp){
//     // do one get request to bitskins api for all prices
//     // loop through and match name to get price through front end.js
//     // send back not on market if 404?
//     console.log(req.params.item_name);
//     // 1 for usd 3 for euro
//     var link = 'https://bitskins.com/api/v1/get_all_item_prices/?api_key=a5615875-a0a0-4f11-ac29-4836aecc11ba&code=' + codeName + '&app_id=730';
//     request.get(link, function(error, res, body){
//         resp.setHeader('Content-Type', 'application/json');
//         resp.send(body);
//     });
// });

