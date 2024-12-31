const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();


const registerRouter = require('./registerRouter');


router.use('/register', registerRouter); 

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

router.get('/profile', (req, res) => {
  res.json({ message: 'User profile' });
});

module.exports = router;
