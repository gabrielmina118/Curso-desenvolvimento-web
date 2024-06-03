let frutas = ["maçã", "banana", "laranja"];
console.log(frutas.length); // Resultado: 3

let frutas = []; //podemos declarar um array vazio

frutas.push("maçã");
console.log(frutas); // Resultado: ["maçã"]

frutas.push("banana");
console.log(frutas); // Resultado: ["maçã", "banana"]

frutas.push("laranja");
console.log(frutas); // Resultado: ["maçã", "banana", "laranja"]


let frutas = ["maçã", "banana", "laranja"];
let ultimaFruta = frutas.pop();
console.log(ultimaFruta); // Resultado: laranja
console.log(frutas); // Resultado: ["maçã", "banana"]

let frutas = ["maçã", "banana"];
frutas.unshift("laranja");
console.log(frutas); // Resultado: ["laranja", "maçã", "banana"]

let frutas = ["maçã", "banana", "laranja"];
let primeiraFruta = frutas.shift();
console.log(primeiraFruta); // Resultado: maçã
console.log(frutas); // Resultado: ["banana", "laranja"]

let frutas = ["maçã", "banana", "laranja", "abacaxi"];
frutas.splice(1, 2);
console.log(frutas); // Resultado: ["maçã", "abacaxi"]
