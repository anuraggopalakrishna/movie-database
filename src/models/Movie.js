const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    genres: [String],
    keywords: [String],
    title: String,
    release_date: Date,
    vote_average: Number,
    vote_count: Number,
    director_id: mongoose.Schema.Types.ObjectId,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
