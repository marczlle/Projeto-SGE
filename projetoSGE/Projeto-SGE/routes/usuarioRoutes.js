const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


router.post('/usuarios', UsuarioController.createUsuario);
router.post('/usuarios/login', UsuarioController.loginUsuario);
router.get('/usuarios', authenticateToken, UsuarioController.listarUsuarios);

module.exports = router;