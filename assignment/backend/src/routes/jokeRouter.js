const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/JokeController');

router.get('/', jokeController.getAll);

module.exports = router;