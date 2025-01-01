const { validationResult } = require('express-validator');
const empleadoQueries = require('../queries/empleadoQueries');

const getEmpleados = async (req, res) => {
  try {
    const empleados = await empleadoQueries.getAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los empleados" });
  }
};

const getEmpleadoById = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await empleadoQueries.getById(id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json(empleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el empleado" });
  }
};

const crearEmpleado = async (req, res) => {
  const { nombre, apellido, correo, telefono, sueldo, area } = req.body;
  try {
    const nuevoEmpleado = await empleadoQueries.create({
      nombre,
      apellido,
      correo,
      telefono,
      sueldo,
      area
    });
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el empleado" });
  }
};

const actualizarEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, correo, telefono, sueldo, area } = req.body;

  try {
    const empleado = await empleadoQueries.update(id, {
      nombre,
      apellido,
      correo,
      telefono,
      sueldo,
      area
    });
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json({ message: "Empleado actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el empleado" });
  }
};

const eliminarEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await empleadoQueries.delete(id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    res.status(200).json({ message: "Empleado eliminado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el empleado" });
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado
};
