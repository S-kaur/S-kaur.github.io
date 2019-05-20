'use strict';
 var number;
 var remainder;
 var PowerOfTwo = function(number){

   while(number% 2 == 0){

    number =  number/ 2;
   
   if(number == 1 || number < 0){

     return true;
 }
 }

 return false;
 }   
   

 PowerOfTwo(12);