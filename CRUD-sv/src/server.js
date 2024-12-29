const express = require('express');
const dotenv = require('dotenv');
const mssql = require('mssql');

dotenv.config();

const app = express();

app.use(express.json());

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
    console.error('Error al conectar a la base de datos', err);
    process.exit(1);
  }
}

app.get('/api/users', async (req, res) => {
  try {
    const result = await mssql.query('SELECT * FROM users');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener usuarios', err);
    res.status(500).send('Error al obtener usuarios');
  }
});

app.post('/api/users', async (req, res) => {
  const { nombre, apellido, correo, telefono, area, sueldo } = req.body;
  try {
    await mssql.query(`
      INSERT INTO users (nombre, apellido, correo, telefono, area, sueldo)
      VALUES ('${nombre}', '${apellido}', '${correo}', '${telefono}', '${area}', ${sueldo})
    `);
    res.status(201).send('Usuario creado');
  } catch (err) {
    console.error('Error al crear usuario', err);
    res.status(500).send('Error al crear usuario');
  }
});

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
