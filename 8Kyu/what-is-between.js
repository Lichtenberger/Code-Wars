// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    let result = []
    for(let i = a; i <= b; i++) {
      result.push(i)
      console.log(i)
    }
    return result
  }


/* other solutions

const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);

function between(a, b) {
  return [...Array(b-a+1)].map((_, i) => a+i)
}

*/