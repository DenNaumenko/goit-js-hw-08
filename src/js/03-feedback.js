import throttle from 'lodash.throttle';

const form = document.querySelector('form');
const localStorageFormName = 'form-data';
let formData = JSON.parse(localStorage.getItem(localStorageFormName)) || {};
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

email.value = formData.email || '';
message.value = formData.message || '';

function submitHendler(e) {
  e.preventDefault();

  form.reset();
  console.log(formData);
  localStorage.removeItem(localStorageFormName);

  formData = {};
}

function localStorageSaveHandler(e) {
  const { target } = e;

  formData[target.name] = target.value;

  localStorage.setItem(localStorageFormName, JSON.stringify(formData));
}

form.addEventListener('submit', submitHendler);
form.addEventListener('input', throttle(localStorageSaveHandler, 500));