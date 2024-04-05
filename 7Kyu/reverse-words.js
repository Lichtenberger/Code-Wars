// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Go for it
    let words = str.split(' ')
    let backwards = ''
    for(let i = 0; i < words.length; i++) {
      backwards += words[i].split('').reverse().join('') + ' '
      }
    return backwards.trimEnd()
    }


/* other solutions

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

function reverseWords(str) {
  // Go for it
  //split words into seperate arrays
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)

*/