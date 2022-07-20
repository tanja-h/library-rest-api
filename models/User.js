const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
});

module.exports = mongoose.model('User', UserSchema);