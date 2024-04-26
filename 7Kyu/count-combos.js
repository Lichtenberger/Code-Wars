// Consider a sequence of integers xs, and a target integer n. Your task is to write a function which counts how many combinations of indexes of xs meet two rules:

// The size of the combination must be 1 less than the size of xs
// The sum of elements corresponding to the indexes must equal n
// For example:

// xs = [5, 0, 0, 2], n = 7
// All combinations of indexes (of size 3)
// {0, 1, 2} -> 5 + 0 + 0 = 5
// {0, 1, 3} -> 5 + 0 + 2 = 7
// {0, 2, 3} -> 5 + 0 + 2 = 7
// {1, 2, 3} -> 0 + 0 + 2 = 2
// Only 2 combinations match the target -> Answer = 2

function numCombo(arr, num){
    let totals = 0;
      let sum = 0;
      console.log(arr)
      for(let i = 0; i < arr.length; i++) {
        sum = 0;
        for(let j = 0; j < arr.length; j++) {
          sum += arr[j]
          console.log(`${j}: ${sum}`)
        }
        sum -= arr[i]
        if(sum === num) {
          totals++
        }
      }
      return totals;
    }


/* other solutions

function numCombo(arr, num){
  const sum = arr.reduce((a, b) => a + b)
  return arr.filter(x => sum - x == num).length;
}

function numCombo(arr, num){
   let s = arr.reduce((a,b)=>a+b,0);
   return arr.reduce((n,v)=>n+(s-v==num),0);
}

numCombo=(Q,S)=>Q.map(V=>Q+=V==S,S=Q.reduce((D,V)=>D+V,-S),Q=0)&&Q

*/