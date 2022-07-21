const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    description: String,
});

module.exports = mongoose.model('Author', AuthorSchema);