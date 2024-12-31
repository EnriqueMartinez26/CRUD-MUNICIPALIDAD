const express = require('express');
const cors = require('cors');
const sequelize = require('./api/config/database');
const userRoutes = require('./routes/userRoutes');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const empleadoRoutes = require('./routes/empleadoRoutes');
import { PORT } from './config.js';

const app = express();

app.use(cors({
  origin: [
    'http://localhost:5174',
    'https://tu-app.netlify.app',
    'https://tu-app.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api/register', registerRouter);
app.use('/api', loginRouter);
app.use('/api/empleados', empleadoRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful');
    
    await sequelize.sync();
    console.log('Models synchronized with database');

    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    }).on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
        server.listen(PORT + 1);
      } else {
        console.error('Server error:', err);
      }
    });

  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

startServer();

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing graceful shutdown');
  process.exit(0);
});

module.exports = app;
