// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

function include(arr, item){
    // ...
    if(arr.includes(item)) {
      return true
    }
    return false
  }

  /* other solutions

  function include(arr, item){
  return arr.includes(item);
}


const include = (arr, item) => arr.includes(item);


function include(arr, item) {
  return arr.indexOf(item) !== -1;
}



  */