// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
    //your code here
    let result = ''
      for(let i = 1; i <= num; i++) {
        result += i + ' sheep...'
      }
    return result
    }


    /* other solutions

countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``


const countSheep = num => [...Array(num)].map((_, i) => `${i + 1} sheep...`).join('');

    */