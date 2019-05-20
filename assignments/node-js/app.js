'use strict';

var express = require("express");

var app = express();
  


app.get('/sum/:number1/:number2', function(request, response){

    console.log(request.params);
    var number1 = request.params.number1;
    var number2 = request.params.number2;
    var result = parseInt(number1) + parseInt(number2);
    response.send("sum is " +result);
 });


 app.get("/minus/:number1/:number2", function(request, response){

    console.log(request.params);
    var number1 = request.params.number1;

    var number2 = request.params.number2;
    var result = parseInt(number1) - parseInt(number2);
    response.send("difference is "+result);
 });

 app.get("/mul/:number1/:number2", function(request, response){

    console.log(request.params);
    var number1 = request.params.number1;
    var number2 = request.params.number2;
    var result = parseInt(number1) * parseInt(number2);
    response.send("mul is " +result);


 });

 app.get("/division/:number1/number2", function(request, response){

    console.log(request.params);
    var number1 = request.params.number1;
    var number2 = request.params.number2;
    var result = parseInt(number1) / parseInt(number2);
    response.send("div is "+result);
 });
 app.listen(3000);