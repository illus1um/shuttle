'use strict';

const passengerInfo = document.getElementById('passengerInfo');
const tripDetails = document.getElementById('tripDetails');
const ticketHours = document.getElementById('ticketHours');

const storedData = localStorage.getItem('illus1ve');
const searchData = localStorage.getItem('searchData');
const ticketHoursData = localStorage.getItem('ticketHours');

if (storedData && searchData && ticketHoursData) {
    const userData = JSON.parse(storedData);
    const searchInfo = JSON.parse(searchData);
    const hoursInfo = JSON.parse(ticketHoursData);

    const passengerInfoHTML = `<strong>Username:</strong> ${userData.username}<br>
                            <strong>Full Name:</strong> ${userData.firstName} ${userData.lastName}<br>
                            <strong>Email:</strong> ${userData.email}<br>
                            <strong>Phone Number:</strong> ${userData.phoneNumber}<br>
                            <strong>Gender:</strong> ${userData.gender}<br>
                            <strong>Date of Birth:</strong> ${userData.dateOfBirth}<br>
                            <strong>Country:</strong> ${userData.country}<br>
                            <strong>City:</strong> ${userData.city}<br>
                            <strong>Citizenship:</strong> ${userData.citizenship}<br>
                            <strong>Passport:</strong> ${userData.passport}`;
    passengerInfo.innerHTML = passengerInfoHTML;

    const tripDetailsHTML = `<strong>From:</strong> ${searchInfo.fromDest}<br>
                            <strong>To:</strong> ${searchInfo.toDest}<br>
                            <strong>Departure Date:</strong> ${searchInfo.departureDate}<br>
                            <strong>Departure Hours:</strong> ${hoursInfo.departureHour1} - ${hoursInfo.departureHour2}<br>
                            <strong>Return Date:</strong> ${searchInfo.returnDate}<br>
                            <strong>Return Hours:</strong> ${hoursInfo.returnHour1} - ${hoursInfo.returnHour2}<br>
                            <strong>Number of Passengers:</strong> ${searchInfo.numberOfPassengers}<br>`;
    tripDetails.innerHTML = tripDetailsHTML;
} else {
    alert('No stored data found.');
}

const convertToPDFBtn = document.getElementById('convertToPDF');

convertToPDFBtn.addEventListener('click', function() {
    const element = document.body;

    const opt = {
        margin: 5,
        filename: 'ticket_receipt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
});
