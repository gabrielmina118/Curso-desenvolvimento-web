import express from "express";
import cors from "cors";
import { ProdutosInterface, produtos } from "./produtos";

const app = express();

app.use(express.json());
app.use(cors());

// http://localhost:3000/produtos
app.get("/produtos", (request, response) => {
    response.status(200).json(produtos);
});

app.get("/produtos-promocao", (request, response) => {
    const produtosPromocao = produtos.filter((produto) => {
        return produto.promocao === true;
    });

    response.status(200).json(produtosPromocao);
});

app.post("/criar-produto", (request, response) => {
    const { nome, descricao, promocao, preco } = request.body;

    const novoProduto: ProdutosInterface = {
        nome,
        descricao,
        promocao,
        preco,
    };

    produtos.push(novoProduto)

    response.status(201).json(produtos)
});

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");
});
