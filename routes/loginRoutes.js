// routes/loginRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta para manejar el inicio de sesión
router.post('/', authController.login);

module.exports = router;
