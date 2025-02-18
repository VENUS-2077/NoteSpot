"use strict";

// ===========================
//  Navbar Toggle
// ===========================
const nav = document.querySelector(".mobile-nav");
const navMenuBtn = document.querySelector(".nav-menu-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

if (nav && navMenuBtn && navCloseBtn) {
  const toggleNav = () => nav.classList.toggle("active");

  navMenuBtn.addEventListener("click", toggleNav);
  navCloseBtn.addEventListener("click", toggleNav);
}

// ===========================
//  Theme Toggle
// ===========================
const themeBtns = document.querySelectorAll(".theme-btn");

if (themeBtns.length > 0) {
  themeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      document.body.classList.toggle("dark-theme");

      const isLight = document.body.classList.contains("light-theme");
      themeBtns.forEach((btn) => {
        btn.classList.toggle("light", isLight);
        btn.classList.toggle("dark", !isLight);
      });
    });
  });
}

// ===========================
//  Contact Form Validation
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      const name = document.getElementById("contact-name")?.value.trim();
      const email = document.getElementById("contact-email")?.value.trim();
      const message = document.getElementById("contact-message")?.value.trim();

      if (!name || !email || !message) {
        event.preventDefault();
        alert("Please fill in all the required fields.");
      }
    });
  }
});

// ===========================
//  Scroll to Top Button
// ===========================
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
  window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 200);
  });

  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
