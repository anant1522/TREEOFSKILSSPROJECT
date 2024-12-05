const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Save Registration Data
router.post('/', async (req, res) => {
    try {
        const registration = new Registration(req.body);
        await registration.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
        res.status(400).json({ message: 'Error saving registration data', error: err.message });
    }
});

module.exports = router;
