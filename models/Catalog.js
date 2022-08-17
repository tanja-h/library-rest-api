const mongoose = require('mongoose');

const CatalogSchema = mongoose.Schema({
    title: String,
    description: String,
    genre: String,
    books: [String],
});

module.exports = mongoose.model('Catalog', CatalogSchema);