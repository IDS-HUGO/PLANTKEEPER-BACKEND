const Care = require('../models/Care');

exports.createCare = async (req, res) => {
  try {
    const care = await Care.create(req.body);
    res.status(201).json(care);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllCares = async (req, res) => {
  try {
    const cares = await Care.findAll({ include: 'Plant' });
    res.json(cares);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
