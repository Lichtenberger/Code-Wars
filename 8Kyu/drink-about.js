// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

function peopleWithAgeDrink(old) {
    if(old < 14) {
      return 'drink toddy'
    } else if(old < 18) {
      return 'drink coke'
    } else if(old < 21) {
      return 'drink beer'
    }
    return 'drink whisky'
  };

/* other solutions

const peopleWithAgeDrink = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"

const peopleWithAgeDrink = old =>
  `drink ${old < 14 ? `toddy` : old < 18 ? `coke` : old < 21 ? `beer` : `whisky`}`;

*/