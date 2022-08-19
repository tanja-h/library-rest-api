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

const CatalogSchema = mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    books: [BookSchema]
});

module.exports = mongoose.model('Catalog', CatalogSchema);