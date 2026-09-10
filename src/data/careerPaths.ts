import type { CourseSlug } from "./courses";

export interface CareerPath {
  course: CourseSlug;
  courseName: string;
  skills: string[];
  roles: { title: string; description: string }[];
  direction: string;
  nextSteps: string[];
}

export const careerPaths: CareerPath[] = [
  {
    course: "c",
    courseName: "C",
    skills: ["Programming logic", "Pointers & memory", "Data structures", "Debugging", "File I/O"],
    roles: [
      {
        title: "Junior Software Developer",
        description: "Write and maintain application logic in a compiled language.",
      },
      {
        title: "Embedded Systems Trainee",
        description: "Work close to hardware where C remains the primary language.",
      },
      {
        title: "Systems Programming Trainee",
        description: "Contribute to tooling, drivers and low-level utilities.",
      },
      {
        title: "QA / Testing Associate",
        description: "Test and validate software with a strong grasp of internals.",
      },
    ],
    direction:
      "C is a foundation track. It sharpens your problem solving and makes specialising in systems, embedded work or another language much faster.",
    nextSteps: [
      "Move into Java or Python for application development",
      "Study data structures and algorithms in depth",
      "Explore embedded development or operating system concepts",
    ],
  },
  {
    course: "java",
    courseName: "Java",
    skills: ["Core Java", "OOP", "Collections", "SQL", "JDBC", "Streams"],
    roles: [
      {
        title: "Java Developer",
        description: "Build and maintain Java applications and services.",
      },
      {
        title: "Backend Developer",
        description: "Design server-side logic, APIs and database interactions.",
      },
      {
        title: "Software Engineer (Trainee)",
        description: "Join a product team and grow across the codebase.",
      },
      {
        title: "QA Automation Engineer",
        description: "Automate test suites using Java-based frameworks.",
      },
    ],
    direction:
      "Java leads directly into backend and enterprise development, and is the natural entry point to the Java Full Stack track.",
    nextSteps: [
      "Progress to Java Full Stack with Spring Boot",
      "Learn Spring, Hibernate and REST API design",
      "Practise data structures and algorithms for interviews",
    ],
  },
  {
    course: "python",
    courseName: "Python",
    skills: ["Python fundamentals", "OOP", "APIs", "SQL", "Automation", "Data handling"],
    roles: [
      {
        title: "Python Developer",
        description: "Build applications, services and internal tools in Python.",
      },
      {
        title: "Backend Developer (Trainee)",
        description: "Develop APIs and server-side features.",
      },
      {
        title: "Automation Engineer",
        description: "Replace manual processes with reliable scripts and pipelines.",
      },
      {
        title: "Data Analyst (entry level)",
        description: "Clean, analyse and report on data using Python tooling.",
      },
    ],
    direction:
      "Python opens several directions — backend, automation, testing and data. Choose one and go deep after the fundamentals.",
    nextSteps: [
      "Progress to Python Full Stack with Django",
      "Explore data analysis with pandas and visualisation",
      "Learn testing frameworks and CI basics",
    ],
  },
  {
    course: "java-full-stack",
    courseName: "Java Full Stack",
    skills: [
      "Java & OOP",
      "Spring Boot",
      "JPA / Hibernate",
      "SQL",
      "REST APIs",
      "React",
      "Git",
      "Deployment",
    ],
    roles: [
      {
        title: "Java Full Stack Developer",
        description: "Own features across the database, API and UI layers.",
      },
      {
        title: "Backend Developer",
        description: "Specialise in Spring Boot services and data modelling.",
      },
      {
        title: "Frontend Developer",
        description: "Specialise in React interfaces backed by REST APIs.",
      },
      {
        title: "API Developer",
        description: "Design, document and maintain service interfaces.",
      },
    ],
    direction:
      "Full stack roles value engineers who can reason about the whole system. This track prepares you for product teams and service development.",
    nextSteps: [
      "Take Zortex Externship for experience with external organization projects",
      "Learn microservices, caching and cloud deployment",
      "Build a portfolio of two or three complete applications",
    ],
  },
  {
    course: "python-full-stack",
    courseName: "Python Full Stack",
    skills: [
      "Python",
      "Django / Flask",
      "ORM & migrations",
      "SQL",
      "REST APIs",
      "React",
      "Git",
      "Deployment",
    ],
    roles: [
      {
        title: "Python Full Stack Developer",
        description: "Deliver features from database schema through to UI.",
      },
      {
        title: "Django Developer",
        description: "Build and scale Django applications and APIs.",
      },
      {
        title: "Backend Developer",
        description: "Focus on data modelling, endpoints and integrations.",
      },
      {
        title: "Frontend Developer",
        description: "Build React interfaces against Python services.",
      },
    ],
    direction:
      "Python full stack skills suit product startups and internal platform teams where speed of delivery matters.",
    nextSteps: [
      "Take Zortex Externship for experience with external organization projects",
      "Learn Docker, CI/CD and cloud hosting",
      "Add background jobs and caching to your projects",
    ],
  },
];

export function getCareerPath(course: string): CareerPath | undefined {
  return careerPaths.find((path) => path.course === course);
}
