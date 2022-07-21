const mongoose = require('mongoose');

const AwardsSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date,
});

module.exports = mongoose.model('Award', AwardsSchema);