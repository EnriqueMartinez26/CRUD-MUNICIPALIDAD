const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const empleadoRoutes = require('./routes/empleadoRoutes'); 

const app = express();
const PORT = process.env.PORT || 5002;


app.use(cors({
  origin: ['http://localhost:5173', 'https://statuesque-wisp-9de32d.netlify.app'], 
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

app.use(express.json());  

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
