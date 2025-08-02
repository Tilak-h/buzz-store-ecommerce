// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.navlist');

hamburger.addEventListener('click', () => {
    navlist.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.navlist .link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navlist.contains(e.target)) {
        navlist.classList.remove('active');
    }
});

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Item added to cart!');
    });
});

// Add logout functionality
document.querySelector('.fa-user').addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});
