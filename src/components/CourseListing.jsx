import React, { useState, useEffect } from 'react';
import courses from '../courseServices'; // Import your course data
import { useNavigate } from 'react-router-dom'; 

export default function CourseListing() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleEnroll = (course) => {
    if (!enrolledCourses.some(c => c.id === course.id)) {
      setEnrolledCourses([...enrolledCourses, { ...course, progress: 0 }]);
    }
    setShowDashboard(true);
  };

  const handleRemoveCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  const handleUpdateProgress = (courseId, progress) => {
    setEnrolledCourses(enrolledCourses.map(course => 
      course.id === courseId ? { ...course, progress } : course
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return darkMode ? 'bg-green-800 text-green-100' : 'bg-green-100 text-green-800';
      case 'In Progress': return darkMode ? 'bg-yellow-800 text-yellow-100' : 'bg-yellow-100 text-yellow-800';
      case 'Closed': return darkMode ? 'bg-red-800 text-red-100' : 'bg-red-100 text-red-800';
      default: return darkMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800';
    }
  };

  const CourseCard = ({ course }) => (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105`}>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{course.name}</h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Instructor: {course.instructor}</p>
        <div className="flex justify-between items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(course.enrollmentStatus)}`}>
            {course.enrollmentStatus}
          </span>
          <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{course.duration}</span>
        </div>
        <button
          onClick={() => setSelectedCourse(course)}
          className={`w-full ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}
        >
          View Details
        </button>
      </div>
    </div>
  );

  const CourseDetail = ({ course }) => (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg rounded-lg overflow-hidden`}>
      <div className="p-8">
        <button
          onClick={() => setSelectedCourse(null)}
          className={`mb-6 ${darkMode ? 'text-blue-300 hover:text-blue-200' : 'text-blue-500 hover:text-blue-600'} font-semibold flex items-center`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Course List
        </button>
        <h1 className="text-3xl font-bold mb-4">{course.name}</h1>
        <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>Instructor: {course.instructor}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Enrollment Status</h3>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(course.enrollmentStatus)}`}>
              {course.enrollmentStatus}
            </span>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Duration</h3>
            <p>{course.duration}</p>
          </div>
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>Location</h3>
            <p>{course.location}</p>
          </div>
        </div>
        <div className="mb-8">
          <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Syllabus</h3>
          <ul className="list-disc pl-6 space-y-2">
            {course.syllabus.map((item, index) => (
              <li key={index} className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{item}</li>
            ))}
          </ul>
        </div>
        {course.enrollmentStatus === 'Closed' ? (
          <div className="flex justify-center">
            <button
              className={`w-full max-w-xs ${darkMode ? 'bg-gray-600' : 'bg-gray-500'} text-white font-bold py-3 px-4 rounded transition duration-300 cursor-not-allowed`}
              disabled
            >
              Registration Closed
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() => handleEnroll(course)}
              className={`w-full max-w-xs ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white font-bold py-3 px-4 rounded transition duration-300`}
            >
              Enroll in Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
  
  

  const StudentDashboard = () => (
    <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg rounded-lg overflow-hidden`}>
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6">Student Dashboard</h2>
        <p className="mb-4">Number of enrolled courses: {enrolledCourses.length}</p>
        {enrolledCourses.map(course => (
          <div key={course.id} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg mb-4`}>
            <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Progress: {course.progress}%</p>
            <input
              type="range"
              min="0"
              max="100"
              value={course.progress}
              onChange={(e) => handleUpdateProgress(course.id, parseInt(e.target.value))}
              className="w-full mb-4"
            />
            <button
              onClick={() => handleRemoveCourse(course.id)}
              className={`${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}
            >
              Remove Course
            </button>
          </div>
        ))}
        <button
          onClick={() => setShowDashboard(false)}
          className={`mt-6 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-2 px-4 rounded transition duration-300`}
        >
          Back to Course Catalog
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold"><a href='/'> Course Catalog </a></h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-white'} font-bold py-2 px-4 rounded transition duration-300`}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        {showDashboard ? (
          <StudentDashboard />
        ) : selectedCourse ? (
          <CourseDetail course={selectedCourse} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
