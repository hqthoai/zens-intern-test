require('dotenv').config();
const moment = require('moment-timezone');
require('./configs/db/connection');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const route = require('./routes/index');

moment.tz.setDefault('Asia/Ho_Chi_Minh');

const PORT = 3001;

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors(
    {
        origin: ['http://localhost:3000',],
        methods: 'GET,POST,PUT,PATCH,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
        credentials: true
    }
));

route(app);

app.listen(PORT, () => {
    console.log(`App listening on port http://localhost:${PORT}`);
});