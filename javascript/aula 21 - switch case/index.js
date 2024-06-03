let preco;

const fruta = prompt("digite o nome da fruta");

if (fruta === "banana") {
    preco = 5;
} else if (fruta === "laranja") {
    preco = 4.5;
} else if (fruta === "maçã") {
    preco = 7;
} else if (fruta === "limão") {
    preco = 3;
} else if (fruta === "melão") {
    preco = 6;
} else if (fruta === "melancia") {
    preco = 10;
} else {
    console.log("fruta não encontrada");
}

let preco;

const fruta = prompt("digite o nome da fruta");

switch (fruta) {
    case "banana":
        preco = 5;
        break;
    case "laranja":
        preco = 4.5;
        break;
    case "maçã":
        preco = 7;
        break;
    case "limão":
        preco = 3;
        break;
    case "melão":
        preco = 6;
        break;
    case "melancia":
        preco = 10;
        break;
    default:
        console.log("fruta não encontrada");
}