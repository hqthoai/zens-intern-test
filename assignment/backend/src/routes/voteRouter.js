const express = require('express');
const router = express.Router();
const voteController = require('../controllers/VoteController');

router.get('/', voteController.voteJoke);

module.exports = router;