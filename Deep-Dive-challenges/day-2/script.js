'use strict';
var current_color = "green";
var duration_of_color = 5000;
var timer;
var colourchange = function(){

    var body = document.getElementById("background");
    body.style.backgroundColor = current_color;

    if(current_color == "green"){

        current_color = "red";
    } else {
        current_color = "green";
    }


   
};

timer = setInterval(colourchange, duration_of_color);

var slow = document.getElementById("slow");
slow.addEventListener("click", function(){

clearInterval(timer);
duration_of_color = duration_of_color * 3;
timer = setInterval(colourchange, duration_of_color);

});

var fast = document.getElementById("fast");
fast.addEventListener("click", function(){

clearInterval();
duration_of_color = duration_of_color /3;
setInterval(colourchange, duration_of_color);

});