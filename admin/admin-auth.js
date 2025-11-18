// Admin Authentication

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Check if already logged in
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    if (isLoggedIn) {
        window.location.href = 'dashboard.html';
        return;
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const remember = document.querySelector('input[name="remember"]').checked;

        // Simple authentication (replace with real auth in production)
        if (authenticate(username, password)) {
            // Set session
            sessionStorage.setItem('adminLoggedIn', 'true');
            sessionStorage.setItem('adminUsername', username);
            
            // Set remember me
            if (remember) {
                localStorage.setItem('adminRemember', 'true');
                localStorage.setItem('adminUsername', username);
            }

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        } else {
            // Show error
            errorMessage.classList.add('show');
            setTimeout(() => {
                errorMessage.classList.remove('show');
            }, 3000);
        }
    });
});

// Simple authentication (replace with backend in production)
function authenticate(username, password) {
    // Default credentials (change in production!)
    const validUsername = 'admin';
    const validPassword = 'admin123'; // Change this!
    
    // In production, this should be a backend API call
    return username === validUsername && password === validPassword;
}

// Logout function
function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    sessionStorage.removeItem('adminUsername');
    localStorage.removeItem('adminRemember');
    localStorage.removeItem('adminUsername');
    window.location.href = 'login.html';
}

// Check authentication on protected pages
function requireAuth() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn') === 'true';
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

