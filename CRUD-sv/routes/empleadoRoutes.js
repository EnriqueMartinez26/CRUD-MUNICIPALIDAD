const express = require('express');
const { getEmpleados, getEmpleadoById, crearEmpleado, actualizarEmpleado, eliminarEmpleado } = require('../controllers/empleadoController');

const router = express.Router();

router.get('/', getEmpleados);  
router.get('/:id', getEmpleadoById);  
router.post('/', crearEmpleado); 
router.put('/:id', actualizarEmpleado); 
router.delete('/:id', eliminarEmpleado);  

module.exports = router;
