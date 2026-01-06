scripts/temples.js

// Get current year and last modified date
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById('copyright-year').textContent = currentYear;
document.getElementById('last-modified').textContent = lastModified;

// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
