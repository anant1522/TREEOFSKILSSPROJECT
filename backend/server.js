require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const registrationRoutes = require('./routes/registration'); // Routes for registration-related APIs
const adminRoutes = require('./routes/admin'); // Admin routes for Age Groups, Subjects, Courses, and Stages

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(cors()); // Enables CORS for cross-origin requests

// MongoDB Connection
const connectDB = require('./config/db');
connectDB();

// API Routes
app.use('/api/registration', registrationRoutes); // All routes related to registrations
app.use('/api/admin', adminRoutes); // All routes for admin panel (CRUD for Age Groups, Subjects, etc.)

// Default Route for Health Check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack
    res.status(500).send({ message: 'An internal server error occurred!' });
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
