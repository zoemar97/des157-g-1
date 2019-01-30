'use strict';
console.log('reading js');

document.querySelector('form').addEventListener('submit',processForm);
document.querySelector('#reset').addEventListener('reset',resetform);

//define process function
function processForm(){

var -ingverb = document.getElementbyID('#-ingverb').value;
var noun1 = document.getElementbyID('#noun1').value;
var adjective1 = document.getElementbyID('#adjective1').value;
var noun2 = document.getElementbyID('#noun2').value;
var adjective2 = document.getElementbyID('#adjective2').value;
var verb = document.getElementbyID('#verb').value;
var name = document.getElementbyID('#name').value;
var gender = document.getElementbyID('#gender').value;
var noun3 = document.getElementbyID('#noun3').value;

var myMsg = document.querySelector('#myMsg');
var msgSection = document.querySelector('#msgSection');

//concatenating a message using .innerHTML()
myMsg.innerHTML=
  'One Valentines day, I was '+ userName +' when I looked in my '+ noun1
  'and saw a' -ingverb + major '!'
  'It said will you be my ' + noun3 + 'valentine?'
  'I ' noun4 + ' to see who it was from. ' + ' Turns out it was from '+
  noun5 + 'I am such a lucky' + noun6 + 'to have ' + noun7 'in my life!';

msgSection.class= 'show';

evt.preventfault()
  return false;//stops default behavior
}

function resetform() {
  msgSection.className = 'hide';
}
