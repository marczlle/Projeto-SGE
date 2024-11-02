const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');
const Produto = require('./produto');

const DetalhePedido = sequelize.define('DetalhePedido', {
    dt_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    dt_pedido_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pedido,
            key: 'pedido_id',
        },
    },
    dt_produto_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produto,
            key: 'produto_id',
        },
    },
    dt_valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dt_desconto: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
});

DetalhePedido.belongsTo(Pedido, { foreignKey: 'dt_pedido_id' });
DetalhePedido.belongsTo(Produto, { foreignKey: 'dt_produto_id' });

module.exports = DetalhePedido;