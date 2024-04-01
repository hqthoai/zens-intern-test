require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://thoai:quocthoai0109@cluster0.k2yis.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connect db successfully!'))
    .catch((err) => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
})