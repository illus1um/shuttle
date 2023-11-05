'use strict';
const firstKey = localStorage.key(0);
const userDataJSON = localStorage.getItem(firstKey);
const userData = JSON.parse(userDataJSON);

const usernameValue = userData.username; 
const emailValue = userData.email;

const usernameHTML = document.getElementById('disabledTextInput');
const emailHTML = document.getElementById('validationCustom03');

const form = document.getElementById('form');
const firstName = document.getElementById('validationCustom01');
const lastName = document.getElementById('validationCustom02')
const phone = document.getElementById('validationCustom04');
const gender = document.getElementById('validationCustom05');
const dateOfBirth = document.getElementById('validationCustom06');

const country = document.getElementById('validationCustom07');
const city = document.getElementById('validationCustom08');
const citizenship = document.getElementById('validationCustom09');
const passport = document.getElementById('validationCustom10');

usernameHTML.setAttribute('value', usernameValue);
emailHTML.setAttribute('value', emailValue);


(() => {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false)
    });
})();

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const user = {
        username: usernameValue,
        email: emailValue,
        name: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        gender: gender.value,
        dateOfBirth: dateOfBirth.value,
        country: country.value,
        city: city.value,
        citizenship: citizenship.value,
        passport: passport.value,
    };
    localStorage.setItem(usernameValue, JSON.stringify(user));
    setDatas();
    console.log(user);
    
});

if (localStorage.getItem(firstKey)) {
    setDatas();
}

const setDatas = () => {
    firstName.setAttribute('value', userData.name);
    lastName.setAttribute('value', userData.lastName);
    phone.setAttribute('value', userData.phone);
    gender.setAttribute('value', userData.gender);
    dateOfBirth.setAttribute('value', userData.dateOfBirth);
    country.setAttribute('value', userData.country);
    city.setAttribute('value', userData.city);
    citizenship.setAttribute('value', userData.citizenship);
    passport.setAttribute('value', userData.passport);
}

const exit = document.getElementById('exit');
exit.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem(firstKey);
    window.location.href = 'login.html';
});

console.log(localStorage);