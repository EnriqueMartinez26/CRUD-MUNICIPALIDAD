const mssql = require('mssql');
require('dotenv').config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

async function connectToDatabase() {
  try {
    await mssql.connect(dbConfig);
    console.log('Conexión exitosa a la base de datos');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
    process.exit(1); 
  }
}

module.exports = { connectToDatabase, dbConfig };
