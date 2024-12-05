const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ageGroupId: { type: mongoose.Schema.Types.ObjectId, ref: 'AgeGroup', required: true },
});

module.exports = mongoose.model('Subject', subjectSchema);
