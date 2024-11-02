const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sge_js', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;