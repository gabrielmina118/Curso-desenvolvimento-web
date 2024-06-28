export interface ProdutosInterface{
    nome:string
    descricao:string
    preco:number
    promocao:boolean
}

export const produtos: ProdutosInterface[] = [
    {
        nome: "Smartphone X",
        descricao: "Smartphone com tela de 6.5 polegadas e câmera de 48MP.",
        preco: 2999.99,
        promocao: true,
    },
    {
        nome: "Notebook Pro",
        descricao: "Notebook com processador Intel i7 e 16GB de RAM.",
        preco: 5999.99,
        promocao: false,
    },
    {
        nome: "TV 4K Ultra HD",
        descricao: "Televisão 4K de 55 polegadas com HDR.",
        preco: 3999.99,
        promocao: true,
    },
    {
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
        preco: 799.99,
        promocao: false,
    },
    {
        nome: "Smartwatch",
        descricao:
            "Relógio inteligente com monitoramento de atividades e batimentos cardíacos.",
        preco: 1299.99,
        promocao: true,
    },
    {
        nome: "Console de Videogame",
        descricao: "Console de última geração com suporte a jogos em 4K.",
        preco: 4499.99,
        promocao: false,
    },
    {
        nome: "Câmera DSLR",
        descricao: "Câmera profissional com lente de 18-55mm.",
        preco: 3499.99,
        promocao: true,
    },
    {
        nome: "Caixa de Som Portátil",
        descricao: "Caixa de som com bluetooth e bateria de longa duração.",
        preco: 499.99,
        promocao: false,
    },
    {
        nome: "Tablet",
        descricao: "Tablet com tela de 10 polegadas e 64GB de armazenamento.",
        preco: 1999.99,
        promocao: true,
    },
    {
        nome: "Aspirador de Pó Robô",
        descricao: "Aspirador de pó inteligente com mapeamento de ambientes.",
        preco: 2299.99,
        promocao: false,
    },
];