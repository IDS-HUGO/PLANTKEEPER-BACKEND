const Plant = require('../models/Plant');

exports.createPlant = async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(201).json(plant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.findAll({ include: 'User' });
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletePlant = async (req, res) => {
    try {
      const plantId = req.params.id;
      const deletedCount = await Plant.destroy({ where: { id: plantId } });
      
      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Planta no encontrada' });
      }
  
      res.status(204).send(); // Sin contenido
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  // plantController.js

exports.updatePlant = async (req, res) => {
  try {
    const plantId = req.params.id;
    const updatedPlant = await Plant.update(req.body, {
      where: { id: plantId },
      returning: true,
      plain: true
    });
    
    if (!updatedPlant[1]) {
      return res.status(404).json({ error: 'Planta no encontrada' });
    }

    res.status(200).json(updatedPlant[1]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

