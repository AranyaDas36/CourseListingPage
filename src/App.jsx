import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListing from './components/CourseListing';
import StudentDashboard from './components/StudentDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

