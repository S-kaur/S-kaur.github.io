'use strict';

var fs = require("fs");


var readdata = function(error, data){

if(error){

    console.log("error");
} else {
    console.log("success");
}



}

fs.readfile("books.json", "utf-8",readdata);