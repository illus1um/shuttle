'use strict';
{   
    document.addEventListener('DOMContentLoaded', e => {
        e.preventDefault();
        const emailInput = document.getElementById("exampleFormControlInput1");
        const openModalButton = document.getElementById("openModalButton");
        const emailError = document.getElementById("emailError");
        
        openModalButton.addEventListener("click", e => {
            e.preventDefault();
            const userEmail = emailInput.value;
    
            if (userEmail.trim() === "" || !isValidEmail(userEmail)) {
                emailError.style.display = "block";
                return;
            } else {
                emailError.style.display = "none";
            }
    
            const emailRecoveryDiv = document.getElementById("emailRecovery");
            emailRecoveryDiv.innerText = "Confirmation code will be sent to: " + userEmail;
    
            const myModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'));
            myModal.show();
        });
    });

    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
        return emailRegex.test(email);
    }
    
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
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();
    
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

