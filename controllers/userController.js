const User = require('../models/User');
const bcrypt = require('bcrypt'); // Asegúrate de tener bcrypt instalado

exports.createUser = async (req, res) => {
  try {
    const { contrasena } = req.body;
    const hashedPassword = await bcrypt.hash(contrasena, 10); // Encripta la contraseña
    const user = await User.create({ ...req.body, contrasena: hashedPassword }); // Guarda el usuario con la contraseña encriptada
    res.status(201).json(user);
    console.log(req.body);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
