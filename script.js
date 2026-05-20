// Grab the elements from the DOM
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle the mobile menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the mobile menu automatically when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
