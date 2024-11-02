const Usuario = require('../../models/usuario');
const UsuarioDTO = require('../models/dtos/UsuarioDTO');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const generateToken = (usuario) => {
    return jwt.sign({ id: usuario.usuario_id, login: usuario.usuario_login }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
    });
};

exports.createUsuario = async (req, res) => {
    const { usuario_login, usuario_senha } = req.body;
    const hashedSenha = await bcrypt.hash(usuario_senha, 10);

    try {
        const usuario = await Usuario.create({ usuario_login, usuario_senha: hashedSenha });
        const usuariosDTO = new UsuarioDTO(usuario)
        res.status(201).json(usuariosDTO);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

exports.loginUsuario = async (req, res) => {
    const { usuario_login, usuario_senha } = req.body;

    try {
        const usuario = await Usuario.findOne({ where: { usuario_login } });
        if (!usuario) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const senhaValida = await bcrypt.compare(usuario_senha, usuario.usuario_senha);
        if (!senhaValida) {
            return res.status(401).json({ error: 'Senha incorreta!' });
        }

        const token = generateToken(usuario);
        const usuariosDTO = new UsuarioDTO(usuario)
        res.json({ usuariosDTO, token });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};

exports.listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        const usuariosDTO = usuarios.map(usuario => new UsuarioDTO(usuario))
        res.status(200).json(usuariosDTO);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao consultar usuários!' });
    }
};