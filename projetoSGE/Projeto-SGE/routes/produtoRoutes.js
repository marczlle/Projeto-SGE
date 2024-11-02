const express = require('express');
const router = express.Router();
const produtoController = require('../controller/produtocontroller');

router.post('/produtos', produtoController.criarProduto);
router.get('/produtos', produtoController.todosProdutos);
router.put('/produtos/:id', produtoController.alterarProduto);
router.delete('/produtos/:id', produtoController.excluirProduto);
module.exports = router;