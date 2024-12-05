const Course = require('../models/Course');

// Controller to add a new course (with its details)
exports.addCourse = async (req, res) => {
  try {
    const { ageGroup, subject, courses } = req.body;

    // Validate required fields
    if (!ageGroup || !subject || !courses) {
      return res.status(400).json({ error: 'Age group, subject, and courses are required.' });
    }

    // Check if the course data already exists for this age group and subject
    let courseData = await Course.findOne({ ageGroup, subject });
    if (courseData) {
      return res.status(400).json({ error: 'Course data already exists for this age group and subject.' });
    }

    // Save new course data
    courseData = new Course({ ageGroup, subject, courses });
    await courseData.save();

    res.status(201).json({ message: 'Course data added successfully.', courseData });
  } catch (error) {
    console.error('Error adding course:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Controller to get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Controller to get course data by age group
exports.getCoursesByAgeGroup = async (req, res) => {
  try {
    const { ageGroup } = req.params;
    const courses = await Course.find({ ageGroup });

    if (!courses || courses.length === 0) {
      return res.status(404).json({ error: 'No courses found for this age group.' });
    }

    res.status(200).json(courses);
  } catch (error) {
    console.error('Error fetching courses by age group:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Controller to update course data
exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { ageGroup, subject, courses } = req.body;

    // Validate required fields
    if (!ageGroup || !subject || !courses) {
      return res.status(400).json({ error: 'Age group, subject, and courses are required.' });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { ageGroup, subject, courses },
      { new: true } // Return the updated document
    );

    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course data not found.' });
    }

    res.status(200).json({ message: 'Course data updated successfully.', updatedCourse });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

// Controller to delete course data
exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ error: 'Course data not found.' });
    }

    res.status(200).json({ message: 'Course data deleted successfully.' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
