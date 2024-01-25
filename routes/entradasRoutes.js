const express = require('express');         
const router = express.Router();        
const EntradasController = require('../controllers/entradasController');

// Rota para criar um novo produto
router.post('/entradas/:id', EntradasController.createEntrada);

// Rota para obter todos os produtos
router.get('/entradas', EntradasController.getAllEntradas);

// Rota para obter um produto pelo ID
router.get('/entradas/:id', EntradasController.getEntradaById);

// Rota para atualizar um produto
router.put('/entradas/:id', EntradasController.updateEntrada);

// Rota para deletar um produto
router.delete('/entradas/:id', EntradasController.deleteEntrada);

module.exports = router;