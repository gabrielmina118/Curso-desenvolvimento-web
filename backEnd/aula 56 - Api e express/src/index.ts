import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req, res) => {
    res.send({ nome: "Gabriel" });
});

app.listen(3000, () => {
    console.log("Servidor esta rodando na porta http://localhost:3000");
});
