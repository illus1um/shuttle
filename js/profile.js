'use strict';

(() => {
  const forms = document.querySelectorAll('.needs-validation')

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

const thisUSer = localStorage.key(0);

const fillProfileFields = () => {
  const usernameField = document.getElementById("disabledTextInput");
  const firstNameField = document.getElementById("validationCustom01");
  const lastNameField = document.getElementById("validationCustom02");
  const emailField = document.getElementById("validationCustom03");
  const phoneNumberField = document.getElementById("validationCustom04");
  const genderField = document.getElementById("validationCustom05");
  const dateOfBirthField = document.getElementById("validationCustom06");
  const countryField = document.getElementById("validationCustom07");
  const cityField = document.getElementById("validationCustom08");
  const citizenshipField = document.getElementById("validationCustom09");
  const passportField = document.getElementById("validationCustom10");

  const userDataJSON = localStorage.getItem(thisUSer);
  if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);

      usernameField.value = userData.username || "";
      firstNameField.value = userData.firstName || "";
      lastNameField.value = userData.lastName || "";
      emailField.value = userData.email || "";
      phoneNumberField.value = userData.phoneNumber || "";
      genderField.value = userData.gender || "";
      dateOfBirthField.value = userData.dateOfBirth || "";
      countryField.value = userData.country || "";
      cityField.value = userData.city || "";
      citizenshipField.value = userData.citizenship || "";
      passportField.value = userData.passport || "";
  }
};

const saveProfileData = () => {
  const username = document.getElementById("disabledTextInput").value;
  const firstName = document.getElementById("validationCustom01").value;
  const lastName = document.getElementById("validationCustom02").value;
  const email = document.getElementById("validationCustom03").value;
  const phoneNumber = document.getElementById("validationCustom04").value;
  const genderSelect = document.getElementById("genderSelect");
  const gender = genderSelect.options[genderSelect.selectedIndex].value;
  const dateOfBirth = document.getElementById("validationCustom06").value;
  const country = document.getElementById("validationCustom07").value;
  const city = document.getElementById("validationCustom08").value;
  const citizenship = document.getElementById("validationCustom09").value;
  const passport = document.getElementById("validationCustom10").value;

  const userData = {
    username,
    firstName,
    lastName,
    email,
    phoneNumber,
    gender,
    dateOfBirth,
    country,
    city,
    citizenship,
    passport,
  };

  localStorage.setItem(username, JSON.stringify(userData));
};

fillProfileFields();

const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (form.checkValidity()) {
      saveProfileData();
      form.classList.add('was-validated');
  }
});


const exit = document.getElementById('exit');
exit.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem(thisUSer);
    window.location.href = 'login.html';
});
