'use strict';

var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended:  false }));
var playerss =[];
//var city = [];
    
app.get("/players", function(request, response){


    var data = {
        players : playerss,
       // cities : city,
         name: "Surinder"      
    };
     
    response.render("playersapp.hbs", data)
});

app.post("/players", function(request, response){
        var plrobj = {};
        plrobj.players = request.body.input;
          plrobj.Cities = request.body.input1;
        playerss.push(plrobj);   
        response.redirect("/players");


})

app.listen(3000);