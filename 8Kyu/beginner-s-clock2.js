// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^
    return h * 3600000 + m * 60000 + s * 1000
  }

/*
function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}

function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}


*/