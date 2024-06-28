// const nota:number[] = [10,5,9,2,4]
// const nome:string = "Jose da silva"
// const aprovado:boolean = true

interface AlunoInterface {
    nome: string;
    idade: number;
    aprovado: boolean;
    nota: number;
}

const aluno: AlunoInterface = {
    nome: "Jose",
    idade: 18,
    aprovado: true,
    nota: 10,
};

const aluno2: AlunoInterface = {
    nome: "maria",
    idade: 17,
    aprovado: true,
    nota: 10,
};

const alunos:AlunoInterface[] = [aluno,aluno2]

function cadastrarAluno(aluno: AlunoInterface, nota: number) {
    console.log(aluno, " Sua nota é: ", nota);
}

cadastrarAluno(aluno,9);