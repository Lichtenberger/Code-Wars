// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    // your code here
    let reverse;
    let y = x.toLowerCase()
    for(let i = 0; i < x.length; i++) {
      reverse = x.split('').reverse().join('').toLowerCase()
    }
    if(y == reverse || y < 1) {
      return true
    }
    return false
  }

  /* alternative answers

  const isPalindrome = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}



  */