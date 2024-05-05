// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
    let total = 0;
    let num = String(number)
    let split = num.split('')
    let start = 0
    if(split[0] == '-') {
      start = 1
    }
    for(let i = start; i <= split.length -1; i++) {
      total += Number(split[i])
    }
    return total
  }

  
/* other solutions

function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}

function sumDigits(number) {
  return number.toString().split("").reduce(function(sum,n) {
    return n === '-' ? sum : sum+parseInt(n);
  },0);
}

*/