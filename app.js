const express = require('express');
const app = express();

// Configuração do Firebase
const admin = require('firebase-admin');

// verificar se o endereço abaixo precisa de alterado para a máquina do SENAI
// const serviceAccount = require('C:\\Users\\ricardo_f_de-souza\\Desktop\\Entra21\\projeto-samuel\\lanchoneteApi\\serviceAccountKey.json');
const serviceAccount = require('C:\\Entra21\\Node.JS\\Projeto-Lanchonete\\Lanchonete-entra21\\serviceAccountKey.json');


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Importar rotas
const produtosRoutes = require('./routes/produtosRoutes');
const entradasRoutes = require('./routes/entradasRoutes');
const saidasRoutes = require('./routes/saidasRoutes');

// Usar rotas
app.use('/api', produtosRoutes);
app.use('/api', entradasRoutes);
app.use('/api', saidasRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));