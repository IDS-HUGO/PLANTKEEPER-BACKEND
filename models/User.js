const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  nombre: DataTypes.STRING,
  apellidoPaterno: DataTypes.STRING,
  correoElectronico: DataTypes.STRING,
  usuario: DataTypes.STRING,
  contrasena: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
