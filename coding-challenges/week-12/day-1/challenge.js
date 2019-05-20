'use strict';
/*The challenge is to create a Javascript *class using object constructor* called `MyArray`.
The class should have a property called `array`.
The constructor should take arguments passed to it as the initial elements of array, like `MyArray(1, 2, 3, 4, 5, 6)`
*/
function MyArray(){
    this.array = [];
    for( var i = 0; i <arguments.length; i ++){
        this.array.push(arguments [i]);
    }
    console.log(this.array);
}
// `print()` - Prints the content of the array to console.

MyArray.prototype.print = function(){
    this.array.forEach(function (a){
        console.log(a);
    })
}

/* `search(searchValue)` - Searches the passed element in the array and returns the index if found. 
If not found, returns `-1`.
*/

MyArray.prototype.search = function(element){
    for(var i = 0; i < this.array.length; i++){
        if(this.array[i] == element){
            return i;
        }
    }
    return -1;
}

// `sort()` - Sorts the array in descending order.

MyArray.prototype.sort = function(){

    this.array.sort( function(a, b){ return b - a;})
    }

var arr = new MyArray(1, 2, 3, 4, 5, 6, 7);
arr.print();
console.log("index of searched element is " +arr.search(5));
console.log("sorted array in descending order is " +arr.sort();
//arr.sort();
arr.print();