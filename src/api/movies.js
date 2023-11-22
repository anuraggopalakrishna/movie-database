const express = require('express');
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find({});
        // res.setHeader('Content-Type', 'application/json');  probably the wrong way to do this
        res.json({ movies });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).send('Error fetching movies');
    }
});

// Get a specific movie
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id).populate('director');
        res.json({ movie });
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(404).send('Movie not found');
    }
});

module.exports = router;
