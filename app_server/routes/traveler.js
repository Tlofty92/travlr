// traveler.js - Routes for traveler pages

const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/traveler');

// Route for GET /traveler
router.get('/', travelerController.travelerHome);

module.exports = router;
