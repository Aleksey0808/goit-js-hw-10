import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { showCountryList, showCountryCard } from './js/marcup';
import { Notify } from 'notiflix';

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  e.preventDefault();

  let searchCountry = refs.inputEl.value.trim();

  if (searchCountry === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(searchCountry)
    .then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return;
      }

      if (countries.length > 1 && countries.length <= 10) {
        const markup = countries.map(country => showCountryList(country));
        refs.countryList.innerHTML = markup.join('');
        refs.countryInfo.innerHTML = '';
      }

      if (countries.length === 1) {
        const cardMarcup = countries.map(country => showCountryCard(country));
        refs.countryList.innerHTML = '';
        refs.countryInfo.innerHTML = cardMarcup.join('');
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
      refs.countryInfo.innerHTML = '';
      refs.countryList.innerHTML = '';
      return error;
    });
}
