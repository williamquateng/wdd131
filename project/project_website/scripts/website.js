// Get the logo element
const logo = document.querySelector('.logo img');

// Add an event listener to the logo
logo.addEventListener('click', () => {
  alert('Welcome to Cape Coast Game Center!');
});

// DOM elements
const contactForm = document.getElementById('contact-form');

// Event listeners
contactForm.addEventListener('submit', handleSubmit);

// Functions
function handleSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    alert(`Thanks, ${name}! Your message has been sent.`);
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
}

// Example of localStorage usage
const themeToggle = document.createElement('button');
themeToggle.textContent = 'Toggle Dark Mode';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.style.backgroundColor = '#f4f4f4';
    localStorage.setItem('theme', 'light');
  } else {
    document.body.style.backgroundColor = '#333';
    localStorage.setItem('theme', 'dark');
  }
});

document.getElementById('explore-btn').addEventListener('click', () => {
  // You can add more functionality here if needed
  // For now, it just links to games.html
});