// Simple login and registration system
let users = [];

function register() {
    const username = document.getElementById('username-reg').value;
    const password = document.getElementById('password-reg').value;
    const registerSuccessMsg = document.getElementById('register-success');

    if (isValidPassword(password)) {
        const user = { username, password };
        users.push(user);
        registerSuccessMsg.textContent = "Registration Successful! You can now log in.";
        document.getElementById('password-message').style.display = 'none';
    } else {
        registerSuccessMsg.textContent = "Password is not strong enough!";
        document.getElementById('password-message').style.display = 'block';
    }
}

function login() {
    const username = document.getElementById('username-login').value;
    const password = document.getElementById('password-login').value;
    const loginErrorMsg = document.getElementById('login-error');
    const loginSuccessMsg = document.getElementById('login-success');
    
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        loginSuccessMsg.textContent = "Login Successful!";
        loginErrorMsg.textContent = '';
    } else {
        loginErrorMsg.textContent = "Error: User not found or incorrect password.";
        loginSuccessMsg.textContent = '';
    }
}

function isValidPassword(password) {
    // Password validation rules
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    
    return password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}
