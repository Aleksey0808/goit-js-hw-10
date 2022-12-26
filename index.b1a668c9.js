({inputEl:document.querySelector("#search-box")}).inputEl.textContent.value;fetch("https://restcountries.com/v3.1/name/`${name}`").then((e=>e.json())).then((e=>console.log(e))).catch((e=>e));
//# sourceMappingURL=index.b1a668c9.js.map
