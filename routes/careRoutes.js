const express = require('express');
const router = express.Router();
const careController = require('../controllers/careController');

router.post('/', careController.createCare);
router.get('/', careController.getAllCares);

module.exports = router;
