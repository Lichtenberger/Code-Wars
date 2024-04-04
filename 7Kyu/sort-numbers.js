// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
    let numbers = nums
    if(numbers !== [] && numbers !== null) {
      return numbers.sort((a, b) => a - b)
    }
    return []
  }

/* other solutions

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b
  });
}

function solution(nums){
    return nums !== null ? nums.sort(function(a,b){return a-b}) : [];
}

let solution = (nums) => (nums || []).sort((a,b) => (a-b))

*/