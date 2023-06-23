const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    actors : {
        type: [String],
        required: true
    }, 
    crews: {
        type: [String],
        required: true
    },
    runtime: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema)