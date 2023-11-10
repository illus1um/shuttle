'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const renderTickets = () => {
        const userTableBody = document.getElementById('userTableBody');
        userTableBody.innerHTML = '';

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const ticket = JSON.parse(localStorage.getItem(key));

            if (ticket && ticket.username && ticket.email) {

                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${ticket.username}</td>
                    <td>${ticket.email}</td>
                    <td><button class="btn btn-danger btn-sm" onclick="deleteTicket('${ticket.username}')">Delete</button></td>
                `;
                userTableBody.appendChild(row);
            }
        }
    };

    window.deleteTicket = (username) => {
        if (confirm(`Are you sure you want to delete the user: ${username}?`)) {
            localStorage.removeItem(username);
            renderTickets();
        }
    };

    renderTickets();
    
    const isValidEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);  
    }

    window.addUser = () => {
        const newUsernameInput = document.getElementById('newUsername');
        const newEmailInput = document.getElementById('newEmail');
    
        const newUsername = newUsernameInput.value.trim();
        const newEmail = newEmailInput.value.trim();
    
        const emailError = document.getElementById('emailError');
        const userError = document.getElementById('userError');

        if (newEmail === "" || !isValidEmail(newEmail)) {
            emailError.style.display = 'block';
            return;
        } else {
            emailError.style.display = 'none';
        }

        if (newUsername === '' || newEmail === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (localStorage.getItem(newUsername)) {
            userError.style.display = 'block';
            return;
        } else {
            userError.style.display = 'none';   
        }
    
        const newUser = {
            username: newUsername,
            email: newEmail,
        };
    
        localStorage.setItem(newUsername, JSON.stringify(newUser));
    
        newUsernameInput.value = '';
        newEmailInput.value = '';
    
    };
});

console.log(localStorage);
