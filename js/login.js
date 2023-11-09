'use strict';

{           
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const usernameLog = document.querySelector('input[type="text"]').value.trim();
        const passwordLog = document.querySelector('input[type="password"]').value.trim();

        const storedUser = JSON.parse(localStorage.getItem(usernameLog));

        validateInputs();
        
        if (!storedUser) {
            setError(username, "User doesn't exists! Please register.");
            setError(password, '');
        } else if (storedUser.password !== passwordLog) {
            setError(password, 'Password is not correct! Try again.');
        } else {
            setSuccess(username);
            setSuccess(password); 
            window.location.href = 'index.html';
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

    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        if (usernameValue === '') {
            setError(username, 'Username is required');
        } else {
            setSuccess(username);
        }

        if (passwordValue === '') {
            setError(password, 'Password is required');
        } else {
            setSuccess(password);
        }
    }
}

console.log(localStorage)