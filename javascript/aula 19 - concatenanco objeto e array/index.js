//Nós queremos acessar o brinquedo "osso"

const paiDePet = {
    nome: "Gabriel",
    pet: {
        nome: "Dino",
        raca: "caramelo raiz",
        idade: 6,
        brinquedos: ["bolinha", "mordedor", "osso"],
    },
};

//1. acessamos o "objeto pet" a partir da variável "paiDePet"
paiDePet.pet;

//2. acessamos a propriedade brinquedo
paiDePet.pet.brinquedos;

//3. Acessamos o índice em que está o brinquedo "osso"
paiDePet.pet.brinquedos[2];
