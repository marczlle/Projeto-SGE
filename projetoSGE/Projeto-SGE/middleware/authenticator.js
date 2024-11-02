const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Route to generate the token
app.post('/login', (req, res) => {
    const usuario = { id: 1, usuario_nome: req.body.usuario_nome, usuario_email: req.body.usuario_email };

    // Generate the token
    const token = jwt.sign({ usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware to verify the token
function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
        if (err) return res.sendStatus(403);
        req.usuario = data.usuario;
        next();
    });
}

// Protected route
app.get('/protegida', verifyToken, (req, res) => {
    const { usuario_nome, usuario_email } = req.usuario;
    res.json({ message: 'Rota protegida', usuario_nome, usuario_email });
});

// Unprotected route
app.get('/semseguranca', (req, res) => {
    res.json({ message: 'Rota sem segurança' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});