// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = currentYear;

// Get the last modified date of the file
const lastModified = document.lastModified;
document.getElementById('last-modified').innerHTML = `Last updated: ${lastModified}`;