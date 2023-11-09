'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const thisUSer = localStorage.key(0);
    const userDataJSON = localStorage.getItem(thisUSer);
    const userData = JSON.parse(userDataJSON);
    const usernameValue = userData.username; 

    if (userData) {
        if (userData.firstName !== undefined) {
            const welcomeMessage = document.getElementById("welcomeMessage");
            welcomeMessage.textContent = "Hello " + userData.firstName + "!";
        } else {
            const welcomeMessage = document.getElementById("welcomeMessage");
            welcomeMessage.textContent = "Hello " + usernameValue + "!";
        }
        
    }
});

document.getElementById('search').addEventListener('click', function () {
    const fromDest = document.getElementById('from-dest').value;
    const toDest = document.getElementById('to-dest').value;
    const departureDate = document.getElementById('date-departure').value;
    const returnDate = document.getElementById('date-return').value;
    const numberOfPassengers = document.getElementById('numberOfPassengers').value;

    const errorAlert = document.getElementById('error-alert');

    errorAlert.style.display = 'none';

    if (!fromDest || !toDest) {
        displayErrorMessage("The place of departure and destination are mandatory.");
        return;
    }

    if (!departureDate) {
        displayErrorMessage("Please select the departure date.");
        return;
    }

    const today = new Date();
    const departureDateObj = new Date(departureDate);
    if (departureDateObj < today) {
        displayErrorMessage("The departure after today.");
        return;
    }

    if (!returnDate) {
        displayErrorMessage("Please select a return date.");
        return;
    }

    const returnDateObj = new Date(returnDate);
    if (returnDateObj <= departureDateObj) {
        displayErrorMessage("The return date must be after the departure date.");
        return;
    }

    if (!numberOfPassengers || numberOfPassengers < 1) {
        displayErrorMessage("Specify the correct number of passengers.");
        return;
    }

    window.location.href = 'confirmation.html';
});

function displayErrorMessage(message) {
    const errorAlert = document.getElementById('error-alert');
    errorAlert.textContent = message;
    errorAlert.style.display = 'block';
}

const exit = document.getElementById('exit');
exit.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem(localStorage.key(0));
    window.location.href = 'login.html';
});

console.log(localStorage);
