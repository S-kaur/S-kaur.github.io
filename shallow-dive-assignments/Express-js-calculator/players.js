'use strict';

var express = require("express");
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.urlencoded({ extended:  false }));


app.use(bodyParser.json());
//app.use(express.static('public'));


    


app.post("/sum", function(request, response){
      var data={
        num1, 
        num2
      };
      
      var num1 = request.body.num1;
      var num2 = request.body.num2;
  
      var result = parseInt(num1) + parseInt(num2);
       response.send(data);
       console.log(result);
});

app.post("/sub", function(request, response){
  var data={
    num1, 
    num2
  };
  
  var num1 = request.body.num1;
  var num2 = request.body.num2;

  var result = parseInt(num1) - parseInt(num2);
   response.send(data);
   console.log(result);
});

app.post("/mul", function(request, response){
  var data={
    num1, 
    num2
  };
  
  var num1 = request.body.num1;
  var num2 = request.body.num2;

  var result = parseInt(num1) * parseInt(num2);
   response.send(data);
   console.log(result);
});

app.post("/div", function(request, response){
  var data={
    num1, 
    num2
  };
  
  var num1 = request.body.num1;
  var num2 = request.body.num2;

  var result = parseInt(num1) / parseInt(num2);
   response.send(data);
   console.log(result);
});

app.listen(3000);