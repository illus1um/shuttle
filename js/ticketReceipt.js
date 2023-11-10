'use strict';
const thisUSer = localStorage.key(0);
console.log(localStorage);
const userDataJSON = localStorage.getItem(thisUSer);
const username = userDataJSON.firstName;
console.log(username)


// username,
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     gender,
//     dateOfBirth,
//     country,
//     city,
//     citizenship,
//     passport,