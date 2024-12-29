const express = require('express');
const dotenv = require('dotenv');
const { connectToDatabase } = require('./config/dbconfig');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
});
