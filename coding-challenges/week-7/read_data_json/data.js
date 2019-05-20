'use strict';
var mongo = require("mongodb");
var fs = require("fs");
var mongoClient = new mongo.MongoClient("mongodb:// 127.0.0.1.27017/library", {useNewUrlParser: true});

mongoClient.connect(function(error){


    if(error){
        console.log("error connecting");
        return;
    }
    console.log("db connect");
    var DB = mongoClient.db("library");

      fs.readFile("books.json", "utf-8", function(error, data){

        if(error){

            console.log("error reading the file");
            return;
        }
        console.log("file has been read");
        data = JSON.parse(data);
    })

    DB.collections("Books").insertMany(data, function(error, success){
        if(error){
            console.log(error);
            return;
        }
        console.log("data inserted into db");
    })
})