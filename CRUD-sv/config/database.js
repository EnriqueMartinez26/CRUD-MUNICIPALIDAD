const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud_db', 'root', 'kukimZ10_', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
