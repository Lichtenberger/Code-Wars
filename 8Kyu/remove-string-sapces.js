// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    let str = '';
    for(let i = 0; i < x.length; i++) {
      if(x[i] !== ' ') {
        str += x[i]
      }
    }
    return str
  }

  /* other solutions

  function noSpace(x){
  return x.replace(/\s/g, '');
}


function noSpace(x){return x.split(' ').join('')}


function noSpace(x) {
  return x.replaceAll(' ', '');
}


  */