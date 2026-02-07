
// Product array
const products = [
  { id: 1, name: 'Product A' },
  { id: 2, name: 'Product B' },
  { id: 3, name: 'Product C' }
];

// Populate product options
const productSelect = document.getElementById('product-name');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.name;
  option.text = product.name;
  productSelect.add(option);
});

// Track review submissions
if (window.location.pathname.includes('review.html')) {
  let reviewCount = localStorage.getItem('reviewCount') || 0;
  reviewCount++;
  localStorage.setItem('reviewCount', reviewCount);
  document.getElementById('review-count').innerText = `Reviews submitted: ${reviewCount}`;
}

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = currentYear;

// Get the last modified date of the file
const lastModified = document.lastModified;
document.getElementById('last-modified');