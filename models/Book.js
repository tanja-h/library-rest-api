const mongoose = require('mongoose');
const { AuthorSchema } = require('./Author');
const { AwardSchema } = require('./Award');

const BookSchema = mongoose.Schema({
    title: String,
    author: AuthorSchema,
    description: String,
    genre: String,
    edition: Number,
    award: AwardSchema,
});

module.exports = mongoose.model('Book', BookSchema);