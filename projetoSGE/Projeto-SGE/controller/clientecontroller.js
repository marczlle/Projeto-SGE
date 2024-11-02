const Cliente = require('../../models/cliente')
// Criar um novo cliente
exports.createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body);
        return res.status(201).json(cliente);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Listar todos os clientes
exports.getAllClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll();
        return res.status(200).json({
            total: clientes.length,
            clientes,
        });
    } catch (error) {
        console.error('Erro ao buscar clientes:', error); // Log para depuração
        return res.status(500).json({ error: 'Erro ao buscar clientes. Tente novamente mais tarde.' });
    }
};

// Obter um cliente por ID
exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        return res.status(200).json(cliente);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Atualizar um cliente
exports.updateCliente = async (req, res) => {
    try {
        const [updated] = await Cliente.update(req.body, {
            where: { cliente_id: req.params.id },
        });
        if (!updated) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        const updatedCliente = await Cliente.findByPk(req.params.id);
        return res.status(200).json(updatedCliente);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// Deletar um cliente
exports.deleteCliente = async (req, res) => {
    try {
        const deleted = await Cliente.destroy({
            where: { cliente_id: req.params.id },
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};