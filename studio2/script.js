'use strict'
console.log('reading js');

var iphone = document.querySelector('#iphone');
var airpods = document.querySelector('#airpods');
var chapstick = document.querySelector('#chapstick');
var p = document.querySelector('#overlay p');
var close = document.querySelector('#close');

iphone.addEventListener('click',function() {
  overlay.style.display = 'block';
  p.innerHTML= 'Like most, I carry my phone everywhere! but fun fact: I like to hide my phone in my backpack when I need to concentrate to do homework or in class. ';
})

airpods.addEventListener('click', function () {
  overlay.style.display ='block';
    p.innerHTML = 'I carry my aipords in my backpack all the time because I love to listen to music when walking to campus and back! fun fact: 95% of the time, I am listening to spanish music.';
    })
chapstick.addEventListener('click', function () {
  overlay.style.display = 'block';
  p.innerHTML = 'Chapstick is a huge must for me, especially in the winter! This brand is my favorite with their honey version! '
})

close.addEventListener('click', function () {
  overlay.style.display = "none";
}
