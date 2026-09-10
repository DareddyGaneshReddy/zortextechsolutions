import type { CourseSlug } from "./courses";

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface ProjectIdea {
  id: string;
  name: string;
  description: string;
  course: CourseSlug;
  difficulty: Difficulty;
  technologies: string[];
}

export const difficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];

export const projectIdeas: ProjectIdea[] = [
  // C
  {
    id: "c-1",
    name: "Student Record System",
    description:
      "Menu-driven console app that stores, searches and updates student records in a file.",
    course: "c",
    difficulty: "Beginner",
    technologies: ["C", "Structures", "File I/O"],
  },
  {
    id: "c-2",
    name: "Calculator with History",
    description: "Arithmetic calculator that logs every operation and can replay past results.",
    course: "c",
    difficulty: "Beginner",
    technologies: ["C", "Functions", "File I/O"],
  },
  {
    id: "c-3",
    name: "Library Management Console",
    description: "Issue and return books, track members and generate simple availability reports.",
    course: "c",
    difficulty: "Intermediate",
    technologies: ["C", "Structures", "Searching"],
  },
  {
    id: "c-4",
    name: "Text File Analyser",
    description: "Count words, lines and character frequency, and report the most common words.",
    course: "c",
    difficulty: "Intermediate",
    technologies: ["C", "Strings", "File I/O"],
  },
  {
    id: "c-5",
    name: "Mini Shell",
    description: "A small command interpreter that parses input and executes basic commands.",
    course: "c",
    difficulty: "Advanced",
    technologies: ["C", "Pointers", "Process basics"],
  },
  {
    id: "c-6",
    name: "Custom Memory Allocator",
    description: "Implement a simplified malloc and free over a fixed memory pool.",
    course: "c",
    difficulty: "Advanced",
    technologies: ["C", "Pointers", "Dynamic memory"],
  },

  // Java
  {
    id: "java-1",
    name: "Contact Book",
    description: "Add, edit, delete and search contacts with validation and persistence.",
    course: "java",
    difficulty: "Beginner",
    technologies: ["Java", "Collections", "File I/O"],
  },
  {
    id: "java-2",
    name: "Quiz Application",
    description: "Question bank, timed rounds, scoring and a result history screen.",
    course: "java",
    difficulty: "Beginner",
    technologies: ["Java", "OOP", "Collections"],
  },
  {
    id: "java-3",
    name: "Employee Management System",
    description: "CRUD application with departments, salaries and database-backed reports.",
    course: "java",
    difficulty: "Intermediate",
    technologies: ["Java", "JDBC", "MySQL"],
  },
  {
    id: "java-4",
    name: "Banking Transaction Simulator",
    description: "Accounts, deposits, transfers and statements with proper exception handling.",
    course: "java",
    difficulty: "Intermediate",
    technologies: ["Java", "OOP", "JDBC"],
  },
  {
    id: "java-5",
    name: "Multithreaded File Downloader",
    description: "Download files in parallel chunks with progress reporting and retries.",
    course: "java",
    difficulty: "Advanced",
    technologies: ["Java", "Threads", "IO"],
  },
  {
    id: "java-6",
    name: "Inventory Reporting Engine",
    description: "Aggregate stock movements using streams and export summary reports.",
    course: "java",
    difficulty: "Advanced",
    technologies: ["Java", "Streams", "MySQL"],
  },

  // Python
  {
    id: "python-1",
    name: "Expense Tracker CLI",
    description: "Record expenses by category and print monthly summaries from a database.",
    course: "python",
    difficulty: "Beginner",
    technologies: ["Python", "SQLite", "CLI"],
  },
  {
    id: "python-2",
    name: "File Organiser",
    description: "Automatically sort a messy folder into subfolders by type and date.",
    course: "python",
    difficulty: "Beginner",
    technologies: ["Python", "os", "shutil"],
  },
  {
    id: "python-3",
    name: "Weather Dashboard Script",
    description: "Fetch live weather from a public API and present a formatted forecast.",
    course: "python",
    difficulty: "Intermediate",
    technologies: ["Python", "requests", "REST API"],
  },
  {
    id: "python-4",
    name: "Student Marks Analyser",
    description: "Read CSV results, compute statistics and generate a printable report.",
    course: "python",
    difficulty: "Intermediate",
    technologies: ["Python", "pandas", "CSV"],
  },
  {
    id: "python-5",
    name: "Web Scraper with Scheduler",
    description: "Collect structured data on a schedule and store it for later analysis.",
    course: "python",
    difficulty: "Advanced",
    technologies: ["Python", "BeautifulSoup", "SQLite"],
  },
  {
    id: "python-6",
    name: "Automation Bot",
    description: "Automate a repetitive workflow end to end with logging and error recovery.",
    course: "python",
    difficulty: "Advanced",
    technologies: ["Python", "Automation", "Logging"],
  },

  // Java Full Stack
  {
    id: "jfs-1",
    name: "Personal Notes App",
    description: "Spring Boot REST API with a React UI for creating and tagging notes.",
    course: "java-full-stack",
    difficulty: "Beginner",
    technologies: ["Spring Boot", "React", "MySQL"],
  },
  {
    id: "jfs-2",
    name: "Blog Platform",
    description: "Posts, categories and comments with an admin area and pagination.",
    course: "java-full-stack",
    difficulty: "Intermediate",
    technologies: ["Spring Boot", "JPA", "React"],
  },
  {
    id: "jfs-3",
    name: "Job Portal",
    description: "Employer and candidate roles, job posting, applications and filtered search.",
    course: "java-full-stack",
    difficulty: "Intermediate",
    technologies: ["Spring Boot", "React", "MySQL"],
  },
  {
    id: "jfs-4",
    name: "E-Commerce Storefront",
    description: "Catalogue, cart, checkout, order history and an admin dashboard.",
    course: "java-full-stack",
    difficulty: "Advanced",
    technologies: ["Spring Boot", "React", "JPA", "REST"],
  },
  {
    id: "jfs-5",
    name: "Hospital Appointment System",
    description: "Doctor availability, slot booking, role-based dashboards and notifications.",
    course: "java-full-stack",
    difficulty: "Advanced",
    technologies: ["Spring Boot", "React", "Security"],
  },

  // Python Full Stack
  {
    id: "pfs-1",
    name: "To-Do Workspace",
    description: "Django REST API with a React frontend for lists, tasks and due dates.",
    course: "python-full-stack",
    difficulty: "Beginner",
    technologies: ["Django", "React", "SQLite"],
  },
  {
    id: "pfs-2",
    name: "Blog and CMS",
    description: "Authoring workflow, media uploads, categories and a moderation panel.",
    course: "python-full-stack",
    difficulty: "Intermediate",
    technologies: ["Django", "DRF", "React"],
  },
  {
    id: "pfs-3",
    name: "Online Booking System",
    description: "Availability calendar, reservations, cancellations and email confirmations.",
    course: "python-full-stack",
    difficulty: "Intermediate",
    technologies: ["Django", "PostgreSQL", "React"],
  },
  {
    id: "pfs-4",
    name: "Expense Analytics Dashboard",
    description: "Data entry, aggregation endpoints and interactive charts in the UI.",
    course: "python-full-stack",
    difficulty: "Advanced",
    technologies: ["Django", "DRF", "React", "Charts"],
  },
  {
    id: "pfs-5",
    name: "Multi-Tenant SaaS Starter",
    description: "Organisations, invitations, permissions and per-tenant data isolation.",
    course: "python-full-stack",
    difficulty: "Advanced",
    technologies: ["Django", "PostgreSQL", "React", "Auth"],
  },
];
