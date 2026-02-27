// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
// let menuOpen = false;

// hamburger .addEventListener('click', () => {
//     if (menuOpen == flase) {
//         navLinks.style.display = "block";
//         menuOpen = true;
//     }
//     else if (menuOpen == true) {
//         navLinks.style.display = "none";
//         menuOpen = false;
//     }
// })

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});