
const Produto = require('../models/produto');

exports.criarProduto = async (req, res) => {
    try {
        const { nome } = req.body;
        const produto = await Produto.create({ nome });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto' });
    }
};

exports.todosProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

exports.alterarProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        produto.nome = nome;
        await produto.save();

        res.status(200).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao alterar produto' });
    }
};

exports.excluirProduto = async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        await produto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir produto' });
    }
};
