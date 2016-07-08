// Feeding - Alex Wang 2016 - alex3763@gmail.com
//
require('dotenv').config();

var express = require('express');
var app = express();

var league_api = require('league-api');
var api = new league_api(process.env.API_KEY);

app.get('/', function(req, res) {
	res.send("Hello, World!");
});
app.listen(3000);

api.getSummonersByName('na', 'mabotkin', function(err,data) {
    console.log(data);
});
