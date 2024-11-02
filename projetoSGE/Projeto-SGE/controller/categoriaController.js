const Categoria = require('../../models/categoria');

exports.createCategoria = async (req, res) => {
    const { categoria_nome } = req.body;
    try {
        const categoria = await Categoria.create({ categoria_nome });
        res.json(categoria);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao criar categoria' });
    }
};

exports.listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar categorias' });
    }
};

exports.updateCategoria = async (req, res) => {
    const { categoria_id } = req.params;
    const { categoria_nome } = req.body;

    try {
        const categoria = await Categoria.findByPk(categoria_id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        categoria.categoria_nome = categoria_nome;
        await categoria.save();
        res.json(categoria);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
};

exports.deleteCategoria = async (req, res) => {
    const { categoria_id } = req.params;

    try {
        const categoria = await Categoria.findByPk(categoria_id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }
        await categoria.destroy();
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Erro ao excluir categoria' });
    }
};