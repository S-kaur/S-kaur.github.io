'use strict';
var numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];
//var numbers = 4;
//with for loop
var square = [];


  for(var i =0; i< numbers.length; i++){
    if(numbers[i]%2 == 0){
      square.push  = numbers[i] * numbers[i];
      console.log(square.push);
    }
     
}

//with functional programming method

square = numbers.filter(function(n){
  return n%2 == 0;
}).map(function(n){
  return n * n
});
console.log(square)