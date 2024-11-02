//DetalhePedidoController.js
const DetalhePedido = require('../../models/detalhepedido');

exports.createDetalhePedido = async (req, res) => {
    const { dt_pedido_id, dt_produto_id, dt_valor, dt_desconto } = req.body;

    try {
        const detalhe = await DetalhePedido.create({
            dt_pedido_id,
            dt_produto_id,
            dt_valor,
            dt_desconto,
        });
        res.json(detalhe);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar detalhe do pedido!' });
    }
};

exports.updateDetalhePedido = async (req, res) => {
    const { dt_id } = req.params;
    const { dt_pedido_id, dt_produto_id, dt_valor, dt_desconto } = req.body;

    try {
        const detalhe = await DetalhePedido.findByPk(dt_id);
        if (!detalhe) {
            return res.status(404).json({ error: 'Detalhe do pedido não encontrado!' });
        }
        detalhe.dt_pedido_id = dt_pedido_id;
        detalhe.dt_produto_id = dt_produto_id;
        detalhe.dt_valor = dt_valor;
        detalhe.dt_desconto = dt_desconto;
        await detalhe.save();
        res.json(detalhe);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar detalhe do pedido!' });
    }
};

exports.deleteDetalhePedido = async (req, res) => {
    const { dt_id } = req.params;

    try {
        const detalhe = await DetalhePedido.findByPk(dt_id);
        if (!detalhe) {
            return res.status(404).json({ error: 'Detalhe do pedido não encontrado' });
        }
        await detalhe.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir detalhe do pedido' });
    }
};

exports.listarDetalhesPedidos = async (req, res) => {
    try {
        const detalhes = await DetalhePedido.findAll();
        res.status(200).json(detalhes);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao listar detalhes do pedido' });
    }
};

exports.getDetalhePedido = async (req, res) => {
    const { dt_id } = req.params;

    try {
        const detalhe = await DetalhePedido.findByPk(dt_id);
        if (!detalhe) {
            return res.status(404).json({ error: 'Detalhe do pedido não encontrado' });
        }
        res.json(detalhe);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar detalhe do pedido' });
    }
};