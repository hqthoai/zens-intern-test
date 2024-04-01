const Vote = require('../models/Vote');
const Joke = require('../models/Joke');

const VoteController = {
    getAll: (req, res) => {
        Vote.find({})
            .then(votes => res.status(200).json(votes))
            .catch(err => res.status(500).json({ error: err }))
    },

    voteJoke: async (req, res) => {
        try {
            const { jokeId, voteType } = req.body;
            const user = req.cookies.user;
            if (!user || !jokeId || !voteType) {
                return res.status(400).json({ error: 'Invalid request!' });
            }
            const joke = await Joke.findById(jokeId);
            if (!joke) {
                return res.status(404).json({ error: 'Joke not found!' });
            }

            const vote = new Vote({ jokeId, userCookie: user, voteType });
            await vote.save();

            res.status(200).json({ message: 'Vote recorded successfully.' });
        } catch (error) {
            console.error('Error voting:', error);
            res.status(500).json({ error: 'An unexpected error occurred.' });
        }
    }
}

module.exports = VoteController;