const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Joke = new Schema(
    {
        content: { type: String },
    }
)

module.exports = mongoose.model('Joke', Joke);