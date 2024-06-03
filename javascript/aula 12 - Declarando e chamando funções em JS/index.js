// Função para calcular a área de um quadrado
function calcularAreaDoQuadrado(lado) {
    return lado * lado;
}

// Função para somar dois números
function somarDoisNumeros(a, b) {
    return a + b;
}

// Exemplo de uso das funções
const lado = 5;
const area = calcularAreaDoQuadrado(lado);
console.log(`A área do quadrado com lado ${lado} é ${area}`); // A área do quadrado com lado 5 é 25

const num1 = 7;
const num2 = 3;
const soma = somarDoisNumeros(num1, num2);
console.log(`A soma de ${num1} e ${num2} é ${soma}`); // A soma de 7 e 3 é 10
