const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    center: { type: String, required: true },
    childName: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    parentName: { type: String, required: true },
    address: { type: String, required: true },
    mobile1: { type: String, required: true },
    mobile2: { type: String },
    terms: {
        type: Boolean,
        required: true,
        set: value => value === 'on' // Convert "on" to true
      }
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
