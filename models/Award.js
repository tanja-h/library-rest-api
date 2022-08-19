const mongoose = require('mongoose');

const AwardSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date,
});

module.exports = mongoose.model('Award', AwardSchema);