// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b)
{
   //Good luck!
  let sum = a
  if(b < a) {
    sum = b
  }
  if(a === b) {
    return a
  } else if(b < a) {    
    for(let i = b + 1; i <= a; i++) {
      sum += i
    }
  } else {    
    for(let i = a + 1; i <= b; i++) {
      sum += i
    }
  }
  return sum
}

/*

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

function GetSum(a, b) {
   return a > b ? GetSum(b, a) : (b - a + 1) * (b + a) / 2;
}

*/