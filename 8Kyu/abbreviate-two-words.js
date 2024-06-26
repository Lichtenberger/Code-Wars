// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let first = name[0].toUpperCase()
    let last;
    for(let i = 0; i < name.length - 1; i++) {
      if(name[i] === ' ') {
        last = name[i + 1].toUpperCase()
      }
    }
    return first + '.' + last
  }


/* other solutions

function abbrevName(name){

  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()

*/