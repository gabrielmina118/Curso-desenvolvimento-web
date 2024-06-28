import CardProduto from "./components/CardProduto";
import { produtos } from "./produtos";

function App() {
    return (
        <div>
            {produtos.map((produto) => {
                return (
                    <CardProduto
                        nome={produto.nome}
                        descricao={produto.descricao}
                    />
                );
            })}
        </div>
    );
}

export default App;
