'use-strict';

// register form validation
function validateForm() {
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.length < 5) {
        alert('Username must be at least 5 characters');
        return false;
    }
    
    if (password.length < 8) {
        alert('Password must be at least 8 characters');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    
    window.location.href = "login.html";
    return false;
}

// Slider
const sliderImg = document.querySelector('.slider-img');
const images = ['carousel-1.jpg', 'carousel-2.jpg', 'carousel-3.jpg'];

let i = 0;

function prev() {
    if (i <= 0) {
        i = images.length;
    }
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) {
        i = -1;
    }
    i++;
    return setImg();
}

function setImg() {
    return sliderImg.setAttribute('src', 'img/' + images[i]);
}

// Capture and handle user events 
const fromDest = document.getElementById('from-dest');
const toDest = document.getElementById('to-dest');
const dateDeparture = document.getElementById('date-departure');
const dateReturn = document.getElementById('date-return');
const numberOfPassengers = document.getElementById('numberOfPassengers');
const searchBtn = document.getElementById('search')


searchBtn.onclick = function searchFlights() {
    if (fromDest.value === '' || toDest.value === '' || dateDeparture.value === '' || numberOfPassengers.value < 1) {
        alert('Please input valid information')
    } else {
        alert(`We are searching tickets for ${numberOfPassengers.value} people from ${fromDest.value} to ${toDest.value}. Date of your departure: ${dateDeparture.value} and your return: ${dateReturn.value};`)
    }
}

// loop using for
const destinations = ["New York", "Los Angeles", "London", "Paris", "Tokyo"];

searchBtn.onclick = function() {
    var destination = toDest.value;

    if (destination.trim() !== "") {
        destinations.push(destination);
        toDest.value = "";
    }

    displayDestinations();
}

function displayDestinations() {
    var destinationsContainer = document.getElementById("flight-destinations");

    destinationsContainer.innerHTML = "";

    destinations.forEach(function (destination) {
        var destinationElement = document.createElement("h3");
        destinationElement.textContent =  destination;
        destinationsContainer.appendChild(destinationElement);
    });
}

// Timer or countdown
const modalBtn = document.getElementById('modalBtn');

modalBtn.onclick = function() {
    const delay = 2000;

    function closeBootstrapModal() {
      $('#exampleModal').modal('hide');
    }
    
    setTimeout(closeBootstrapModal, delay);
}