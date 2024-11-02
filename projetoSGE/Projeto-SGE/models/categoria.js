const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    categoria_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    categoria_nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Categoria;