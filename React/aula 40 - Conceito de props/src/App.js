import CardProduto from "./components/CardProduto";

function App() {
    
    return (
        <div>
            <CardProduto
                produtoCadastrado={"Alexa"}
                preco={"300"}
                descricao={"Essa alexa é muito util"}
            />
            <CardProduto
                produtoCadastrado={"Pc gamer"}
                preco={"5000"}
                descricao={"Esse pc vai rodar muito jogo"}
            />
        </div>
    );
}

export default App;
