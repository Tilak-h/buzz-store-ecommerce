// Check if user is logged in
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    const currentPath = window.location.pathname;
    
    // Allow access to login page without auth
    if (currentPath.includes('login.html')) {
        return;
    }
    
    // Redirect to login if not authenticated
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Run check when page loads
window.addEventListener('load', checkAuth);