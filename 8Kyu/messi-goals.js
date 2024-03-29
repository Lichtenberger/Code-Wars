// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }


/* other solutions

const goals = (...a) => a.reduce((s, v) => s + v, 0);

const goals = (a,b,c) => a + b + c;

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [].reduce.call(arguments, (a, b)=> a + b);
}

*/