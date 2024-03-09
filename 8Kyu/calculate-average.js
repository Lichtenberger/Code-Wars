// Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.

function findAverage(array) {
    // your code here
    let average = 0;
    let length = (array.length, 1)
    for(let i = 0; i < array.length; i++) {
      average += array[i]
    }
    if(array.length > 0) {
        return average / array.length
    } else {
    return average;
  }
}

/*
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}
*/

/*
const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
*/