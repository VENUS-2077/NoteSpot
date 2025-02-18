"use strict";

// ===========================
//  Navbar variables
// ===========================
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

// navToggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
};

navMenuBtn.addEventListener("click", navToggleFunc);
navCloseBtn.addEventListener("click", navToggleFunc);

// ===========================
//  Theme toggle
// ===========================
const themeBtns = document.querySelectorAll(".theme-btn");

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Toggle light and dark theme classes on the body
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");

    // Toggle theme classes for each theme button
    themeBtns.forEach((btn) => {
      btn.classList.toggle("light");
      btn.classList.toggle("dark");
    });
  });
});

// ===========================
//  Contact Form Submission
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  // Only attach the event if the contact form is present on the page
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      // Basic example: check if the fields are filled
      // (redundant if using 'required' attributes in HTML)
      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all the required fields.");
        event.preventDefault();
      }

      // If you want to handle the data with AJAX, you can do so here:
      // event.preventDefault();
      // ... your AJAX code ...
    });
  }
});
