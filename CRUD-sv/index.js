const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5002;

// Configuración de CORS mejorada
const allowedOrigins = [
  'http://localhost:5173',
  'https://statuesque-wisp-9de32d.netlify.app',
  'https://crud-hyceuvv4o-enriquemartinez26s-projects.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));

app.use(express.json());

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

app.use('/api', userRoutes);
app.use('/api/register', registerRouter);
app.use('/api', loginRouter);
app.use('/api/empleados', empleadoRoutes);

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK',
    environment: process.env.NODE_ENV,
    database: process.env.DB_HOST
  });
});

app.use((err, req, res, next) => {
  console.error('❌ Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Iniciar servidor
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`🌍 Modo: ${process.env.NODE_ENV}`);
  });
}

module.exports = app;