const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController');

// Rota para criar um novo produto
router.post('/saidas', ProdutoController.createProduto);

// Rota para obter todos os produtos
router.get('/saidas', ProdutoController.getAllProdutos);

// Rota para obter um produto pelo ID
router.get('/saidas/:id', ProdutoController.getProdutoById);

// Rota para atualizar um produto
router.put('/saidas/:id', ProdutoController.updateProduto);

// Rota para deletar um produto
router.delete('/saidas/:id', ProdutoController.deleteProduto);

module.exports = router;