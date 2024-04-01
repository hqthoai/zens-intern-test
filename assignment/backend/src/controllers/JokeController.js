const Joke = require('../models/Joke');
const Vote = require('../models/Vote');

const JokeController = {
    getAll: (req, res) => {
        Joke.find({})
            .then(jokes => res.status(200).json(jokes))
            .catch(err => res.status(500).json({ error: err }))
    },

    getById: (req, res) => {
        Joke.findOne({ _id: req.params.id })
            .then(joke => res.status(200).json(joke))
            .catch(err => res.status(500).json({ error: err }))
    },
    getAvailable: async (req, res) => {
        let user = req.cookies.user;
        if (!user) {
            return res.status(400).json({ error: 'Invalid request!' });
        }
        const userVotes = await Vote.find({ userCookie: user });
        if (userVotes.length === 0) {
            const joke = await Joke.aggregate([{ $sample: { size: 1 } }]);
            return res.status(200).json(joke[0]);
        }

        const joke = await Joke.findOne({ _id: { $nin: userVotes.map(vote => vote.jokeId) } });
        if (joke) {
            return res.status(200).json(joke);
        } else {
            return res.status(404).json({ message: "That's all the jokes for today! Come back another day!" });
        }
    }
}
module.exports = JokeController;