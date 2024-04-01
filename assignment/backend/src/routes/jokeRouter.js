const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/JokeController');
const checkCookie = require('../middlewares/checkCookie');

router.get('/available', checkCookie, jokeController.getAvailable);
router.get('/', jokeController.getAll);
module.exports = router;