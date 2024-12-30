const express = require('express');
const cors = require('cors');
const path = require('path');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/userRoutes');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const empleadoRoutes = require('./routes/empleadoRoutes'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'https://statuesque-wisp-9de32d.netlify.app'],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  logging: false, 
});

app.use('/api', userRoutes);
app.use('/api/register', registerRouter);
app.use('/api', loginRouter);
app.use('/api/empleados', empleadoRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al conectar con la base de datos:', err);
  });