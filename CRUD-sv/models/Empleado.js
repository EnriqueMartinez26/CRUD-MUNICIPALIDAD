const pool = require('../config/database');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    telefono VARCHAR(255) NOT NULL,
    sueldo FLOAT NOT NULL,
    area VARCHAR(255) NOT NULL
  )`;
(async () => {
  try {
    await pool.query(createTableQuery);
  } catch (error) {
    console.error('Error creating table:', error);
  }
})();const pool = require('../config/database');

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL UNIQUE,
    telefono VARCHAR(255) NOT NULL,
    sueldo FLOAT NOT NULL,
    area VARCHAR(255) NOT NULL
  )`;
(async () => {
  try {
    await pool.query(createTableQuery);
  } catch (error) {
    console.error('Error creating table:', error);
  }
})();