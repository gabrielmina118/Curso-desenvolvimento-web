import express from "express";
import cors from "cors";
import { ProdutosInterface, produtos } from "./produtos";
import { connectionDb } from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

// http://localhost:3000/produtos
app.get("/produtos", async (request, response) => {
    // response.status(200).json(produtos);
    const result = await connectionDb.raw("SELECT * FROM produto")
    response.status(200).json(result[0])
});

app.get("/produtos-promocao", (request, response) => {
    const produtosPromocao = produtos.filter((produto) => {
        return produto.promocao === true;
    });

    response.status(200).json(produtosPromocao);
});

app.post("/criar-produto", (request, response) => {
    const { nome, descricao, promocao, preco } = request.body;

    const id = Math.random().toString();

    const novoProduto: ProdutosInterface = {
        id,
        nome,
        descricao,
        promocao,
        preco,
    };

    produtos.push(novoProduto);

    response.status(201).json(produtos);
});


app.put("/atualiza-produto/:id",(request,response)=>{
        const params = request.params.id
        const body = request.body
        
        const atualizaProduto = produtos.find((produto)=>{
            return produto.id === params;
        })

        if(!atualizaProduto){
            return response.status(404).send({message:"Produto nao encontrado"})
        }

        atualizaProduto.nome = body.nome || atualizaProduto.nome
        atualizaProduto.descricao = body.descricao || atualizaProduto.descricao;
        atualizaProduto.preco = body.preco || atualizaProduto.preco;
        atualizaProduto.promocao = body.promocao || atualizaProduto.promocao;

        response.status(200).json(produtos)
        
})

app.delete("/deletar-produto/:id",(request,response)=>{
        const params = request.params.id

        const deletarProduto = produtos.find((produto)=>{
            return produto.id === params
        })

        if (!deletarProduto) {
            return response
                .status(404)
                .send({ message: "Produto nao encontrado" });
        }

        const novoArray = produtos.filter((produto)=>{
            return produto.id != params
        })

        response.status(200).json(novoArray)
})

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");
});
