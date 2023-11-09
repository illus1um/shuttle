'use strict';

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

const thisUSer = localStorage.key(0);

// Функция для заполнения полей профиля данными из localStorage
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

  // Получаем данные из localStorage
  const userDataJSON = localStorage.getItem(thisUSer);
  if (userDataJSON) {
      const userData = JSON.parse(userDataJSON);

      // Заполняем поля профиля данными из localStorage
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



// Функция для сохранения данных в localStorage
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

  // Сохраняем данные в объект
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

  // Преобразуем объект в JSON и сохраняем в localStorage
  localStorage.setItem(username, JSON.stringify(userData));
};

// Вызываем функцию для заполнения полей профиля из localStorage
fillProfileFields();

// Добавляем обработчик события для сохранения данных в localStorage при отправке формы
const form = document.getElementById("form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Проверяем, что форма прошла валидацию
  if (form.checkValidity()) {
      // Если форма валидна, сохраняем данные в localStorage
      saveProfileData();

      // Помечаем форму как "была отправлена"
      form.classList.add('was-validated');
  }
});

console.log(localStorage);

const exit = document.getElementById('exit');
exit.addEventListener('click', e => {
    e.preventDefault();
    localStorage.removeItem(thisUSer);
    window.location.href = 'login.html';
});
