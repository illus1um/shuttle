'use strict';

const directions = [
    {
    from: 'Astana',
    to: 'Almaty',
    tickets: [
        {
            departure: '2023-11-11',
            depHour: '20:00 - 22:00',
            return: '2023-11-12',
            returnHour: '15:00 - 17:00',
            price: 22,
        },
        {
            departure: '2023-11-11',
            depHour: '22:00 - 00:00',
            return: '2023-11-12',
            returnHour: '10:00 - 12:00',
            price: 12,
        },
        {
            departure: '2023-11-11',
            depHour: '20:45 - 22:45',
            return: '2023-11-12',
            returnHour: '18:00 - 20:00',
            price: 213,
        },
        {
            departure: '2023-11-11',
            depHour: '18:15 - 20:15',
            return: '2023-11-12',
            returnHour: '14:30 - 16:30',
            price: 79,
        },
        {
            departure: '2023-11-11',
            depHour: '20:00 - 22:00',
            return: '2023-11-12',
            returnHour: '11:00 - 13:00',
            price: 88,
        },
        {
            departure: '2023-11-11',
            depHour: '10:00 - 12:00',
            return: '2023-11-12',
            returnHour: '11:00 - 13:00',
            price: 712,
        }, 
        {
            departure: '2023-11-11',
            depHour: '09:00 - 11:00',
            return: '2023-11-12',
            returnHour: '00:00 - 02:00',
            price: 72,
        },
    ],
    },
    {
        from: 'New-York',
        to: 'Toronto',
        tickets: [
            {
                departure: '2023-11-11',
                depHour: '20:00 - 22:00',
                return: '2023-11-12',
                returnHour: '15:00 - 17:00',
                price: 22,
            },
            {
                departure: '21.10.2023',
                depHour: '20:00 - 22:00',
                return: '28.10.2023',
                returnHour: '15:00 - 17:00',
                price: 22,
            },
            {
                departure: '21.10.2023',
                depHour: '20:00 - 22:00',
                return: '28.10.2023',
                returnHour: '15:00 - 17:00',
                price: 22,
            },
            {
                departure: '21.10.2023',
                depHour: '20:00 - 22:00',
                return: '28.10.2023',
                returnHour: '15:00 - 17:00',
                price: 22,
            },
    
            {
                departure: '10.10.2023',
                depHour: '10:00 - 12:00',
                return: '17.10.2023',
                returnHour: '11:00 - 13:00',
                price: 712,
            },
            
            {
                departure: '10.10.2023',
                depHour: '10:00 - 12:00',
                return: '14.10.2023',
                returnHour: '00:00 - 02:00',
                price: 72,
            },
        ],
    }
];

const generateTitle = (direction) => {
    const titleHTML = `${direction}`;
    const title = document.createElement('h1');
    title.classList.add('text-center');
    title.innerHTML = titleHTML;

    const tickets = document.getElementById('tickets');
    tickets.appendChild(title);
}

const generateTicket = (ticket, i) => {
    const tickets = document.getElementById('tickets');
    const ticketHTML = `
        <div class="col p-3 mb-4" data-price="${ticket.price}">
            <div class="row text-center">
                
                <div class="col-lg-4 pe-5 mt-4">
                    <h3>${ticket.price}$</h3>
                    <button type="button" class="btn btn-primary" onclick="ticketPick(${i})" data-bs-toggle="modal" data-bs-target="#exampleModal">Buy ticket</button>
                </div>

                <div class="col-lg-6 p-1">
                    <h4>Departure: ${ticket.departure}</h4>
                    <h5 id="currentDepartureHour${i}">
                        ${ticket.depHour}
                    </h5>
                    
                    <h4>Arrival: ${ticket.return}</h4>
                    <h5  id="currentReturnHour${i}">
                        ${ticket.returnHour}
                    </h5>
                </div>
            </div>
        </div>
    `;

    const div = document.createElement('div');
    div.setAttribute('id', 'ticketsContainer');
    div.innerHTML = ticketHTML;
    tickets.appendChild(div);
    
}

function displayErrorMessage(message) {
    const errorAlert = document.getElementById('error-alert');
    errorAlert.textContent = message;
    errorAlert.style.display = 'block';
}

const searchData = localStorage.getItem('searchData');
const searchObj = JSON.parse(searchData);

const from = searchObj.fromDest;
const to = searchObj.toDest;
const departureDate = searchObj.departureDate;
const returnDate = searchObj.returnDate;
const numberOfPassengers = searchObj.numberOfPassengers;

const directionName = `From ${from} to ${to}`; 
generateTitle(directionName);

let bool = false;

for (let i = 0; i < directions.length; i++) {
    for (let j = 0; j < directions[i].tickets.length; j++) {
        if (from === directions[i].from && to === directions[i].to && 
            departureDate === directions[i].tickets[j].departure && returnDate === directions[i].tickets[j].return) {
                generateTicket(directions[i].tickets[j], j);        
                bool = true;
        } 
    }
}

if (!bool) {
    displayErrorMessage(`We couldn't find any tickets from ${from} to ${to}. Sorry`)
}


function ticketPick(index) {
    const departureHourElement = document.getElementById(`currentDepartureHour${index}`);
    const departureHourText = departureHourElement.textContent;
    const depHours = departureHourText.split(' - ');

    const returnHourElement = document.getElementById(`currentReturnHour${index}`);
    const returnHourText = returnHourElement.textContent;
    const returnHours = returnHourText.split(' - ');

    const ticketDetails = {
        departureHour1: depHours[0].trim(),
        departureHour2: depHours[1].trim(),
        returnHour1: returnHours[0].trim(),
        returnHour2: returnHours[1].trim(),
    }

    localStorage.setItem('ticketHours', JSON.stringify(ticketDetails));

    const ticketInfoHTML = `
        <div class="container px-4 py-2">
            <div class="row mb-4">
                <h3>${from} - ${to}</h3>
                <div class="col-lg-12 p-3" style="background-color: rgb(239, 239, 239); border-radius: 10px;">
                    <h6>
                        <i class='bx bxs-plane-take-off' style='color:#297fb7'></i> ${depHours[0]} &nbsp; ${from} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${departureDate}
                    </h6>
                    <h6>
                        <i class='bx bxs-plane-land' style='color:#297fb7'></i> ${depHours[1]} &nbsp; ${to} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${departureDate}
                    </h6>
                </div>
                
            </div>

            <div class="row">
                <h3>${to} - ${from}</h3>
                <div class="col-lg-12 p-3" style="background-color: rgb(239, 239, 239); border-radius: 10px;">
                    <h6>
                        <i class='bx bxs-plane-take-off' style='color:#297fb7'></i> ${returnHours[0]} &nbsp; ${to} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${returnDate}
                    </h6>
                    <h6>
                        <i class='bx bxs-plane-land' style='color:#297fb7'></i> ${returnHours[1]} &nbsp; ${from} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ${returnDate}
                    </h6>
                </div>
            </div>
        </div>
    `;

    const modalBody = document.getElementById('ticketModal');

    const ticketFullInfo = document.createElement('div');

    ticketFullInfo.innerHTML = ticketInfoHTML;

    ticketFullInfo.setAttribute('id', 'pickedTicket');

    modalBody.appendChild(ticketFullInfo);
}

function deleteTicketInfo() {
    const modalBody = document.getElementById('ticketModal');

    const ticketFullInfo = document.getElementById('pickedTicket');

    modalBody.removeChild(ticketFullInfo);
}


const cheapestFirstRadio = document.getElementById('flexSwitchCheckDefault');

const ticketsContainer = document.getElementById('ticketsContainer');

cheapestFirstRadio.addEventListener('change', function() {
    if (cheapestFirstRadio.checked) {
        sortTicketsByPrice();
    }
});

function sortTicketsByPrice() {
    const ticketElements = document.querySelectorAll('.col.p-3.mb-4');
    const ticketArray = Array.from(ticketElements);

    ticketArray.sort(function(a, b) {
        const priceA = parseFloat(a.getAttribute('data-price'));

        const priceB = parseFloat(b.getAttribute('data-price'));

        return priceA - priceB;
    });

    ticketsContainer.innerHTML = '';

    ticketArray.forEach(function(ticket) {
        ticketsContainer.appendChild(ticket);
    });
}

function buyTicket() {
    window.location.href = 'ticketReceipt.html';
}