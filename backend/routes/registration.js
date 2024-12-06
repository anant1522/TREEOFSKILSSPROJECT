const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration'); // Assuming you have a Registration model

router.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the registration' });
    }
});

module.exports = router;
