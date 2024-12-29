const sql = require('mssql');


const config = {
  user: 'tu_usuario', 
  password: 'tu_contraseña', 
  server: 'localhost\\SQLEXPRESS',
  database: 'nombre_de_tu_base_de_datos', 
  options: {
    encrypt: true, 
    trustServerCertificate: true, 
  },
};


async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Conexión exitosa a la base de datos');
  } catch (err) {
    console.error('Error al conectar con la base de datos:', err);
  }
}


module.exports = { sql, connectToDatabase };
