

var menuToggle = document.getElementById('menu-toggle');
var navList = document.getElementById('nav-list');
var hamburgerMenuIcon = document.getElementById('hamburger-menu-icon');
var closeIcon = document.getElementById('close-icon');

menuToggle.onclick = function() {
  navList.classList.toggle('hidden');
  hamburgerMenuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
}
