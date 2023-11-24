document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const forgotPasswordLink = document.getElementById('forgot-password');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Replace this with your actual authentication logic
        if (username === 'RENELYN SALIK' && password === '123') {
            window.location.href = 'game.html'; // Redirect to home.html
            
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });

    forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Implement "Forgot Password" functionality (e.g., show a password reset form)
        alert('Forgot Password link clicked!');
    });
});