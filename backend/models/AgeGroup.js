const mongoose = require('mongoose');

const ageGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('AgeGroup', ageGroupSchema);
