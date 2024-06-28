const CardProduto = ({ produtoCadastrado, descricao, preco }) => {
    return (
        <div>
            <h1>{produtoCadastrado}</h1>
            <h2>{descricao}</h2>
            <p>R$ {preco}</p>
            <button>Comprar</button>
        </div>
    );
};

export default CardProduto;
