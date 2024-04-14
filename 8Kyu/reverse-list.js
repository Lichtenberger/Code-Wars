// In this kata you will create a function that takes in a list and returns a list with the reverse order.

function reverseList(list) {
    return list.reverse()
  }


/* other solutions

const reverseList = list => list.reverse();

function reverseList(list) {
  const result=[];
  for (item of list) result.unshift(item);
  return result;
}

*/