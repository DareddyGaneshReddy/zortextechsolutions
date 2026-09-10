export type CourseSlug = "c" | "java" | "python" | "java-full-stack" | "python-full-stack";

export interface SyllabusModule {
  title: string;
  topics: string[];
}

export interface Course {
  slug: CourseSlug;
  name: string;
  shortDescription: string;
  /** Two letter glyph used in the course card mark. */
  glyph: string;
  level: string;
  careerOpportunities: string[];
  averagePackage: string;
  overview: string[];
  outcomes: { title: string; description: string }[];
  modules: SyllabusModule[];
  projects: { name: string; description: string }[];
  technologies: string[];
  careers: string[];
  fee: string;
  faqs: { question: string; answer: string }[];
}

const feePlaceholder = "To be updated";

export const courses: Course[] = [
  {
    slug: "c",
    name: "C",
    glyph: "C",
    shortDescription:
      "Build your programming foundation with memory, logic and problem solving in C.",
    level: "Beginner",
    careerOpportunities: ["Junior Software Developer", "Embedded Systems Trainee"],
    averagePackage: "₹3–5 LPA",
    overview: [
      "C is the best place to build a real understanding of how programs work. You learn how memory is allocated, how data is structured and how logic is expressed with very few abstractions in the way.",
      "This course focuses on writing correct, readable programs and on the problem-solving habits that carry into every language you learn afterwards.",
    ],
    outcomes: [
      {
        title: "Programming fundamentals",
        description: "Variables, operators, control flow and functions with clear reasoning.",
      },
      {
        title: "Memory and pointers",
        description: "Understand pointers, addresses and dynamic memory without fear.",
      },
      {
        title: "Data structures basics",
        description: "Arrays, strings, structures and linked lists implemented by hand.",
      },
      {
        title: "Problem solving",
        description: "Break problems down and translate them into working algorithms.",
      },
      {
        title: "Debugging skills",
        description: "Read compiler errors, trace logic and fix defects methodically.",
      },
      {
        title: "File handling",
        description: "Read from and write to files for persistent program data.",
      },
    ],
    modules: [
      {
        title: "Module 1 — Getting started with C",
        topics: [
          "How a C program is compiled and run",
          "Structure of a C program",
          "Data types, variables and constants",
          "Input and output basics",
        ],
      },
      {
        title: "Module 2 — Operators and control flow",
        topics: [
          "Arithmetic, relational and logical operators",
          "if, else if and switch",
          "for, while and do-while loops",
          "break, continue and nested loops",
        ],
      },
      {
        title: "Module 3 — Functions and scope",
        topics: [
          "Defining and calling functions",
          "Parameters, return values and recursion",
          "Local, global and static scope",
          "Header files and modular code",
        ],
      },
      {
        title: "Module 4 — Arrays and strings",
        topics: [
          "One and two dimensional arrays",
          "String handling functions",
          "Searching and sorting basics",
          "Common array problems",
        ],
      },
      {
        title: "Module 5 — Pointers and memory",
        topics: [
          "Pointer basics and arithmetic",
          "Pointers with arrays and functions",
          "Dynamic memory allocation",
          "Common pointer mistakes",
        ],
      },
      {
        title: "Module 6 — Structures and files",
        topics: [
          "struct, union and typedef",
          "Structures with pointers",
          "File reading and writing",
          "Mini project build",
        ],
      },
    ],
    projects: [
      {
        name: "Student record system",
        description: "A menu-driven application storing student records in files using structures.",
      },
      {
        name: "Library management console app",
        description: "Issue and return books with search, using arrays and file persistence.",
      },
      {
        name: "Matrix operations toolkit",
        description: "Add, multiply and transpose matrices with input validation.",
      },
      {
        name: "Text file analyser",
        description: "Count words, lines and character frequency from a text file.",
      },
    ],
    technologies: ["C", "GCC", "Make", "GDB", "VS Code", "File I/O"],
    careers: [
      "Junior Software Developer",
      "Embedded Systems Trainee",
      "Systems Programming Trainee",
      "QA / Testing Associate",
      "Higher studies in Computer Science",
    ],
    fee: feePlaceholder,
    faqs: [
      {
        question: "Do I need prior programming experience?",
        answer: "No. The course starts from the very basics and builds up step by step.",
      },
      {
        question: "Why start with C?",
        answer:
          "C teaches you how memory and logic actually work, which makes every later language easier to learn.",
      },
    ],
  },
  {
    slug: "java",
    name: "Java",
    glyph: "Ja",
    shortDescription:
      "Master object-oriented programming, collections and database access with Java.",
    level: "Beginner to Intermediate",
    careerOpportunities: ["Java Developer", "Backend Developer"],
    averagePackage: "₹3.5–6 LPA",
    overview: [
      "Java remains one of the most widely used languages in industry, especially for backend and enterprise systems. This course builds a strong object-oriented foundation and then applies it.",
      "You move from core syntax to OOP design, collections, exception handling and database access, so you can build real applications rather than isolated examples.",
    ],
    outcomes: [
      {
        title: "Core Java",
        description: "Syntax, data types, control flow and the JVM execution model.",
      },
      {
        title: "Object-oriented design",
        description: "Classes, inheritance, polymorphism, abstraction and encapsulation.",
      },
      {
        title: "Collections framework",
        description: "Lists, sets, maps and when to choose each one.",
      },
      {
        title: "Exception handling",
        description: "Write resilient code with proper error handling.",
      },
      {
        title: "Database access",
        description: "Connect to a relational database and run queries with JDBC.",
      },
      {
        title: "Modern Java features",
        description: "Streams, lambdas and functional style basics.",
      },
    ],
    modules: [
      {
        title: "Module 1 — Java foundations",
        topics: [
          "JDK, JRE and JVM",
          "Variables, data types and operators",
          "Control statements and loops",
          "Arrays and strings",
        ],
      },
      {
        title: "Module 2 — Object-oriented programming",
        topics: [
          "Classes, objects and constructors",
          "Inheritance and method overriding",
          "Abstraction and interfaces",
          "Encapsulation and access modifiers",
        ],
      },
      {
        title: "Module 3 — Core libraries",
        topics: [
          "String, StringBuilder and wrapper classes",
          "Exception handling and custom exceptions",
          "File I/O basics",
          "Packages and build structure",
        ],
      },
      {
        title: "Module 4 — Collections and generics",
        topics: [
          "List, Set, Map and Queue",
          "Iterators and comparators",
          "Generics fundamentals",
          "Choosing the right collection",
        ],
      },
      {
        title: "Module 5 — Modern Java",
        topics: [
          "Lambda expressions",
          "Streams and functional operations",
          "Optional and date/time API",
          "Multithreading basics",
        ],
      },
      {
        title: "Module 6 — Databases with JDBC",
        topics: [
          "SQL essentials",
          "JDBC connections and statements",
          "CRUD operations",
          "Mini project build",
        ],
      },
    ],
    projects: [
      {
        name: "Employee management system",
        description: "Console or desktop CRUD application backed by a relational database.",
      },
      {
        name: "Banking transaction simulator",
        description: "Accounts, transfers and statements using OOP design and exceptions.",
      },
      {
        name: "Inventory tracker",
        description: "Stock management with collections, reports and JDBC persistence.",
      },
      {
        name: "Quiz application",
        description: "Question bank, scoring and result history stored in a database.",
      },
    ],
    technologies: ["Java", "OOP", "Collections", "JDBC", "MySQL", "Maven", "IntelliJ IDEA", "Git"],
    careers: [
      "Java Developer",
      "Backend Developer",
      "Software Engineer (Trainee)",
      "Application Support Engineer",
      "QA Automation Engineer",
    ],
    fee: feePlaceholder,
    faqs: [
      {
        question: "Should I learn C before Java?",
        answer:
          "It helps, but it is not required. This course covers the fundamentals you need from the start.",
      },
      {
        question: "Does this course cover databases?",
        answer: "Yes. SQL essentials and JDBC-based database access are part of the syllabus.",
      },
    ],
  },
  {
    slug: "python",
    name: "Python",
    glyph: "Py",
    shortDescription:
      "Learn Python for scripting, automation, data handling and backend development.",
    level: "Beginner",
    careerOpportunities: ["Python Developer", "Automation Engineer"],
    averagePackage: "₹3.5–6 LPA",
    overview: [
      "Python is the fastest way to become productive as a programmer, and it opens doors into backend development, automation, data work and testing.",
      "This course covers the language properly — not just syntax — and then applies it to files, APIs, databases and automation tasks you can show in a portfolio.",
    ],
    outcomes: [
      {
        title: "Python fundamentals",
        description: "Types, control flow, functions and idiomatic Python style.",
      },
      {
        title: "Data structures",
        description: "Lists, dictionaries, sets and tuples used effectively.",
      },
      {
        title: "OOP in Python",
        description: "Classes, inheritance, magic methods and modules.",
      },
      {
        title: "Working with data",
        description: "Files, JSON, CSV and basic data processing.",
      },
      {
        title: "APIs and databases",
        description: "Consume REST APIs and persist data to a database.",
      },
      {
        title: "Automation",
        description: "Write scripts that remove repetitive manual work.",
      },
    ],
    modules: [
      {
        title: "Module 1 — Python basics",
        topics: [
          "Installation, interpreter and environments",
          "Variables, numbers and strings",
          "Conditionals and loops",
          "Functions and arguments",
        ],
      },
      {
        title: "Module 2 — Data structures",
        topics: [
          "Lists and list comprehensions",
          "Dictionaries and sets",
          "Tuples and unpacking",
          "Iterators and generators",
        ],
      },
      {
        title: "Module 3 — Object-oriented Python",
        topics: [
          "Classes and objects",
          "Inheritance and composition",
          "Dunder methods",
          "Modules and packages",
        ],
      },
      {
        title: "Module 4 — Files, errors and testing",
        topics: [
          "File handling",
          "JSON and CSV processing",
          "Exceptions and logging",
          "Unit testing basics",
        ],
      },
      {
        title: "Module 5 — Libraries and APIs",
        topics: [
          "pip and virtual environments",
          "requests and REST APIs",
          "Introduction to pandas",
          "Automation scripting",
        ],
      },
      {
        title: "Module 6 — Databases and mini project",
        topics: [
          "SQL essentials",
          "SQLite and MySQL from Python",
          "CRUD operations",
          "Mini project build",
        ],
      },
    ],
    projects: [
      {
        name: "Expense tracker CLI",
        description: "Track expenses with categories and monthly summaries stored in a database.",
      },
      {
        name: "Weather dashboard script",
        description: "Fetch and format live data from a public REST API.",
      },
      {
        name: "File organiser automation",
        description: "Sort and rename files in bulk based on type and date rules.",
      },
      {
        name: "Student marks analyser",
        description: "Read CSV data, compute statistics and produce a report.",
      },
    ],
    technologies: ["Python", "pip", "requests", "pandas", "SQLite", "MySQL", "pytest", "Git"],
    careers: [
      "Python Developer",
      "Backend Developer (Trainee)",
      "Automation Engineer",
      "Data Analyst (entry level)",
      "QA Automation Engineer",
    ],
    fee: feePlaceholder,
    faqs: [
      {
        question: "Is Python good as a first language?",
        answer:
          "Yes. Its readable syntax lets you focus on problem solving while still learning solid fundamentals.",
      },
      {
        question: "Does this cover data science?",
        answer:
          "It introduces data handling with pandas. Deeper data science topics are outside this course's scope.",
      },
    ],
  },
  {
    slug: "java-full-stack",
    name: "Java Full Stack",
    glyph: "JFS",
    shortDescription:
      "Build complete web applications with Java, Spring Boot, REST APIs and React.",
    level: "Intermediate",
    careerOpportunities: ["Java Full Stack Developer", "Backend Developer"],
    averagePackage: "₹4–7 LPA",
    overview: [
      "This course takes you from Java fundamentals to a complete, deployable web application with a Spring Boot backend and a modern React frontend.",
      "You learn how the layers connect — database, API, UI and deployment — which is exactly what full stack roles expect you to be able to reason about.",
    ],
    outcomes: [
      {
        title: "Core and advanced Java",
        description: "OOP, collections and modern Java applied to real backends.",
      },
      {
        title: "Spring Boot APIs",
        description: "Build REST APIs with controllers, services and repositories.",
      },
      {
        title: "Databases and JPA",
        description: "Model data, write queries and use an ORM effectively.",
      },
      {
        title: "Frontend with React",
        description: "Components, state, routing and API integration.",
      },
      {
        title: "Authentication",
        description: "Secure endpoints and handle sessions or tokens.",
      },
      {
        title: "Deployment",
        description: "Build, configure and deploy a full stack application.",
      },
    ],
    modules: [
      {
        title: "Module 1 — Java essentials",
        topics: [
          "Core syntax refresher",
          "OOP and design principles",
          "Collections and streams",
          "Exception handling",
        ],
      },
      {
        title: "Module 2 — Databases and SQL",
        topics: [
          "Relational modelling",
          "Joins, aggregates and indexing basics",
          "JDBC fundamentals",
          "Introduction to JPA and Hibernate",
        ],
      },
      {
        title: "Module 3 — Spring and Spring Boot",
        topics: [
          "Dependency injection and beans",
          "Spring Boot project structure",
          "REST controllers and validation",
          "Service and repository layers",
        ],
      },
      {
        title: "Module 4 — Frontend foundations",
        topics: [
          "HTML, CSS and responsive layout",
          "JavaScript essentials",
          "React components and props",
          "State, hooks and routing",
        ],
      },
      {
        title: "Module 5 — Connecting the stack",
        topics: [
          "Consuming REST APIs from React",
          "Forms and client-side validation",
          "Authentication and authorization",
          "Error handling across layers",
        ],
      },
      {
        title: "Module 6 — Delivery",
        topics: [
          "Git workflow and code review",
          "Testing the backend and frontend",
          "Build and deployment",
          "Capstone project build",
        ],
      },
    ],
    projects: [
      {
        name: "Job portal application",
        description: "Employer and candidate roles, job posting, applications and search.",
      },
      {
        name: "E-commerce storefront",
        description: "Product catalogue, cart, orders and admin management.",
      },
      {
        name: "Hospital appointment system",
        description: "Doctors, slots, bookings and role-based dashboards.",
      },
      {
        name: "Learning management portal",
        description: "Courses, enrolments, content delivery and progress tracking.",
      },
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "REST APIs",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Postman",
      "Maven",
    ],
    careers: [
      "Java Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "Software Engineer",
      "API Developer",
    ],
    fee: feePlaceholder,
    faqs: [
      {
        question: "Do I need to know Java before joining?",
        answer:
          "Basic familiarity helps. The course begins with a Java essentials module before moving into the stack.",
      },
      {
        question: "Which frontend framework is used?",
        answer: "React, along with the HTML, CSS and JavaScript foundations it depends on.",
      },
    ],
  },
  {
    slug: "python-full-stack",
    name: "Python Full Stack",
    glyph: "PFS",
    shortDescription:
      "Build end-to-end web applications with Python, Django or Flask, REST APIs and React.",
    level: "Intermediate",
    careerOpportunities: ["Python Full Stack Developer", "Django Developer"],
    averagePackage: "₹4–7 LPA",
    overview: [
      "This course covers full stack web development with Python on the backend and a modern JavaScript frontend, ending in a complete deployable application.",
      "You work through data modelling, API design, UI implementation and deployment so you understand how a real product fits together.",
    ],
    outcomes: [
      {
        title: "Python for the web",
        description: "Apply Python fundamentals to server-side development.",
      },
      {
        title: "Django / Flask",
        description: "Build applications and APIs with a Python web framework.",
      },
      {
        title: "Data modelling",
        description: "Design schemas and query them through an ORM.",
      },
      {
        title: "REST API design",
        description: "Create clean, documented and validated endpoints.",
      },
      {
        title: "React frontend",
        description: "Build a responsive UI that consumes your own APIs.",
      },
      {
        title: "Deployment",
        description: "Environment configuration, static files and going live.",
      },
    ],
    modules: [
      {
        title: "Module 1 — Python essentials",
        topics: [
          "Core syntax and data structures",
          "OOP in Python",
          "Virtual environments and packages",
          "Testing basics",
        ],
      },
      {
        title: "Module 2 — Databases",
        topics: [
          "Relational modelling and SQL",
          "ORM concepts",
          "Migrations",
          "Query optimisation basics",
        ],
      },
      {
        title: "Module 3 — Backend framework",
        topics: [
          "Django project structure (or Flask app factory)",
          "Models, views and templates",
          "Django REST Framework basics",
          "Validation and serialization",
        ],
      },
      {
        title: "Module 4 — Frontend foundations",
        topics: [
          "HTML, CSS and responsive design",
          "JavaScript essentials",
          "React components and hooks",
          "Routing and state management",
        ],
      },
      {
        title: "Module 5 — Integration",
        topics: [
          "Connecting React to Python APIs",
          "Authentication and permissions",
          "File uploads and media",
          "Error handling and logging",
        ],
      },
      {
        title: "Module 6 — Delivery",
        topics: [
          "Git workflow",
          "Testing across the stack",
          "Deployment and environment config",
          "Capstone project build",
        ],
      },
    ],
    projects: [
      {
        name: "Blog and CMS platform",
        description: "Authoring, categories, comments and an admin dashboard.",
      },
      {
        name: "Task management workspace",
        description: "Projects, tasks, assignments and activity history.",
      },
      {
        name: "Online booking system",
        description: "Availability, reservations, notifications and reporting.",
      },
      {
        name: "Expense analytics dashboard",
        description: "Data entry, aggregation and interactive charts.",
      },
    ],
    technologies: [
      "Python",
      "Django",
      "Flask",
      "Django REST Framework",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Git",
      "Docker basics",
    ],
    careers: [
      "Python Full Stack Developer",
      "Django Developer",
      "Backend Developer",
      "Frontend Developer",
      "Software Engineer",
    ],
    fee: feePlaceholder,
    faqs: [
      {
        question: "Django or Flask?",
        answer:
          "The course focuses on Django for structured application development and introduces Flask for lightweight services.",
      },
      {
        question: "Is prior web development experience needed?",
        answer: "No. HTML, CSS and JavaScript foundations are covered before the React modules.",
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export const courseOptions = courses.map((course) => ({
  value: course.slug,
  label: course.name,
}));
