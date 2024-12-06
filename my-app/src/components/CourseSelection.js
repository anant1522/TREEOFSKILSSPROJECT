import React, { useState } from 'react';

const CourseSelection = () => {
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);

  const recommendedSubjectsByAge = {
    '3-4': ['Kathak', 'Western Dance and Fitness'],
    '5-6': ['Kathak', 'Western Dance and Fitness', 'Piano'],
    '7-10': ['Kathak', 'Western Dance and Fitness', 'Piano', 'Table Tennis'],
    '11+': ['Kathak', 'Western Dance and Fitness', 'Piano', 'Table Tennis', 'Chess'],
  };

  const coursesBySubject = {
    Kathak: ['Basic Kathak', 'Intermediate Kathak', 'Advanced Kathak'],
    'Western Dance and Fitness': ['Dance Basics', 'Fitness Dance Fusion'],
    Piano: ['Piano Level 1', 'Piano Level 2', 'Piano Masterclass'],
    'Table Tennis': ['Beginner TT', 'Intermediate TT', 'Advanced TT'],
    Chess: ['Chess Basics', 'Chess Strategy', 'Chess Masterclass'],
  };

  const stagesByCourse = {
    'Beginner TT': ['Stage 1', 'Stage 2'],
    'Intermediate TT': ['Stage 3'],
    'Advanced TT': ['Stage 4'],
    'Chess Basics': ['Stage 1', 'Stage 2'],
    'Chess Strategy': ['Stage 3'],
    'Chess Masterclass': ['Stage 4'],
    'Basic Kathak': ['Stage 1', 'Stage 2'],
    'Intermediate Kathak': ['Stage 3'],
    'Advanced Kathak': ['Stage 4'],
    'Dance Basics': ['Stage 1', 'Stage 2', 'Stage 3'],
    'Fitness Dance Fusion': ['Stage 4'],
    'Piano Level 1': ['Stage 1', 'Stage 2', 'Stage 3'],
    'Piano Level 2': ['Stage 3'],
    'Piano Masterclass': ['Stage 4', 'Stage 5'],
  };

  const handleAgeGroupSelect = (age) => {
    setSelectedAge(age);
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setSelectedCourse(null); // Reset courses when subject changes
    setSelectedStage(null); // Reset stages when subject changes
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedStage(null); // Reset stages when course changes
  };

  const handleStageSelect = (stage) => {
    setSelectedStage(stage);
  };

  const recommendedSubjects = recommendedSubjectsByAge[selectedAge] || [];
  const courses = coursesBySubject[selectedSubject] || [];
  const stages = stagesByCourse[selectedCourse] || [];

  return (
    <div className="course-selection-container">
      <h2>Course Selection</h2>
      <div className="form-group">
        <select onChange={(e) => handleAgeGroupSelect(e.target.value)} required>
          <option value="" disabled selected>
            Select Age Group
          </option>
          <option value="3-4">3-4</option>
          <option value="5-6">5-6</option>
          <option value="7-10">7-10</option>
          <option value="11+">11+</option>
        </select>
      </div>
      <div className="form-group">
        <select onChange={(e) => handleSubjectSelect(e.target.value)} required>
          <option value="" disabled selected>
            Select Subject
          </option>
          {recommendedSubjects.map((subject) => (
            <option key={subject} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select onChange={(e) => handleCourseSelect(e.target.value)} required>
          <option value="" disabled selected>
            Select Course
          </option>
          {courses.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <select
          value={selectedStage} // Ensure the selected stage is displayed
          onChange={(e) => handleStageSelect(e.target.value)}
          required
        >
          <option value="" disabled selected>
            Select Stage
          </option>
          {stages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CourseSelection;
