import { connectionDb } from "../database/connection";
import {
    createProduto,
    deleteProdutoDb,
    getProdutoById,
    getProdutos,
    getProdutosPromocao,
} from "../database/produtoDb";
import { ProdutosInterface, ProdutosInterfaceDTO } from "../produtoInterface";

export const BuscarProdutosController = async () => {
    const result = await getProdutos();
    return result;
};

export const BuscarProdutosPromocaoController = async () => {
    const result = await getProdutosPromocao();
    return result;
};

export const CriarProduto = async (produto: ProdutosInterfaceDTO) => {
    const novoProduto: ProdutosInterface = {
        id: Date.now().toString(),
        nome: produto.nome,
        descricao: produto.descricao,
        promocao: produto.promocao,
        preco: produto.preco,
    };

    await createProduto(novoProduto);
};

export const DeletarProduto = async (id: string) => {
    const produtoExist = await getProdutoById(id);

    if (!produtoExist) {
        return "Produto nao encontrado";
    }

    await deleteProdutoDb(id);

    return "Produto deletado com sucesso";
};
