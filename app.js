// Feeding - Alex Wang 2016 - alex3763@gmail.com
//
require('dotenv').config();

var express = require('express');
var app = express();

var league_api = require('league-api');
var api = new league_api(process.env.API_KEY);

app.use(express.static('static'));

app.listen(3000);

getMatches("mabotkin");

function getMatches(name)
{
	api.getSummonersByName('na',name,function(err,data) {
		var id = data[name]['id'];
		api.getRecentGames('na',id,function(err,res) {
			console.log(data);
			for(var x = 0;x<(res["games"].length());x++)
			{
				console.log(res["games"][x]["stats"]);
			}
		});
	});
}
