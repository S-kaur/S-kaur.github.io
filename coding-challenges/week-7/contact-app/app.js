'use strict';
var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.set("view engine", "hbs");
app.use(body-parser.urlencoded({extended: false}));
app.get("/", function(request, response){
    response.send("hi");
})