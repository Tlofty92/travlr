const express = require('express');
const router = express.Router();
const travelCtrl = require('../controllers/travel');

router.get('/', travelCtrl.travelList);

module.exports = router;
