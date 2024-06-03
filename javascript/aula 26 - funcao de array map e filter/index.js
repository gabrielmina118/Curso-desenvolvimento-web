const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
];
//nova variável declarada para receber o retorno do map
const nomeDosPokemons = pokemons.map((pokemon, indice, array) => {
    return pokemon.nome; //aqui é definido que o array nomeDosPokemons recebe só o nome
});

const pokemons2 = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
];

const apenasPokemonsDeGrama = pokemons2.filter((pokemon, indice, array) => {
    return pokemon.tipo === "grama";
});

