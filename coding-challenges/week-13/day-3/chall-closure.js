'use strict';

var globalCounter = 0;
var button1 = document.getElementById("global");


button1.addEventListener("click", function(){

    
globalCounter = globalCounter + 1;
var globalText = document.getElementById("counter1");
globalText.innerText = "Global Counter: "+ globalCounter;
})

var obj = {

    objcounter: 0
 };
 var button2 = document.getElementById("object");
 
 button2.addEventListener("click",function(){
   obj.objcounter = obj.objcounter + 1;
  // obj.objcounter++;
   var objectText = document.getElementById("counter2");
   objectText.innerText = "Object Counter: " +obj.objcounter;
 });
 
 function closureCounter(){

        var counter = 0;
    
        function innerfunction(){
               
            counter = counter + 1;
            return counter;
        }
        return innerfunction;
    }
    var functionCalled = closureCounter();
 var button3 = document.getElementById("closure");

 button3.addEventListener("click", function(){
    var closuret = document.getElementById("counter3");
    closuret.innerText = "Closure Counter: "+functionCalled();

 });

