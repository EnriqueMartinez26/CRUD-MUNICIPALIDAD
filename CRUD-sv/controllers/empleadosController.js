const Empleado = require('../models/empleados');

const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener empleados' });
  }
};


const crearEmpleado = async (req, res) => {
  const { nombre, apellido, correo, telefono, sueldo, area } = req.body;
  try {
    const nuevoEmpleado = await Empleado.create({ nombre, apellido, correo, telefono, sueldo, area });
    res.json(nuevoEmpleado);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear empleado' });
  }
};


const actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, telefono, sueldo, area } = req.body;
  try {
    await Empleado.update({ nombre, apellido, correo, telefono, sueldo, area }, { where: { id } });
    res.json({ message: 'Empleado actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar' });
  }
};


const eliminarEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    await Empleado.destroy({ where: { id } });
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar' });
  }
};

module.exports = { getEmpleados, crearEmpleado, actualizarEmpleado, eliminarEmpleado };
