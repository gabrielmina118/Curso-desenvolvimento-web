function calculoImc(alturaCadastrada, pesoCadastrado) {
    const altura = alturaCadastrada;
    const peso = pesoCadastrado;
    const imc = peso / (altura * altura);
    return imc
}

// Chamar ou invocar a funcao
const imcGabriel = calculoImc(1.86,70)
console.log(imcGabriel)
