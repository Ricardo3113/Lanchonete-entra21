const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');

// verificar se o endereço abaixo precisa de alterado para a máquina do SENAI
const serviceAccount = require('C://Entra21/Node.JS/Projeto-Lanchonete//Lanchonete-entra21');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./routes/produtosRoutes');

// Usar rotas
app.use('/api', produtosRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));