'use strict';
var express= require("express");
var bodyParser = require("body-parser");
var app= express();
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({extended : false}));

var db = [
    { name: "Ansal", password: "Ansal123"},
    {name: "Vaibhav", password: "vaibhav123" },
    {name: "Divyam", password: "divyam123"}
]
app.get("/", function(request, response){
 response.render("index.hbs");

})
app.post("/login", function(request, response){
    var username = request.body.username;
    var password = request.body.password;

    for(var i =0; i<= db.length; i++){
        if(db[i].name == username && db[i].password == password){
           return response.send("Successfull login");
        }
        response.send("invalid credentials");
    }


    
});
app.listen(3000);