const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: authorSchema,
    description: String,
    genre: String,
    edition: Number,
    award: awardsSchema,
});

module.exports = mongoose.model('Book', BookSchema);