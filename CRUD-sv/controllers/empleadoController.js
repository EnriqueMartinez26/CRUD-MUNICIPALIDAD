const { validationResult } = require('express-validator');
const Empleado = require('../models/Empleado.js');

const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error('Error al obtener los empleados:', error);
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error('Error al obtener el empleado:', error);
    res.status(500).json({ error: 'Error al obtener el empleado' });
  }
};

const crearEmpleado = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const nuevoEmpleado = await Empleado.create(req.body);
    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error('Error al crear el empleado:', error);
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
};

const actualizarEmpleado = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      await empleado.update(req.body);
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error('Error al actualizar el empleado:', error);
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};

const eliminarEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      await empleado.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error('Error al eliminar el empleado:', error);
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
};

module.exports = {
  getEmpleados,
  getEmpleadoById,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado
};