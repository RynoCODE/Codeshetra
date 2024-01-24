// Importing basic stuff
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const roomController = require('../controllers/video');

router.get('/', roomController.home);
router.get('/:room', roomController.room);


module.exports = router;
