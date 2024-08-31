import React from 'react'

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

export default StudentDashboard;


// import React, { useState, useRef, useEffect } from 'react'
// import { Bell, Book, Calendar, ChevronLeft, GraduationCap, LayoutDashboard, LogOut, MessageSquare, User, Settings, BarChart, ChevronDown, ChevronUp, Sun, Moon } from 'lucide-react'

// const courses = [
//   { name: 'Web Development', progress: 75, modules: ['HTML & CSS', 'JavaScript Basics', 'React Fundamentals', 'Backend with Node.js'] },
//   { name: 'Data Science', progress: 45, modules: ['Python for Data Science', 'Statistical Analysis', 'Machine Learning Basics', 'Data Visualization'] },
//   { name: 'Mobile App Development', progress: 60, modules: ['Mobile UI Design', 'iOS Development with Swift', 'Android Development with Kotlin', 'Cross-platform with React Native'] },
//   { name: 'UI/UX Design', progress: 80, modules: ['Design Principles', 'User Research', 'Wireframing', 'Prototyping'] },
//   { name: 'Cybersecurity', progress: 30, modules: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Security Policies'] }
// ]

// const CourseDetails = ({ course, onBack }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//       <div className="flex items-center mb-4">
//         <button onClick={onBack} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
//           <ChevronLeft className="h-6 w-6" />
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white ml-2">{course.name}</h2>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
//         <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
//       </div>
//       <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{course.progress}% Complete</p>
//       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Course Modules</h3>
//       <ul className="space-y-2">
//         {course.modules.map((module, index) => (
//           <li key={index} className="flex items-center">
//             <div className={`h-4 w-4 rounded-full mr-2 ${index < course.progress / 25 ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
//             <span className="text-gray-700 dark:text-gray-300">{module}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// const UserDetails = ({ onClose }) => {
//   return (
//     <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md overflow-hidden shadow-xl z-10">
//       <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
//         <p className="text-sm font-medium text-gray-800 dark:text-white">John Doe</p>
//         <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com</p>
//       </div>
//       <ul>
//         <li>
//           <button className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
//             <User className="mr-2 h-4 w-4" />
//             Profile
//           </button>
//         </li>
//         <li>
//           <button className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
//             <Settings className="mr-2 h-4 w-4" />
//             Settings
//           </button>
//         </li>
//         <li>
//           <button className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
//   )
// }

// const ProgressGraph = ({ courses }) => {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mt-4">
//       <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
//         <BarChart className="mr-2 h-5 w-5" />
//         Overall Progress
//       </h2>
//       <div className="space-y-4">
//         {courses.map((course, index) => (
//           <div key={index}>
//             <div className="flex justify-between items-center mb-1">
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{course.name}</span>
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{course.progress}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//               <div 
//                 className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
//                 style={{ width: `${course.progress}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default function Component() {
//   const [selectedCourse, setSelectedCourse] = useState(null)
//   const [isUserDetailsVisible, setIsUserDetailsVisible] = useState(false)
//   const [isProgressVisible, setIsProgressVisible] = useState(false)
//   const [isDarkMode, setIsDarkMode] = useState(false)
//   const userDetailsRef = useRef(null)

//   const handleCourseClick = (course) => {
//     setSelectedCourse(course)
//   }

//   const handleBackToDashboard = () => {
//     setSelectedCourse(null)
//   }

//   const toggleUserDetails = () => {
//     setIsUserDetailsVisible(!isUserDetailsVisible)
//   }

//   const toggleProgressVisibility = () => {
//     setIsProgressVisible(!isProgressVisible)
//   }

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode)
//   }

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userDetailsRef.current && !userDetailsRef.current.contains(event.target)) {
//         setIsUserDetailsVisible(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [isDarkMode])

//   return (
//     <div className={`flex h-screen bg-gray-100 dark:bg-gray-900 ${isDarkMode ? 'dark' : ''}`}>
//       {/* Sidebar */}
//       <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
//         <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
//           <GraduationCap className="h-8 w-8 text-indigo-500" />
//           <span className="ml-2 text-lg font-semibold text-gray-800 dark:text-white">EduTech</span>
//         </div>
//         <nav className="mt-6">
//           <div className="px-4 py-2 space-y-2">
//             <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
//               <LayoutDashboard className="mr-3 h-5 w-5" />
//               Dashboard
//             </button>
//             <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
//               <Book className="mr-3 h-5 w-5" />
//               Courses
//             </button>
//             <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
//               <Calendar className="mr-3 h-5 w-5" />
//               Schedule
//             </button>
//             <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
//               <MessageSquare className="mr-3 h-5 w-5" />
//               Messages
//             </button>
//             <button className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
//               <User className="mr-3 h-5 w-5" />
//               Profile
//             </button>
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Header */}
//         <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
//           <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
//             {selectedCourse ? selectedCourse.name : 'Dashboard'}
//           </h1>
//           <div className="flex items-center">
//             <button
//               onClick={toggleDarkMode}
//               className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mr-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
//               aria-label="Toggle dark mode"
//             >
//               {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </button>
//             <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white mr-4">
//               <Bell className="h-5 w-5" />
//             </button>
//             <div className="relative" ref={userDetailsRef}>
//               <button
//                 onClick={toggleUserDetails}
//                 className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
//               >
//                 <svg className="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                   <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
//                 </svg>
//               </button>
//               {isUserDetailsVisible && <UserDetails onClose={() => setIsUserDetailsVisible(false)} />}
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
//           <div className="container mx-auto px-6 py-8">
//             {selectedCourse ? (
//               <CourseDetails course={selectedCourse} onBack={handleBackToDashboard} />
//             ) : (
//               <>
//                 <div className="mb-8">
//                   <button
//                     onClick={toggleProgressVisibility}
//                     className="flex items-center justify-between w-full px-4 py-2 text-left text-sm font-medium text-gray-700 bg-white dark:bg-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-50"
//                   >
//                     <span className="flex items-center">
//                       <BarChart className="mr-2 h-5 w-5" />
//                       {isProgressVisible ? 'Hide' : 'Show'} Overall Progress
//                     </span>
//                     {isProgressVisible ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
//                   </button>
//                   {isProgressVisible && <ProgressGraph courses={courses} />}
//                 </div>
//                 <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Course Progress</h2>
//                 <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3">
//                   {/* Course Progress Cards */}
//                   {courses.map((course, index) => (
//                     <div 
//                       key={index} 
//                       className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow duration-200"
//                       onClick={() => handleCourseClick(course)}
//                     >
//                       <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{course.name}</h3>
//                       <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                         <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
//                       </div>
//                       <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{course.progress}% Complete</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="grid gap-6 mb-8 md:grid-cols-2">
//                   {/* Upcoming Assignments */}
//                   <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Upcoming Assignments</h2>
//                     <ul className="space-y-4">
//                       {['React Project', 'Python Quiz', 'UI/UX Design Presentation'].map((assignment, index) => (
//                         <li key={index} className="flex items-center justify-between">
//                           <span className="text-gray-700 dark:text-gray-300">{assignment}</span>
//                           <span className="text-sm text-gray-500 dark:text-gray-400">Due in {index + 2} days</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Recent Activity */}
//                   <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h2>
//                     <ul className="space-y-4">
//                       {[
//                         'Completed JavaScript Basics quiz',
//                         'Submitted CSS Layout assignment',
//                         'Joined Data Structures study group'
//                       ].map((activity, index) => (
//                         <li key={index} className="flex items-center">
//                           <div className="bg-indigo-500 rounded-full h-2 w-2 mr-3"></div>
//                           <span className="text-gray-700 dark:text-gray-300">{activity}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }