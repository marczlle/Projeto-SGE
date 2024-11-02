const express = require('express');
const router = express.Router();
const detalhePedidoController = require('../controllers/detalhePedidoController');


router.post('/detalhespedido', authenticateToken, DetalhePedidoController.createDetalhePedido);
router.get('/detalhespedido', authenticateToken, DetalhePedidoController.listarDetalhesPedidos);
router.get('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.getDetalhePedido);
router.put('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.updateDetalhePedido);
router.delete('/detalhespedido/:dt_id', authenticateToken, DetalhePedidoController.deleteDetalhePedido);


module.exports = router;