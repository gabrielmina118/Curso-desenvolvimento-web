import { ProdutosInterface, ProdutosInterfaceDTO } from "../produtoInterface";
import { connectionDb } from "./connection";

export const getProdutos = async () => {
    const produtos: ProdutosInterface[] = await connectionDb("produto");
    return produtos;
};

export const getProdutosPromocao = async () => {
    const produtos: ProdutosInterface[] = await connectionDb("produto").where({
        promocao: 1,
    });

    return produtos;
};

export const createProduto = async (novoProduto: ProdutosInterface) => {
    await connectionDb("produto").insert(novoProduto);
};

export const getProdutoById = async (id: string) => {
    const produtoExist = await connectionDb("produto").where({ id }).first();
    return produtoExist;
};

export const updateProdutoDb = async (
    id: string,
    produto: ProdutosInterfaceDTO
) => {
    await connectionDb("produto").where({ id }).update({
        nome: produto.nome,
        descricao: produto.descricao,
        promocao: produto.promocao,
        preco: produto.preco,
    });
};

export const deleteProdutoDb = async (id: string) => {
  await connectionDb("produto").where({ id }).del();
};
