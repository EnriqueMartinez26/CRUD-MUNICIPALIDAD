const express = require('express');
const { getEmpleados, crearEmpleado, eliminarEmpleado, actualizarEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

router.get('/', getEmpleados);  // Obtener empleados
router.post('/', crearEmpleado);  // Crear empleado
router.put('/:id', actualizarEmpleado);  // Actualizar empleado
router.delete('/:id', eliminarEmpleado);  // Eliminar empleado

module.exports = router;
