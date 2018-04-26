let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer==='' || attempt==='')
    {
      setHiddenFields();
    }

    if (!validateInput(input.value))
    {
      return;
    }

      attempt.value++

    if (getResults(input.value)){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }
     else if (attempt.value >= 10){
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else{
      setMessage("Incorrect, try again.");
    }


}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random()*10000);
  answer.value.toString();
    while(answer.value.length<4)
    {
      answer.value= '0'+answer.value;
    }
  attempt.value ="0";
}
function setMessage(msg) {
document.getElementById('message').innerHTML=msg;
}

function validateInput(input) {
  if (input.length !== 4)
  {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
  return true;
}

function getResults(input) {
  var position='<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
  for(var k=0; k<input.length; k++){
    var test = input.substr(k,1);
    if (test === answer.value.substr(k,1)){
      position =position+'<span class="glyphicon glyphicon-ok"></span>';
    }
    else if(answer.value.indexOf(test)!==-1){
      position=position+'<span class="glyphicon glyphicon-transfer"></span>';
    }
    else {
        position=position+'<span class="glyphicon glyphicon-remove"></span>';
      }
  }
  position=position+'</div></div>';
  document.getElementById('results').innerHTML+=position;
  if ((input==answer.value)){
    return true;
  }
    return false;

}

function showAnswer(success) {
  let code = document.getElementById('code');
  if (success){
    code.className += ' success';
  }
  else {
    code.className += ' failure';
  }
  document.getElementById('code').innerHTML = answer.value;

}

function showReplay() {
  document.getElementById('guessing-div').style.display="none";
  document.getElementById('replay-div').style.display="block";
}
