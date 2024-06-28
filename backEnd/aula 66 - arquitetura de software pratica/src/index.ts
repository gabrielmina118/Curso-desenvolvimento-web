import express from "express";
import cors from "cors";
import { connectionDb } from "./database/connection";
import { ProdutosInterface, ProdutosInterfaceDTO } from "./produtoInterface";
import {
    BuscarProdutosController,
    BuscarProdutosPromocaoController,
    CriarProduto,
    DeletarProduto,
} from "./controller/produtoController";
import { updateProduto } from "./bussines/produtoBussiness";

const app = express();

app.use(express.json());
app.use(cors());

// http://localhost:3000/produtos
app.get("/produtos", async (request, response) => {
    const result = await BuscarProdutosController();
    response.status(200).json(result);
});

app.get("/produtos-promocao", async (request, response) => {
    const result = await BuscarProdutosPromocaoController();
    response.status(200).json(result);
});

app.post("/criar-produto", async (request, response) => {
    const { nome, descricao, promocao, preco } = request.body;

    const novoProduto: ProdutosInterfaceDTO = {
        nome,
        descricao,
        promocao,
        preco,
    };

    await CriarProduto(novoProduto);

    response.status(201).send({ message: "Produto criado com sucesso" });
});

app.put("/atualiza-produto/:id", async (request, response) => {
    const params = request.params.id;
    const { nome, descricao, promocao, preco } = request.body;

    const novoProduto: ProdutosInterfaceDTO = {
        nome,
        descricao,
        promocao,
        preco,
    };

    const result = await updateProduto(params, novoProduto);

    response.status(200).send({ message: result });
});

app.delete("/deletar-produto/:id", async (request, response) => {
    const params = request.params.id;

    const result = await DeletarProduto(params);

    response.status(200).send({ message: result });
});

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");
});
