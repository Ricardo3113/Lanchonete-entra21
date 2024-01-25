const express = require('express');
const router = express.Router();
const SaidasController = require('../controllers/SaidasController');

// Rota para criar um novo produto
router.post('/saidas/:id', SaidasController.createSaida);

// Rota para obter todos os produtos
router.get('/saidas', SaidasController.getAllSaidas);

// Rota para obter um produto pelo ID
router.get('/saidas/:id', SaidasController.getSaidaById);

// Rota para atualizar um produto
router.put('/saidas/:id', SaidasController.updateSaida);

// Rota para deletar um produto
router.delete('/saidas/:id', SaidasController.deleteSaida);

module.exports = router;