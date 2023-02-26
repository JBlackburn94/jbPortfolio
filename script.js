const myNav = document.getElementById('navbar');
window.onscroll = function() {
  if (document.body.scrollTop >= 1) {
    myNav.classList.remove('nav-coloured');
  } else {
    myNav.classList.add('nav-coloured');
  }
};



