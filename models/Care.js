const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Plant = require('./Plant');

const Care = sequelize.define('Care', {
  tipoCuidado: {
    type: DataTypes.ENUM('Riego', 'Fertilización', 'Poda'),
    allowNull: false,
  },
  fechaCuidado: DataTypes.DATE,
  notas: DataTypes.STRING,
}, {
  tableName: 'cares',
  timestamps: false,
});

Plant.hasMany(Care, { foreignKey: 'plantaId' });
Care.belongsTo(Plant, { foreignKey: 'plantaId' });

module.exports = Care;
