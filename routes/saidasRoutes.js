const express = require('express');
const router = express.Router();
const SaidaController = require('../controllers/SaidasController');

// Rota para criar um novo produto
router.post('/saidas', SaidaController.createSaida);

// Rota para obter todos os produtos
router.get('/saidas', SaidaController.getAllSaidas);

// Rota para obter um produto pelo ID
router.get('/saidas/:id', SaidaController.getSaidaById);

// Rota para atualizar um produto
router.put('/saidas/:id', SaidaController.updateSaida);

// Rota para deletar um produto
router.delete('/saidas/:id', SaidaController.deleteSaida);

module.exports = router;