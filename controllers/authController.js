// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcrypt'); // Asegúrate de tener bcrypt instalado

exports.login = async (req, res) => {
  try {
    const { usuario, contrasena } = req.body;

    // Buscar al usuario por su nombre de usuario
    const user = await User.findOne({ where: { usuario } });
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    // Comparar la contraseña
    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Aquí puedes generar un token (por ejemplo, usando JWT) si es necesario
    const token = 'token_generado_aqui'; // Reemplaza con la lógica para generar un token

    res.status(200).json({ token }); // Envía el token al cliente
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
