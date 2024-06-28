import express from "express";
import cors from "cors";
import { connectionDb } from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

interface ProdutosInterface {
    id: string;
    nome: string;
    preco: number;
    descricao: string;
    promocao: boolean;
}

// http://localhost:3000/produtos
app.get("/produtos", async (request, response) => {
    const result = await connectionDb("produto");
    response.status(200).json(result);
});

app.get("/produtos-promocao", async (request, response) => {
    const result = await connectionDb("produto").where({ promocao: 1 });
    response.status(200).json(result);
});

app.post("/criar-produto", async (request, response) => {
    const { nome, descricao, promocao, preco } = request.body;

    const novoProduto: ProdutosInterface = {
        id: Date.now().toString(),
        nome,
        descricao,
        promocao,
        preco,
    };
    await connectionDb("produto").insert(novoProduto);

    response.status(201).send({ message: "Produto criado com sucesso" });
});

app.put("/atualiza-produto/:id", async (request, response) => {
    const params = request.params.id;
    const { nome, descricao, promocao, preco } = request.body;

    const produtoExist = await connectionDb("produto")
        .where({ id: params })
        .first();

    if (!produtoExist) {
        return response.status(404).send({ message: "Produto nao encontrado" });
    }

    const update = await connectionDb("produto")
        .where({ id: params })
        .update({ nome, descricao, promocao, preco });

    console.log("update", update);

    response.status(200).send({ message: "Produto atualizado" });
});

app.delete("/deletar-produto/:id", async (request, response) => {
    const params = request.params.id;

    const produtoExist = await connectionDb("produto")
        .where({ id: params })
        .first();

    if (!produtoExist) {
        return response.status(404).send({ message: "Produto nao encontrado" });
    }

    await connectionDb("produto").where({ id: params }).del();

    response.status(200).send({ message: "Produto deletado com sucesso" });
});

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");
});
