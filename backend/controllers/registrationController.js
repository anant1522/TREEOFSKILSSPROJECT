const Registration = require('../models/Registration');

// Controller for registering a user
exports.registerUser = async (req, res) => {
    try {
        const { center, childName, gender, age, parentName, address, mobile1, mobile2, terms } = req.body;

        // Validate required fields
        if (!center || !childName || !gender || !age || !parentName || !address || !mobile1 || !terms) {
            return res.status(400).json({ error: 'All required fields must be filled.' });
        }

        // Convert the terms field to a Boolean
        const termsAsBoolean = terms === 'on';

        // Save registration to database
        const registration = new Registration({
            center,
            childName,
            gender,
            age,
            parentName,
            address,
            mobile1,
            mobile2,
            terms: termsAsBoolean, // Use the converted Boolean value here
        });

        await registration.save();

        res.status(201).json({ message: 'Registration successful!', registration });
    } catch (error) {
        console.error('Error saving registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
