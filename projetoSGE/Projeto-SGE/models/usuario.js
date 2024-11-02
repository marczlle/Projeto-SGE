const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    usuario_login: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuario_senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Usuario;