const myNav = document.querySelector('.navbar');
window.onscroll = function() {
  if (document.body.scrollTop >= 1) {
    myNav.classList.remove('nav-coloured');
  } else {
    myNav.classList.add('nav-coloured');
  }
};

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}



