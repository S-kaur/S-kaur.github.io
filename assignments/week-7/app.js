'use strict';

var express = require("express");
var mongo= require("mongo");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({extended: false}));

var DB;
var mongoclient = new mongo.mongoclient("mongodb://localhost:27017/attainu");

mongoclient.connect(function(error){
    if(error){
        console.log("error connecting to the db");
    } else {
        console.log("DB connection established");
        DB = mongoclient.db("attainu");
    }
});

    DB.collection("instructions").find.insertOne(function(error, data){

    });

app.get("/ ", function(request,response){

    response.render("index.hbs");
});

app.get("/instructors", function(request, response){

    DB.collection("instructors").find({}).toArray(function(error,instructors){
        if(error){

            console.log("error occured while connecting to instructors collection");
        }

        var data = {
            instructors : instructors
        };

        response.render("instructors.hbs", data);
    });

    response.render("instructor")
})

app.get("instructors/add", function(request,response){

    response.render("instructors-add.hbs");
});


app.post("/instructors/add", function(request,response){

    var name = request.body.name;
    var phone = request.body.phone;
    var newinstructor = {

        name : name,
        phone : phone
    };

    DB.collection("instructors").insert(newinstructor, function(error, result){


        if(error){

            console.log("error occured while inserting data into the instruction collection");
        }
        response.redirect("/view_instruction");
    });
});

app.listen(3000);