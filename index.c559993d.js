!function(){({inputEl:document.querySelector("#search-box")}).inputEl.textContent.value;fetch("https://restcountries.com/v3.1/name/`${name}`").then((function(n){return n.json()})).then((function(n){return console.log(n)})).catch((function(n){return n}))}();
//# sourceMappingURL=index.c559993d.js.map
