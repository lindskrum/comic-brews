$(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });

  AOS.init({
    easing: 'ease',
    duration: 1000,
  });
});

/* NAME GENERATOR */

var adjective = ["Captain", "Iron", "Super", "The", "God of", "Mega", "Giant", "Doctor","The Marvelous", "Tequila", "Beer", "Whiskey"] 
var object = ["Beer", "Good Guy", "Brain", "Magic", "Flash", "Lightening", "Logic", "Dragon", "Flask", "Whiskey", "Tequila"]
var list;

function generator() {
 document.getElementById("name").innerHTML = adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
}
