/* Find Maximum and Minimum Values of a List
Your task is to make two functions( max and min) that receive a list of integers as input,
return the largest and lowest number in that list, respectively.

Example Outputs
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
*/

//my solution

var min = function(list){
        
    return list.reduce((prev,curr) => Math.min(prev, curr), Number.MAX_VALUE);
}

var max = function(list){
    
    return list.reduce((prev,curr) => Math.max(prev, curr), Number.MIN_VALUE);
}


// Alt solutions

//   Create Variables
/* 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
*/


//     Using Sort
/*
var min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

var max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}
 */

// Using Math prototype

/*
var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}
*/