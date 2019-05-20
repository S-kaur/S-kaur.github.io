'use strict';
  
var fib =function(n){
var sum;
var firstnumber = 0;
var secondnumber = 1;
var series = [0, 1];


for(var i=1; i<=n; i++){
  sum = firstnumber + secondnumber;
  series.push(sum);
  firstnumber = secondnumber;
  secondnumber = sum;
}
return series;
}
console.log(fib(10));