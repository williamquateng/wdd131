// Product array
const products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' }
];

// form.js
document.querySelectorAll('input, select, textarea').forEach(el => {
  el.addEventListener('input', () => {
    const formData = {
      productName: document.getElementById('product-name').value,
      rating: document.querySelector('input[name="rating"]:checked')?.value,
      dateInstalled: document.getElementById('date-installed').value,
      features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(cb => cb.value),
      writtenReview: document.getElementById('written-review').value,
      userName: document.getElementById('user-name').value
    };
    localStorage.setItem('reviewForm', JSON.stringify(formData));
  });
});

// Load saved data on page load
window.addEventListener('load', () => {
  const savedData = JSON.parse(localStorage.getItem('reviewForm'));
  if (savedData) {
    document.getElementById('product-name').value = savedData.productName;
    if (savedData.rating) document.querySelector(`input[name="rating"][value="${savedData.rating}"]`).checked = true;
    document.getElementById('date-installed').value = savedData.dateInstalled;
    savedData.features?.forEach(feature => {
      document.querySelector(`input[value="${feature}"]`).checked = true;
    });
    document.getElementById('written-review').value = savedData.writtenReview;
    document.getElementById('user-name').value = savedData.userName;
  }
});

// Get current review count or init to 0
let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;

// Increment count on form submit (if needed)
document.querySelector('form').addEventListener('submit', () => {
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
});

// Display count somewhere on the page
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('review-count').textContent = `Reviews: ${reviewCount}`;
});
