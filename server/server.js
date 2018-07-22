
const express = require('express');
require('dotenv').config();
const pool = require('./modules/pool');

const app = express();
const bodyParser = require('body-parser');

// App Set //
const port = process.env.PORT || 5000;

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const rssRouter = require('./routes/rss.router');
const favRouter = require('./routes/favorite.router');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/rss', rssRouter);
app.use('/api/fav', favRouter);

// Serve static files
app.use(express.static('build'));


/** Listen * */
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
