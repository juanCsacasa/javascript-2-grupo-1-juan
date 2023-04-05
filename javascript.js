const listChutemon = 'https://pokeapi.co/api/v2/pokemon?offset=110&limit=100';
const nameChutemon = `https://pokeapi.co/api/v2/pokemon/{name}`
const chutemonSelect = document.getElementById('pokemonSelect');
const chutemonDetail = document.getElementById('pokemon-detail');

fetch(listChutemon)
  .then(response => response.json())
  .then(data => {
    const pokemonList = data.results;
    pokemonList.forEach(pokemon => {
      const option = document.createElement('option');
      option.value = pokemon.name;
      option.text = pokemon.name;
      chutemonSelect.appendChild(option);
    });
  });

chutemonSelect.addEventListener('change', () => {
  const Chutemon = chutemonSelect.value;
  const urlChutemon = nameChutemon.replace('{name}', Chutemon);
  fetch(urlChutemon)
    .then(response => response.json())
    .then(data => {
      chutemonDetail.innerHTML = `
        <h2>${data.name}</h2>
        <p class="chutemonNumero">${data.id}</p>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Altura: ${data.height / 10} m</p>
        <p>Peso: ${data.weight / 10} kg</p>
        <h2>Tipo:</h2>
        <ul>
          ${data.types.map(type =>`<li><p>${type.type.name}</p></li>`).join('')}
        </ul>
        <h2>Habilidades:</h2>
        <ul>
          ${data.abilities.map(ability => `<li><p>${ability.ability.name}</p></li>`).join('')}
        </ul>
        <h2>Estadísticas:</h2>
        <ul>
          ${data.stats.map(stat => `<li><p>${stat.stat.name}: ${stat.base_stat}</p></li>`).join('')}
        </ul>
      
      `;
    });
});