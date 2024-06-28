const produtos = [
    { nome: "Pc gamer", descricao: "Esse é um pc gamer" },
    { nome: "Smartphone", descricao: "Um smartphone de última geração" },
    {
        nome: "Fone de ouvido",
        descricao: "Fone de ouvido com cancelamento de ruído",
    },
    {
        nome: "Smartwatch",
        descricao: "Relógio inteligente com várias funcionalidades",
    },
    {
        nome: "Tablet",
        descricao: "Tablet com tela de alta resolução e grande desempenho",
    },
];

const produtoMain = document.getElementById("produtos");

produtos.forEach((produto) => {
    const novoElemento = document.createElement("div");
    novoElemento.classList.add("card");
    novoElemento.innerHTML = `
    <img src="./product1.png" />
        <div class="card-body">
            <h6 class="card-title">${produto.nome}</h6>
            <p class="card-text">${produto.descricao}</p>
        </div>
`;
    produtoMain.appendChild(novoElemento);
});
