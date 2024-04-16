// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
    let unique = []
    for(let i = 0; i < iterable.length;i++) {
      if(iterable[i] !== iterable[i - 1]) {
        unique.push(iterable[i])
      }
      console.log(i)
    }
    return unique
  }

/* other solutions

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

var uniqueInOrder = function (iterable)
{
	return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

*/