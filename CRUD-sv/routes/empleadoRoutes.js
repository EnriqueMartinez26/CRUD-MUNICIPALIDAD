const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { 
  getEmpleados, 
  getEmpleadoById, 
  crearEmpleado, 
  actualizarEmpleado, 
  eliminarEmpleado 
} = require('../controllers/empleadoController');

router.get('/', getEmpleados);
router.get('/:id', getEmpleadoById);
router.post('/',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
    body('correo').isEmail().withMessage('Correo inválido'),
    body('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
    body('sueldo').isFloat({ gt: 0 }).withMessage('El sueldo debe ser mayor que 0'),
    body('area').notEmpty().withMessage('El área es obligatoria')
  ],
  crearEmpleado
);
router.put('/:id',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('apellido').notEmpty().withMessage('El apellido es obligatorio'),
    body('correo').isEmail().withMessage('Correo inválido'),
    body('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
    body('sueldo').isFloat({ gt: 0 }).withMessage('El sueldo debe ser mayor que 0'),
    body('area').notEmpty().withMessage('El área es obligatoria')
  ],
  actualizarEmpleado
);

router.delete('/:id', eliminarEmpleado);
module.exports = router;
