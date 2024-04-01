require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log('Connect db successfully!'))
    .catch((err) => console.log(err))
