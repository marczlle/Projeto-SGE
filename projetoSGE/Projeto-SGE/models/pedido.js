const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('pedido', {
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Clientes', // Nome da tabela referenciada
            key: 'cliente_id', // Chave primária da tabela referenciada
        },
    },
    data_pedido: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true, // Adiciona os campos createdAt e updatedAt
});

module.exports = Pedido;