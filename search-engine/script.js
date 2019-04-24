'use strict';


var update = function(data){
    var section = document.getElementById("content");
        
    section.innerHTML= "";

    for(var i =0; i<data.RelatedTopics.length;i++){

        var resultText = data.RelatedTopics[i].Text;

        url = data.RelatedTopics[i].firstURL;

        if(!resultText || !url){

            continue;
        }

        var a= document.createElement("a");
            a.innerText= resultText;
            a.href = url;

            var li = document.createElement("li");
            li.appendChild(a);
            var section = document.getElementById("section");
        section.appendChild(li);
    }


}

var loadcontent = function(){
    //alert("clicked");
    //create an ajax object.
    var request = new XMLHttpRequest();

    //open a connection to URL.
    request.open("get","https://api.duckduckgo.com/?q=india&format=json&pretty=1");

    //request send
    request.send();

    //create an onreadystatechange request to manipulate received data.
    request.onreadystatechange = function(data){
        if(request.readystate == 4 && request.status == 200){
            //console.log("my data is ready");
                var jsondata = JSON.parse(request.responseText);
           // console.log(request.responseText);
           update(jsondata);
        }
    }

    


}

var button = document.getElementById("searchbutton");
button.addEventListener("click",loadcontent);