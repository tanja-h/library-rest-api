const mongoose = require('mongoose');


const BookSchema = mongoose.Schema({
    title: String,
    author: {
        firstName: String,
        lastName: String,
        description: String,
    },
    description: String,
    genre: String,
    edition: Number,
    award: {
        title: String,
        description: String,
        date: Date,
    },
});

module.exports = mongoose.model('Book', BookSchema);