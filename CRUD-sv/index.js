const express = require('express');
const cors = require('cors');
const path = require('path');
const { Sequelize } = require('sequelize');
const userRoutes = require('../routes/userRoutes');
const registerRouter = require('../routes/registerRouter');
const loginRouter = require('../routes/loginRouter');
const empleadoRoutes = require('../routes/empleadoRoutes'); 
require('dotenv').config();


const app = express();


app.use(cors({
  origin: ['http://localhost:5174', 'https://statuesque-wisp-9de32d.netlify.app'],
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));


app.use(express.json());

// Rutas
app.use('/api', userRoutes);
app.use('/api/register', registerRouter);
app.use('/api', loginRouter);
app.use('/api/empleados', empleadoRoutes);


module.exports = (req, res) => {
  app(req, res); 
};
