const Joke = require('../models/Joke');

const JokeController = {
    getAll: (req, res) => {
        Joke.find({})
            .then(jokes => res.status(200).json(jokes))
            .catch(err => res.status(500).json({ err: err }))
    },

    getById: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(joke => res.status(200).json(joke))
            .catch(err => res.status(500).json({ err: err }))
    },
}
module.exports = JokeController;