document.addEventListener("DOMContentLoaded", function () {

    document
        .getElementById("poke-form")
        .addEventListener("submit", function (event) {
    event.preventDefault();

      const pokemonName = document.getElementById("pokemon-search");
      const pokemonNameValue = pokemonName;
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNameValue}`;
      console.log(url);

      const request = (url) => {
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            data.forEach((user) => {
              document.body.innerHTML = buildString(user);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };

      let buildString = (user) => {
        return `<h1>${user.name}</h1>`;
      };
    });
});
