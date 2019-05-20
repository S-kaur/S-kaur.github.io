'use strict';

var quesArray = [];
var currentQuesIndex = 0;
var counter = 30;
var timer;
 var loadData= function(){

    var request = new XMLHttpRequest();
    request.open("get", "quiz.json");
    request.send();
    request.onreadystatechange = function(){

        if(request.readyState == 4 && request.status == 200){

            quesArray = JSON.parse(request.responseText);
           // console.log(data);
            showQuestion();
        }
    }
 }

 var timerfunction = function(){
     //console.log("timer");
     if(counter != 0){
        var counterElement = document.getElementById("counter");
        counterElement.innerText = counter;
        counter = counter - 1;
        
    } else {
        alert("sorry, time out");
        clearInterval(timer);
    }
 }

 var showQuestion = function(){
 currentQuesIndex = Math.floor(Math.random() * 10);
    //console.log(currentQuesIndex);

    var quesElement = document.getElementById("question");
    quesElement.innerHTML = quesArray[currentQuesIndex].question;
     timer = setInterval(timerfunction, 1000);
 }

    var button = document.getElementById("button");

    var answersubmitted = function(){
        var answer = document.getElementById("input").value;

         if(answer == ""){
            alert("please write the answer");
            return; 
        }
        
        if(answer == quesArray[currentQuesIndex].answer){

            alert("hurray! right answer");
        } else {
            alert("wrong answer");
        }

    }
    button.addEventListener("click", answersubmitted);





 loadData();