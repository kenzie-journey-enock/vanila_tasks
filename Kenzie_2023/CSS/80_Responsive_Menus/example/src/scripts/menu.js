const burguerMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.info-menu');

burguerMenu.addEventListener('click', function() {
  menu.classList.toggle('show');
  burguerMenu.classList.toggle('close');
});