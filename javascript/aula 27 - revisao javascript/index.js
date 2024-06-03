var nome = "João";
let idade = 25;
const cidade = "São Paulo";

let a = 10;
let b = 5;

// -------------------------------------------------------------------------------
console.log(a + b); // Soma: 15
console.log(a - b); // Subtração: 5
console.log(a * b); // Multiplicação: 50
console.log(a / b); // Divisão: 2
console.log(a % b); // Módulo: 0
console.log(a ** b); // Exponenciação: 100000

console.log(a > b); // Maior que: true
console.log(a < b); // Menor que: false
console.log(a >= b); // Maior ou igual a: true
console.log(a <= b); // Menor ou igual a: false
console.log(a == b); // Igual a: false
console.log(a != b); // Diferente de: true
console.log(a === b); // Estritamente igual a (mesmo tipo e valor): false
console.log(a !== b); // Estritamente diferente de (tipo ou valor): true

// -------------------------------------------------------------------------------
console.log(true && false); // E lógico: false
console.log(true || false); // OU lógico: true
console.log(!true); // NÃO lógico: false

// -------------------------------------------------------------------------------
function soma(x, y) {
  return x + y;
}

console.log(soma(5, 10)); // 15

// -------------------------------------------------------------------------------
const subtracao = (x, y) => x - y;

console.log(subtracao(10, 5)); // 5

// -------------------------------------------------------------------------------
let texto = "Olá, Mundo!";
console.log(texto.length); // Comprimento da string: 12
console.log(texto.toUpperCase()); // Converte para maiúsculas: OLÁ, MUNDO!
console.log(texto.toLowerCase()); // Converte para minúsculas: olá, mundo!
console.log(texto.includes("Mundo")); // Verifica se inclui "Mundo": true
console.log(texto.replace("Mundo", "JavaScript")); // Substitui "Mundo" por "JavaScript": Olá, JavaScript!

// -------------------------------------------------------------------------------
let numeros = [1, 2, 3, 4, 5];

console.log(numeros.length); // Comprimento do array: 5
console.log(numeros[0]); // Primeiro elemento: 1
numeros.push(6); // Adiciona um elemento no final
console.log(numeros); // [1, 2, 3, 4, 5, 6]
numeros.pop(); // Remove o último elemento
console.log(numeros); // [1, 2, 3, 4, 5]


// -------------------------------------------------------------------------------
numeros = [1, 2, 3, 4, 5];

console.log(numeros.map(x => x * 2)); // [2, 4, 6, 8, 10]
console.log(numeros.filter(x => x % 2 === 0)); // [2, 4]
console.log(numeros.reduce((acc, x) => acc + x, 0)); // Soma dos elementos: 15

// -------------------------------------------------------------------------------
let nota = 75;

if (nota >= 60) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// -------------------------------------------------------------------------------
let cor = "vermelho";

switch (cor) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

// -------------------------------------------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

let j = 0;
while (j < 5) {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
}

// -------------------------------------------------------------------------------
let letras = ["a", "b", "c"];

for (let letra of letras) {
    console.log(letra); // a, b, c
}

// -------------------------------------------------------------------------------
function saudacao(nome, callback) {
    console.log("Olá, " + nome);
    callback();
}

saudacao("João", () => {
    console.log("Bem-vindo!");
});

// -------------------------------------------------------------------------------
numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(x => x * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

let pares = numeros.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]
