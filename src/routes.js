const express = require('express');
const moviesRouter = require('./api/movies');

const router = express.Router();

router.use('/movies', moviesRouter);

module.exports = router;
