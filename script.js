// Handling login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simple validation (replace with actual logic in a real app)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        // Simulating login (replace with actual authentication logic)
        if (username === 'user' && password === 'password123') {
            errorMessage.textContent = '';
            // Redirect to home page
            window.location.href = 'home.html'; 
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    }
});

// Handling sign-up form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const signupErrorMessage = document.getElementById('signup-error-message');

    // Simple validation for sign-up
    if (username === '' || password === '' || confirmPassword === '') {
        signupErrorMessage.textContent = 'Please fill in all fields.';
    } else if (password !== confirmPassword) {
        signupErrorMessage.textContent = 'Passwords do not match.';
    } else {
        // Simulating sign-up success (replace with actual registration logic)
        signupErrorMessage.textContent = '';
        // Redirect to home page after sign-up
        window.location.href = 'home.html'; 
    }
});
