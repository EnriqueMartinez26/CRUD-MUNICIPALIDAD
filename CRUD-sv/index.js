const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

const allowedOrigins = [
  'http://localhost:5173',
  'https://statuesque-wisp-9de32d.netlify.app',
  process.env.FRONTEND_URL 
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next();
});

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a Railway DB establecida correctamente');
  })
  .catch(err => {
    console.error('❌ Error al conectar con Railway DB:', err);
  });

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

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Error: El puerto ${PORT} ya está en uso`);
    process.exit(1);
  } else {
    throw err;
  }
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Performing graceful shutdown');
  process.exit(0);
});

module.exports = app;
