'use strict';
var difference = 0;
    var differenceInLength = 0;

var comparestrings = function(a,b){
    
    if(a.length != b.length){
     /* if(a.length > b.length){
        differenceInLength = a.length - b.length;
      } else {
        differenceInLength = b.length - b.length;
      }
      
    }*/
    differenceInLength = Math.abs(a.length - b.length);
    }
    //console.log(differenceInLength);
      //return;

    for(var i = 0;i<=a.length;i++){
        if(a[i] != b[i]){

            difference = difference + 1;
        }
        return difference + differenceInLength;
    }
}
console.log(comparestrings("java","javascript"));