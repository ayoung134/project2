// JS scripts placed here
// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger .addEventListener('click', () => {
//     if (menuOpen == false) {
//         navLinks.computedStyleMap.display = "block";
//         menuOpen = true;
//     }
//     else if (menuOpen == true) {
//         navLinks.style.display = "none";
//         menuOpen = false;
//     }
// })

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('offcanvas-menu');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded',!expanded);
  menu.classList.toggle('expanded');
});
