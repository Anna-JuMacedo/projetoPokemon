
const pokemonImg = document.getElementById('pokemon-img');
const pokemonName = document.getElementById('pokemon-name');
const pokemonType = document.getElementById('pokemon-type');
const attacksList = document.getElementById('attacks-list');
const card = document.getElementById('pokemon-card');

function atualizarCard(pokemon) {
    pokemonImg.src = pokemon.imagem;
    pokemonImg.alt = pokemon.nome;
    pokemonName.innerText = pokemon.nome;
    pokemonType.innerText = `Tipo: ${pokemon.tipo}`;

    attacksList.innerHTML = pokemon.ataques.map(ataque => `<li>${ataque}</li>`).join('');


    card.className = 'pokemon-card ' + pokemon.tipo.toLowerCase();
}


const pikachu = {
    nome: 'Pikachu',
    tipo: 'Elétrico',
    imagem: 'images/pikachu.jpg',
    ataques: ['Choque do Trovão', 'Ataque Rápido', 'Investida Elétrica']
};

const charmander = {
    nome: 'Charmander',
    tipo: 'Fogo',
    imagem: 'images/charmander.jpg',
    ataques: ['Lança-chamas', 'Garra de Fogo', 'Investida']
};

const squirtle = {
    nome: 'Squirtle',
    tipo: 'Água',
    imagem: 'images/squirtle.jpg',
    ataques: ["Jato d'Água", 'Bolhas', 'Cauda de Água']
};


function mostrarPikachu() {
    atualizarCard(pikachu);
}

function mostrarCharmander() {
    atualizarCard(charmander);
}

function mostrarSquirtle() {
    atualizarCard(squirtle);
}
