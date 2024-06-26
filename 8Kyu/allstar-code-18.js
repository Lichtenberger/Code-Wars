// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

function strCount(str, letter){ 
    let count = 0
    for(let i = 0; i < str.length; i ++) {
      if(str[i] === letter) {
        count++
      }
    }
    return count
  }


/* other solutions

function strCount(str, letter){  
  return str.split(letter).length-1
}

function strCount(str, letter) {  
  return str.length - str.replace(new RegExp(letter, "gi"), '').length;
}

*/