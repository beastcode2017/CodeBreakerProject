let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer==='' || attempt==='')
    {
      setHiddenFields();
    }

    if (validateInput(input.value))
    {
      attempt+=1;
    }
    else {
      return false;
    }
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor((Math.random()*10000));
  answer = answer.toString();
  if(answer.length!==4)
  {
    while(answer.length<4)
    {
      answer=0+answer;
    }
  }
  attempt =0;
}
function setMessage(msg) {
document.getElementById('message').innerHTML=msg;
}

function validateInput(var1) {
  if (var1.length === 4)
  {
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults() {
}
