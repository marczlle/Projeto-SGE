const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');


router.post('/categorias', authenticateToken, CategoriaController.createCategoria);
router.get('/categorias', authenticateToken, CategoriaController.listarCategorias);
router.put('/categorias/:categoria_id', authenticateToken, CategoriaController.updateCategoria);
router.delete('/categorias/:categoria_id', authenticateToken, CategoriaController.deleteCategoria);

module.exports = router;