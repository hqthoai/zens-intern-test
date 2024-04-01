const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vote = new Schema(
    {
        jokeId: { type: Schema.Types.ObjectId, ref: 'Joke' },
        userCookie: { type: String },
        voteType: { type: String }
    }
)

module.exports = mongoose.model('Vote', Vote);