const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Plant = sequelize.define('Plant', {
  nombreComun: DataTypes.STRING,
  nombreCientifico: DataTypes.STRING,
  frecuenciaRiego: DataTypes.STRING,
  condicionesLuz: DataTypes.STRING,
  fechaRegistro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'plants',
  timestamps: false,
});

User.hasMany(Plant, { foreignKey: 'usuarioId' });
Plant.belongsTo(User, { foreignKey: 'usuarioId' });

module.exports = Plant;
