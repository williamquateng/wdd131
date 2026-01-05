const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("lastModified").innerHTML = `Last updated: ${lastModified.toLocaleDateString('en-US', options)}`;