const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  menu.classList.toggle('show');
});

const menuButton2 = document.querySelector('.menu-button-2');
const menu2 = document.querySelector('.menu-2');

menuButton2.addEventListener('click', function() {
menu2.classList.toggle('show-2');
menuButton2.classList.toggle('close');
});

const menuButton3 = document.querySelector('.menu-button-3');
const menu3 = document.querySelector('.menu-3');
const closeButton = document.querySelector('.close-button');
const overlay = document.querySelector('.overlay');

menuButton3.addEventListener('click', function() {
  menu3.classList.add('show-3');
  overlay.classList.add('show-3');
});

closeButton.addEventListener('click', function() {
  menu3.classList.remove('show-3');
  overlay.classList.remove('show-3');
});

overlay.addEventListener('click', function() {
  menu3.classList.remove('show-3');
  overlay.classList.remove('show-3');
});