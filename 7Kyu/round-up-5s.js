// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    // ...
    let modN = n;
    for(let i = 1; i <= 5; i++) {
      if(modN % 5 !== 0) {
        modN += 1
      }
    }
    return modN
  }

/* other solutions

function roundToNext5(n){
  return Math.ceil(n/5)*5;
}

function roundToNext5(n){
  while(n % 5 !== 0) n++;
  return n;
}

*/