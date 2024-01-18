const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

// Rota para criar um novo produto
router.post('/entradas', ProdutoController.createProduto);

// Rota para obter todos os produtos
router.get('/entradas', ProdutoController.getAllProdutos);

// Rota para obter um produto pelo ID
router.get('/entradas/:id', ProdutoController.getProdutoById);

// Rota para atualizar um produto
router.put('/entradas/:id', ProdutoController.updateProduto);

// Rota para deletar um produto
router.delete('/entradas/:id', ProdutoController.deleteProduto);

module.exports = router;