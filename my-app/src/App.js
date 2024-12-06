import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';  // If in 'src/components'
import CourseSelection from './components/CourseSelection';  // If in 'src/components'
  // Adjust the import if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/course-selection" element={<CourseSelection />} />
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
