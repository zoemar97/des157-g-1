'use strict';
console.log('reading js');

document.querySelector('form').addEventListener('submit', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

//define process function
function processForm(evt) {

  var -ingverb = document.querySelector('#-ingverb').value;
  var noun1 = document.querySelector('#noun1').value;
  var adjective1 = document.querySelector('#adjective1').value;
  var noun2 = document.querySelector('#noun2').value;
  var adjective2 = document.querySelector('#adjective2').value;
  var verb = document.querySelector('#verb').value;
  var name = document.querySelector('#name').value;
  var gender = document.querySelector('#gender').value;
  var noun3 = document.querySelector('#noun3').value;

  var myMsg = document.querySelector('#myMsg');
  var msgSection = document.querySelector('#msgSection');

  //concatenating a message using .innerHTML()
  myMsg.innerHTML =
    'One Valentines day,<p> I was' +
    -ingverb +
    'when I looked in my' +
    noun1 'and saw a' +
    adjective1 + noun2 +
    '!' + 'It said will you be my ' +
    adjective2 +
    'valentine?' + 'I ' +
    verb +
    ' to see who it was from. ' + ' Turns out it was from ' +
    name +
    'I am such a lucky' +
    gender +
    'to have ' +
    noun3 + 'in my life!</p>';

  msgSection.className = 'show';

  evt.preventfault();
  return false; //stops default behavior
}

function resetform() {
  msgSection.className = 'hide';
}
