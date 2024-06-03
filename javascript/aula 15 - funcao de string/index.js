let texto = "Olá, mundo!";
let tamanho = texto.length;
console.log(tamanho); // Resultado: 12

let nome = "joão";
let nomeMaiusculo = nome.toUpperCase();
console.log(nomeMaiusculo); // Resultado: "JOÃO"

let nome = "MARIA";
let nomeMinusculo = nome.toLowerCase();
console.log(nomeMinusculo); // Resultado: "maria"

let texto = "   Olá, mundo!   ";
let textoLimpo = texto.trim();
console.log(textoLimpo); // Resultado: "Olá, mundo!"


//substitui apenas a primeira ocorrência

let frase = "Eu gosto de maçãs.";
let novaFrase = frase.replace("maçãs", "laranjas");
console.log(novaFrase); // Resultado: "Eu gosto de laranjas."


//substitui todas as ocorrências

let texto = "banana, banana, maçã";
let novoTexto = texto.replaceAll("banana", "laranja");
console.log(novoTexto); // Resultado: "laranja, laranja, maçã"


let frase = "O JavaScript é uma linguagem de programação poderosa.";
let temJavaScript = frase.includes("JavaScript");
console.log(temJavaScript); // Resultado: true

let texto = "Olá, mundo!";
let temOla = texto.includes("ola");
console.log(temOla); // Resultado: false
