import { getProdutoById, updateProdutoDb } from "../database/produtoDb";
import { ProdutosInterfaceDTO } from "../produtoInterface";

export const updateProduto = async (
    id: string,
    produto: ProdutosInterfaceDTO
) => {
    const produtoExist = await getProdutoById(id);

    if (!produtoExist) {
        return "Produto nao encontrado";
    }

    updateProdutoDb(id, produto);
    return "Produto atualizado com sucesso";
};
