'use strict';
var number;
var word;

var convert = function(number){
var names = [
  "zero","one","two","three","four","five","six","seven","eight","nine"
]
  while(number > 0){
    var remainder = number % 10;
    //console.log(remainder);
    word = names[remainder] + " " + word;
    number = Math.floor(number/10);
  }
  return word;
}
console.log(convert(word));

convert(1234);