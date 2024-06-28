import { useState } from "react";
import CardProduto from "./components/CardProduto";
import { produtos } from "./produtos";

function App() {
    const [valorMinimo, setValorMinimo] = useState(0);
    const [valorMaximo, setValorMaximo] = useState(0);

    const handleValorMinimo = (event) => {
        setValorMinimo(event.target.value);
    };

    const handleValorMaximo = (event) => {
        setValorMaximo(event.target.value);
    };

    const filtrarProduto = produtos.filter((produto)=>{
        return valorMinimo > 0 || valorMaximo > 0  ? 
        produto.preco >= valorMinimo && produto.preco <= valorMaximo :
        true
    })


    return (
        <div>
            <div>
                <label>Valor minimo:</label>
                <input
                    type="number"
                    value={valorMinimo}
                    onChange={handleValorMinimo}
                />
                <label>Valor maximo:</label>
                <input
                    type="number"
                    value={valorMaximo}
                    onChange={handleValorMaximo}
                />
            </div>
            {filtrarProduto.map((produto) => {
                return (
                    <CardProduto
                        nome={produto.nome}
                        descricao={produto.descricao}
                        preco={produto.preco}
                    />
                );
            })}
        </div>
    );
}

export default App;
