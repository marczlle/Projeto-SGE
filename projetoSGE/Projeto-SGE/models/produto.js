const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('produto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

module.exports = Produto;