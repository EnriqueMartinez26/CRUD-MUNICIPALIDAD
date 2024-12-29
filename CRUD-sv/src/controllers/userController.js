const mssql = require('mssql');


async function getUsers(req, res) {
  try {
    const result = await mssql.query('SELECT * FROM users');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    res.status(500).send('Error al obtener usuarios');
  }
}

async function createUser(req, res) {
  const { nombre, apellido, correo, telefono, area, sueldo } = req.body;
  try {
    const request = new mssql.Request();
    request.input('nombre', mssql.NVarChar, nombre);
    request.input('apellido', mssql.NVarChar, apellido);
    request.input('correo', mssql.NVarChar, correo);
    request.input('telefono', mssql.NVarChar, telefono);
    request.input('area', mssql.NVarChar, area);
    request.input('sueldo', mssql.Decimal, sueldo);

    await request.query(`
      INSERT INTO users (nombre, apellido, correo, telefono, area, sueldo)
      VALUES (@nombre, @apellido, @correo, @telefono, @area, @sueldo)
    `);
    res.status(201).send('Usuario creado');
  } catch (err) {
    console.error('Error al crear usuario:', err);
    res.status(500).send('Error al crear usuario');
  }
}

module.exports = { getUsers, createUser };
