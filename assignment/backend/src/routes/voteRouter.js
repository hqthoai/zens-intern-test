const express = require('express');
const router = express.Router();
const voteController = require('../controllers/VoteController');
const checkCookie = require('../middlewares/checkCookie');

router.post('/vote', checkCookie, voteController.voteJoke);
router.get('/', voteController.getAll);

module.exports = router;