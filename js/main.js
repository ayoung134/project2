// tutorial for navbar with hamburger

const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu')

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// End navbar

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("reservation-form");
  const message = document.getElementById("thank-you-message");

  if (form && message) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // stop refresh
      form.reset();       // clear form

      // Show the message
      message.classList.add("show");

      // Hide after 3 seconds
      setTimeout(() => {
        message.classList.remove("show");
      }, 3000); // 3000ms = 3 seconds
    });
  }
});