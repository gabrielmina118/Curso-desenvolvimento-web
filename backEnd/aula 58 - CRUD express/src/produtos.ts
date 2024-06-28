export interface ProdutosInterface{
    id:string
    nome:string
    descricao:string
    preco:number
    promocao:boolean
}

export const produtos: ProdutosInterface[] = [
    {
        id: "1",
        nome: "Smartphone X",
        descricao: "Smartphone com tela de 6.5 polegadas e câmera de 48MP.",
        preco: 2999.99,
        promocao: true,
    },
    {
        id: "2",
        nome: "Notebook Pro",
        descricao: "Notebook com processador Intel i7 e 16GB de RAM.",
        preco: 5999.99,
        promocao: false,
    },
    {
        id: "3",
        nome: "TV 4K Ultra HD",
        descricao: "Televisão 4K de 55 polegadas com HDR.",
        preco: 3999.99,
        promocao: true,
    },
    {
        id: "4",
        nome: "Fone de Ouvido Bluetooth",
        descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
        preco: 799.99,
        promocao: false,
    },
    {
        id: "5",
        nome: "Smartwatch",
        descricao:
            "Relógio inteligente com monitoramento de atividades e batimentos cardíacos.",
        preco: 1299.99,
        promocao: true,
    },
    
];