const jokeRouter = require('./jokeRouter');
const voteRouter = require('./voteRouter');

const route = (app) => {
    app.use('/api/jokes', jokeRouter);
    app.use('/api/votes', voteRouter);
    app.get('/', (req, res) => {
        res.send("Hello world !!!");
    });
}

module.exports = route;