function calculoImc(alturaCadastrada, pesoCadastrado){
    const altura = alturaCadastrada
    const peso = pesoCadastrado
    const imc = peso / (altura * altura)
    console.log(imc)
}

calculoImc(1.86,70)
calculoImc(1.60,50)