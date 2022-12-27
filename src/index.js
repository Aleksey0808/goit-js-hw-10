import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import Notify from 'notiflix';

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;
let searchCountry = '';

refs.inputEl.addEventListener('input', debounce(textInput, DEBOUNCE_DELAY));

function textInput(e) {
  e.preventDefault();
  let searchCountry = refs.inputEl.value;
  if (searchCountry.trim() === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }
}

fetchCountries(searchCountry.trim())
  .then(country => {
    console.log(country);
    if (country.length > 10) {
      Notify.info('Too many matches found. Please enter a more specific name.');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
    }
  })
  .catch(error => error);
