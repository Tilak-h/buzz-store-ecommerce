document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const loginButton = document.getElementById('login');
    const registerButton = document.getElementById('register');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Toggle between login and register
    loginButton.addEventListener('click', () => {
        container.classList.remove('active');
    });

    registerButton.addEventListener('click', () => {
        container.classList.add('active');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;

        if (validateForm(email, password)) {
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        }
    });

    // Handle signup form submission
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;

        if (validateForm(email, password)) {
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'index.html';
        }
    });

    function validateForm(email, password) {
        clearErrors();
        let isValid = true;

        if (!validateEmail(email)) {
            showError('Please enter a valid email');
            isValid = false;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters');
            isValid = false;
        }

        return isValid;
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        document.querySelector('form').appendChild(errorDiv);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
    }
});
