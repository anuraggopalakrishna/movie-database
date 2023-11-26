const mongoose = require('mongoose')

const directorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    movie_id:{
        type: Number,
        required: true
    }
})

const directors = mongoose.model("directors", directorSchema)

module.exports = directors