'use strict';

document.addEventListener("DOMContentLoaded", function() {
    const firstKey = localStorage.key(0);
    const userDataJSON = localStorage.getItem(firstKey);
    const userData = JSON.parse(userDataJSON);
    const usernameValue = userData.username; 

    if (userData) {
        const welcomeMessage = document.getElementById("welcomeMessage");
        welcomeMessage.textContent = "Hello " + usernameValue + "!";
    }
});

const fromDest = document.getElementById('from-dest');
const toDest = document.getElementById('to-dest');
const dateDeparture = document.getElementById('date-departure');
const dateReturn = document.getElementById('date-return');
const numberOfPassengers = document.getElementById('numberOfPassengers');
const searchBtn = document.getElementById('search')

const destinations = [];

searchBtn.onclick = function searchFlights() {
    if (fromDest.value === '' || toDest.value === '' || dateDeparture.value === '' || numberOfPassengers.value < 1) {
        alert('Please input valid information')
    } else {
        alert(`We are searching tickets for ${numberOfPassengers.value} people from ${fromDest.value} to ${toDest.value}. Date of your departure: ${dateDeparture.value} and your return: ${dateReturn.value};`)
    }

    const destination = fromDest.value + ' - ' + toDest.value + 
    '. Date: ' + dateDeparture.value + ' - ' + dateReturn.value;

    if (destination.trim() !== "") {
        destinations.push(destination);
        toDest.value = "";
    }

    displayDestinations();
}

function displayDestinations() {
    let destinationsContainer = document.getElementById("flight-destinations");

    destinationsContainer.innerHTML = "";   

    destinations.forEach(function (destination) {
        const destinationElement = document.createElement("h3");
        destinationElement.textContent = destination;
        destinationsContainer.appendChild(destinationElement);
    });
}

const exit = document.getElementById('exit');
exit.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem(localStorage.key(0));
    window.location.href = 'login.html';
});

console.log(localStorage);

console.log(localStorage);