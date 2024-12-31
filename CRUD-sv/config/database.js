const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    connectTimeout: 60000
  },  const sequelize = require('./config/database');
  
  async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection successful');
      process.exit(0);
    } catch (error) {
      console.error('Connection error:', error);
      process.exit(1);
    }
  }
  
  testConnection();
  logging: console.log
});

module.exports = sequelize;const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
    connectTimeout: 60000
  },
  logging: console.log
});

module.exports = sequelize;