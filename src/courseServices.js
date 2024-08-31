const courses = [
    {
      id: 1,
      name: "Introduction to React",
      instructor: "Jane Doe",
      enrollmentStatus: "Open",
      duration: "8 weeks",
      syllabus: [
        "Week 1: JSX and Components",
        "Week 2: Props and State",
        "Week 3: Lifecycle Methods",
        "Week 4: Hooks",
        "Week 5: Routing",
        "Week 6: State Management",
        "Week 7: Testing",
        "Week 8: Project Week"
      ],
      location: "Online"
    },
    {
      id: 2,
      name: "Advanced JavaScript",
      instructor: "John Smith",
      enrollmentStatus: "In Progress",
      duration: "10 weeks",
      syllabus: [
        "Week 1-2: ES6+ Features",
        "Week 3-4: Asynchronous JavaScript",
        "Week 5-6: Functional Programming",
        "Week 7-8: Design Patterns",
        "Week 9-10: Performance Optimization"
      ],
      location: "New York, NY"
    },
    {
      id: 3,
      name: "UI/UX Design Fundamentals",
      instructor: "Alice Johnson",
      enrollmentStatus: "Closed",
      duration: "6 weeks",
      syllabus: [
        "Week 1: Design Principles",
        "Week 2: User Research",
        "Week 3: Wireframing",
        "Week 4: Prototyping",
        "Week 5: Usability Testing",
        "Week 6: Final Project"
      ],
      location: "San Francisco, CA"
    },
    {
      id: 4,
      name: "Introduction to Python",
      instructor: "Emily Davis",
      enrollmentStatus: "Open",
      duration: "12 weeks",
      syllabus: [
        "Week 1: Python Basics",
        "Week 2: Control Structures",
        "Week 3: Functions",
        "Week 4: Modules and Packages",
        "Week 5: File Handling",
        "Week 6: Exception Handling",
        "Week 7: Object-Oriented Programming",
        "Week 8: Data Structures",
        "Week 9: Web Scraping",
        "Week 10: Data Analysis with Pandas",
        "Week 11: Visualization with Matplotlib",
        "Week 12: Final Project"
      ],
      location: "Online"
    },
    {
      id: 5,
      name: "Machine Learning Essentials",
      instructor: "Michael Brown",
      enrollmentStatus: "In Progress",
      duration: "14 weeks",
      syllabus: [
        "Week 1: Introduction to Machine Learning",
        "Week 2: Data Preprocessing",
        "Week 3: Supervised Learning - Regression",
        "Week 4: Supervised Learning - Classification",
        "Week 5: Unsupervised Learning - Clustering",
        "Week 6: Dimensionality Reduction",
        "Week 7: Model Evaluation",
        "Week 8: Neural Networks",
        "Week 9: Deep Learning Basics",
        "Week 10: Convolutional Neural Networks",
        "Week 11: Natural Language Processing",
        "Week 12: Model Deployment",
        "Week 13: Project Work",
        "Week 14: Final Assessment"
      ],
      location: "Online"
    },
    {
      id: 7,
      name: "Data Science with R",
      instructor: "Robert Green",
      enrollmentStatus: "Closed",
      duration: "8 weeks",
      syllabus: [
        "Week 1: Introduction to R",
        "Week 2: Data Import and Cleaning",
        "Week 3: Exploratory Data Analysis",
        "Week 4: Statistical Analysis",
        "Week 5: Data Visualization",
        "Week 6: Regression Analysis",
        "Week 7: Time Series Analysis",
        "Week 8: Final Project"
      ],
      location: "Online"
    },
    {
      id: 8,
      name: "Cybersecurity Basics",
      instructor: "Laura Martin",
      enrollmentStatus: "Open",
      duration: "6 weeks",
      syllabus: [
        "Week 1: Introduction to Cybersecurity",
        "Week 2: Network Security",
        "Week 3: Cryptography",
        "Week 4: Threats and Vulnerabilities",
        "Week 5: Security Policies and Procedures",
        "Week 6: Incident Response and Management"
      ],
      location: "Dallas, TX"
    },
    {
      id: 9,
      name: "Full-Stack MERN Development",
      instructor: "David Lee",
      enrollmentStatus: "Open",
      duration: "12 weeks",
      syllabus: [
        "Week 1: Introduction to MERN Stack",
        "Week 2: Setting Up the Development Environment",
        "Week 3: MongoDB Basics and CRUD Operations",
        "Week 4: Building RESTful APIs with Express.js",
        "Week 5: User Authentication with JWT",
        "Week 6: Front-End Development with React",
        "Week 7: State Management with Redux",
        "Week 8: Integrating Front-End with Back-End",
        "Week 9: Testing MERN Applications",
        "Week 10: Deployment to Heroku",
        "Week 11: Advanced MERN Features",
        "Week 12: Capstone Project"
      ],
      location: "Online"
    },
    {
      id: 10,
      name: "DevOps Fundamentals",
      instructor: "Nancy Clark",
      enrollmentStatus: "Open",
      duration: "10 weeks",
      syllabus: [
        "Week 1: Introduction to DevOps",
        "Week 2: Version Control with Git",
        "Week 3: Continuous Integration (CI) with Jenkins",
        "Week 4: Containerization with Docker",
        "Week 5: Orchestration with Kubernetes",
        "Week 6: Configuration Management with Ansible",
        "Week 7: Infrastructure as Code with Terraform",
        "Week 8: Monitoring and Logging",
        "Week 9: Cloud Platforms Overview",
        "Week 10: DevOps Best Practices and Case Studies"
      ],
      location: "Online"
    }
  ];
  
  export default courses;
  