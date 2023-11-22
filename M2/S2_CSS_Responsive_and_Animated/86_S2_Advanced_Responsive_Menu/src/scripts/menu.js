const burguerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.info-menu');
const closeMenu = document.querySelector('.close')

burguerMenu.addEventListener('click', function() {
  menu.classList.toggle('show');
  burguerMenu.classList.toggle('close');
});