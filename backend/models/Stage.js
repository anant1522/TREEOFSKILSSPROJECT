const mongoose = require('mongoose');

const stageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    content: { type: String, required: true }, // Details of the stage
});

module.exports = mongoose.model('Stage', stageSchema);
