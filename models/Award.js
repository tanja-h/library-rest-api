const mongoose = require('mongoose');

const AwardSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date,
});
module.exports.AwardSchema = AwardSchema;
module.exports = mongoose.model('Award', AwardSchema);