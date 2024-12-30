const { validationResult } = require('express-validator');
const Empleado = require('../models/Empleado');
const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los empleados" });
  }
};

const getEmpleadoById = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await Empleado.findByPk(id);
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
    const nuevoEmpleado = await Empleado.create({
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
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }
    empleado.nombre = nombre;
    empleado.apellido = apellido;
    empleado.correo = correo;
    empleado.telefono = telefono;
    empleado.sueldo = sueldo;
    empleado.area = area;

    await empleado.save();
    res.status(200).json({ message: "Empleado actualizado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar el empleado" });
  }
};

const eliminarEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) {
      return res.status(404).json({ error: "Empleado no encontrado" });
    }

    await empleado.destroy();
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

