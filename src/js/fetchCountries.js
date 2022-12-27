export function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?capital,population,flags.svg,languages`;
    fetch(url).then(response => {
        return response.json()
    }
    );
  }