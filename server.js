const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient();

app.post("/usuarios", async (req, res) => {
  try {
    const { nome, email, dataNascimento, idade } = req.body;

    const usuario = await prisma.user.create({
      data: {
        name: nome,
        email: email,
        birthDate: new Date(dataNascimento),
        age: idade
      }
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao salvar no banco" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
