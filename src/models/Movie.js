const mongoose = require('mongoose');
const director = require('./Director')

const movieSchema = new mongoose.Schema({
    _id: Number,
    genres: [String],
    keywords: [String],
    title: String,
    release_date: Date,
    vote_average: Number,
    vote_count: Number,
    director_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: director
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
