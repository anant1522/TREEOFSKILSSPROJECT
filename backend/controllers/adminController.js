const AgeGroup = require('../models/AgeGroup');
const Subject = require('../models/Subject');
const Course = require('../models/Course');
const Stage = require('../models/Stage');

// Get all Age Groups
exports.getAgeGroups = async (req, res) => {
    try {
        const ageGroups = await AgeGroup.find();
        res.json(ageGroups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add Age Group
exports.addAgeGroup = async (req, res) => {
    try {
        const ageGroup = new AgeGroup({ name: req.body.name });
        await ageGroup.save();
        res.status(201).json(ageGroup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete Age Group
exports.deleteAgeGroup = async (req, res) => {
    try {
        await AgeGroup.findByIdAndDelete(req.params.id);
        res.json({ message: 'Age Group deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all Subjects
exports.getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find(req.query.ageGroupId ? { ageGroupId: req.query.ageGroupId } : {});
        res.json(subjects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add Subject
exports.addSubject = async (req, res) => {
    try {
        const subject = new Subject({ name: req.body.name, ageGroupId: req.body.ageGroupId });
        await subject.save();
        res.status(201).json(subject);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete Subject
exports.deleteSubject = async (req, res) => {
    try {
        await Subject.findByIdAndDelete(req.params.id);
        res.json({ message: 'Subject deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Similarly, add controllers for `Courses` and `Stages`...
