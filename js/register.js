'use strict';

{
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        validateInputs();
        
        if (localStorage.getItem(username.value)) {
            setError(username, "You've already registered!");
        } else {
            const user = {
                username: username.value,
                email: email.value,
                password: password.value,
            };
            
            const bool = (username.value === '' || email.value === '' || password.value === '' || password2.value === '' 
            || !isValidEmail(email.value) || password.value.length < 8 || password2.value !== password.value);

            if (!bool) {
                localStorage.setItem(username.value, JSON.stringify(user));
                window.location.href = 'login.html';
            }
        }
    });
    
    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    
    const setSuccess = element => {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
    
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }
    
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
      return emailRegex.test(email);
    }
    
    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
    
        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }
    
        if (emailValue === '') {
            setError(email, 'Email is required');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Provide a valid email adress');
        } else {
            setSuccess(email);
        }
    
        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else if (passwordValue.length < 8) {
            setError(password, 'Password must be at least 8 characters.');
        } else {
            setSuccess(password);
        }
    
        if (password2Value === '') {
            setError(password2, 'Confirm your password');
        } else if (password2Value !== passwordValue) {
            setError(password2, "Passwords doesn't match");
        } else {
            setSuccess(password2);
        }
    }
    
}

console.log(localStorage);