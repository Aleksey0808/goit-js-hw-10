import './css/styles.css';

const refs = {
  inputEl: document.querySelector('#search-box'),
};
const inputValue = refs.inputEl.textContent.value;

const DEBOUNCE_DELAY = 300;

function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/`${name}`').then(response =>
    response.json()
  );
}

fetchCountries(inputValue)
  .then(country => console.log(country))
  .catch(error => error);
