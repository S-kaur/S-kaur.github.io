'use strict';
var number = 1;
var fact = function(n){
for(var i=1; i<=n;i++){
number = number * i;
}
console.log(number);


}
fact(5);