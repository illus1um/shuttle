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
        displayErrorMessage("The departure must be today or after today.");
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

    const searchData = {
        fromDest: fromDest,
        toDest: toDest,
        departureDate: departureDate,
        returnDate: returnDate,
        numberOfPassengers: numberOfPassengers
    };

    localStorage.setItem('searchData', JSON.stringify(searchData));

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



const cities = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Astana",
    "Almaty",
];

const fromDestInput = document.getElementById('from-dest');
const toDestInput = document.getElementById('to-dest');
const fromSuggestionsDiv = document.getElementById('from-suggestions');
const toSuggestionsDiv = document.getElementById('to-suggestions');

fromDestInput.addEventListener('input', function() {
    const userInput = fromDestInput.value.trim().toLowerCase();
    const matchingCities = cities.filter(city =>
        city.toLowerCase().startsWith(userInput)
    );

    displaySuggestions(matchingCities, fromSuggestionsDiv, fromDestInput);
});

toDestInput.addEventListener('input', function() {
    const userInput = toDestInput.value.trim().toLowerCase();
    const matchingCities = cities.filter(city =>
        city.toLowerCase().startsWith(userInput)
    );

    displaySuggestions(matchingCities, toSuggestionsDiv, toDestInput);
});

function displaySuggestions(suggestions, container, inputField) {
    container.innerHTML = '';

    suggestions.forEach(city => {
        const suggestion = document.createElement('div');
        suggestion.textContent = city;
        suggestion.classList.add('suggestion');

        suggestion.addEventListener('click', function() {
            inputField.value = city;
            container.innerHTML = '';
        });

        container.appendChild(suggestion);
    });
}

console.log(localStorage);
