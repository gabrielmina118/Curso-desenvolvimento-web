"use strict";
// const nota:number[] = [10,5,9,2,4]
// const nome:string = "Jose da silva"
// const aprovado:boolean = true
const aluno = {
    nome: "Jose",
    idade: 18,
    aprovado: true
};
function cadastrarAluno(aluno, nota) {
    console.log(aluno, " Sua nota é: ", nota);
}
cadastrarAluno(aluno, 9);
