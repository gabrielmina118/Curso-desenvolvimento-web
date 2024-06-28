import CardProduto from "./components/CardProduto";
import styled from "styled-components"

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr); 
`
export const MainTitle = styled.h1`
    color: red;
`

function App() {
    
    return (
        <MainContainer>
            <MainTitle>Salve</MainTitle>
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
        </MainContainer>
    );
}

export default App;
