// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
    return Number(str);
  }


/* other solutions

var stringToNumber = function(str){
  return parseInt(str);
}

var stringToNumber = function(str){
  return +str;
}

const stringToNumber = str => Number(str)

*/