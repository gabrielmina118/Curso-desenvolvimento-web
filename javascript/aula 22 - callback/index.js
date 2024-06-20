const verificaPar = (numero, imprimir) => {
    if (numero % 2 === 0) {
        const resultado = numero / 2;
        imprimir(resultado);
    }
};

const imprimeMensagem = (valor) => {
    console.log("O resultado da sua conta é", valor);
};

//chamada da função
verificaPar(2, imprimeMensagem);
