function getRandomPokemon() {
    // Generar un número aleatorio entre 1 y 100 (el total de Pokémon en la Pokédex)
    const randomId = Math.floor(Math.random() * 100) + 1;

    // Hacer la solicitud fetch a la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        .then(response => {
            // Verificar si la respuesta fue exitosa
            if (!response.ok) {
                throw new Error('No se pudo obtener el Pokémon');
            }
            return response.json();
        })
        .then(data => {
               // Mostrar nombre del Pokémon
document.getElementById('pokemon-name').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

  // Mostrar imagen del Pokémon
  const imageUrl = data.sprites.front_default;
  document.getElementById('pokemon-image').src = imageUrl;

  // Mostrar estadísticas del Pokémon
  let statsHtml = '<h3>Estadísticas:</h3>';
  data.stats.forEach(stat => {
statsHtml += `<p class="stat">${stat.stat.name.toUpperCase()}: ${stat.base_stat}</p>`;
  });
  document.getElementById('pokemon-stats').innerHTML = statsHtml;
        })
        .catch(error => {
            // Manejo de errores
            document.getElementById('pokemon-info').innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}
window.onload = getRandomPokemon(9);