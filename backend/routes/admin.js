const express = require('express');
const router = express.Router();
const AgeGroup = require('../models/AgeGroup');
const Subject = require('../models/Subject');

// Get all age groups
router.get('/age-groups', async (req, res) => {
    try {
        const ageGroups = await AgeGroup.find();
        res.json(ageGroups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get all subjects
router.get('/subjects', async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add an age group
router.post('/add-age-group', async (req, res) => {
    const { name } = req.body;
    const ageGroup = new AgeGroup({ name });
    try {
        await ageGroup.save();
        res.status(201).json(ageGroup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Add a subject
router.post('/add-subject', async (req, res) => {
    const { name, ageGroupId } = req.body;
    const subject = new Subject({ name, ageGroupId });
    try {
        await subject.save();
        res.status(201).json(subject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete an age group
router.delete('/delete-age-group/:id', async (req, res) => {
    try {
        const ageGroup = await AgeGroup.findByIdAndDelete(req.params.id);
        res.json({ message: 'Age Group deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a subject
router.delete('/delete-subject/:id', async (req, res) => {
    try {
        const subject = await Subject.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subject deleted successfully!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
