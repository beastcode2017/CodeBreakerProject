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
      return false;
    }
    else {
      attempt.value+=1;
    }

    getResults();

    if(getResults){
      setMessage("You Win! :)");
      showAnswer(true);
      showReplay();
    }
    else if ((getResults===false) && (attempt>=10)) {
      setMessage("You Lose! :(");
      showAnswer(false);
      showReplay();
    }
    else {
      setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields() {
  answer.value = Math.floor(Math.random()*10000);
  answer.value.toString();
  if(answer.length!==4)
  {
    while(answer.length<4)
    {
      answer.value='0'+answer.value;
    }
  }
  attempt.value =0;
}
function setMessage(msg) {
document.getElementById('message').innerHTML=msg;
}

function validateInput(var1) {
  if (var1.length === 4)
  {
    attempt.value +=1;
    return true;
  }
  else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}

function getResults(input) {
  var position='<div>';
  var correct =0;
  for(var k=0; k<input.length; k++){
    var test = input.substr(k,1);
    if (test === answer.value.substr(k,1)){
      position =position+'<span class="glyphicon glyphicon-ok">'+k+'</span>';
      correct+=1;
    }
    else if(answer.value.indexOf(test)!==-1){
      position=position+'<span class="glyphicon glyphicon-transfer">'+k+'</span>';
    }
    else {
        position=position+'<span class="glyphicon glyphicon-remove">'+k+'</span>';
      }
  }
  position=position+'</div>';
  document.getElementById('results').innerHTML='<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">'
  +'<span class="col-md-6">'+position+'</span></div class="col-md-6"></div class="row">';
  if ((correct ===4) && (input===answer.value))
    return true;
  else {
    return false;
  }
}

function showAnswer(status) {
  document.getElementById('code').innerHTML = answer.value;
  if (status){
    document.getElementById('code').classList.add(' success');
  }
  else {
    document.getElementById('code').classList.add(' failure');
  }
}
