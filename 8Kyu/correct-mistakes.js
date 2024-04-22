// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
  let I = 'I';
  let O = 'O'
  let S = 'S'
  let fixed = '';
  for(let i = 0; i < string.length; i++) {
    if(string[i] == ' ') {
      fixed += ' '
    } else if(string[i] == 0) {
      fixed += 'O'
    } else if(string[i] == 5) {
      fixed += 'S'
    } else if(string[i] == 1) {
      fixed += 'I'
    } else {
    fixed += string[i]
    }
  }
	return fixed
}


/* other solutions

correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

function correct(s){
	s = s.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '5') s[i] = 'S';
    else if (s[i] === '0') s[i] = 'O';
    else if (s[i] === '1') s[i] = 'I';
    }
  return s.join('');
}

*/