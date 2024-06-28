export interface ProdutosInterface {
    id: string;
    nome: string;
    preco: number;
    descricao: string;
    promocao: boolean;
}

export interface ProdutosInterfaceDTO {
    nome: string;
    preco: number;
    descricao: string;
    promocao: boolean;
}