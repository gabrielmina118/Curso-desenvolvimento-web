const numeros = [8, 37, 39, 50, 59, 60];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("o número é par");
    } else {
        console.log("o número é ímpar");
    }
}

const numeros2 = [14, 67, 89, 15, 23]

for (let numero of numeros2) {
    console.log(numero); //será impresso o valor de cada item do array: 14, 67 ...
}

