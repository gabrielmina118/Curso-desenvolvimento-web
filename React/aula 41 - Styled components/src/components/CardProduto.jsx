import { MainTitle } from "../App";

const CardProduto = ({ produtoCadastrado, descricao, preco }) => {
    return (
        <div>
            <MainTitle>{produtoCadastrado}</MainTitle>
            <h2>{descricao}</h2>
            <p>R$ {preco}</p>
            <button>Comprar</button>
        </div>
    );
};

export default CardProduto;
