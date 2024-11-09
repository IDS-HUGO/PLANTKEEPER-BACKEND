const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plantController');

router.post('/', plantController.createPlant);
router.get('/', plantController.getAllPlants);
router.delete('/:id', plantController.deletePlant);


module.exports = router;
