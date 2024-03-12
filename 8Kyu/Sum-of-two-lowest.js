// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a - b);
    return numbers[0] + numbers[1];
  };

/*
function sumTwoSmallestNumbers(numbers) {
    let lowest = numbers[0]
    let second = 999999999
    for(let i = 1; i < numbers.length; i++) {
        if(numbers[i] < second && numbers[i] < lowest) {
            second = lowest
            lowest = numbers[i]
        } else if(numbers[i] < second) {
            second = numbers[i]
        }
    }
    return lowest + second
}
*/