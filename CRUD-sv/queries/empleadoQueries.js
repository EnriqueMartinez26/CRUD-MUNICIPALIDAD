const pool = require('../config/database');

const empleadoQueries = {
  getAll: async () => {
    const [rows] = await pool.query('SELECT * FROM empleados');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM empleados WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (empleado) => {
    const { nombre, apellido, correo, telefono, sueldo, area } = empleado;
    const [result] = await pool.query(
      'INSERT INTO empleados (nombre, apellido, correo, telefono, sueldo, area) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, apellido, correo, telefono, sueldo, area]
    );
    return result;
  },
  update: async (id, empleado) => {
    const { nombre, apellido, correo, telefono, sueldo, area } = empleado;
    const [result] = await pool.query(
      'UPDATE empleados SET nombre = ?, apellido = ?, correo = ?, telefono = ?, sueldo = ?, area = ? WHERE id = ?',
      [nombre, apellido, correo, telefono, sueldo, area, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await pool.query('DELETE FROM empleados WHERE id = ?', [id]);
    return result;
  }
};

module.exports = empleadoQueries;