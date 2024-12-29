const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

const router = express.Router();

// Rutas para los usuarios
router.get('/users', getUsers);         
router.post('/users', createUser);    

module.exports = router;
