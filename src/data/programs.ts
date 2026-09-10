import type { LucideIcon } from "lucide-react";
import { Building2, MonitorPlay, Rocket } from "lucide-react";

export type ProgramSlug = "edge" | "elite" | "externship";

export interface Program {
  slug: ProgramSlug;
  name: string;
  mode: string;
  tagline: string;
  summary: string;
  overview: string[];
  icon: LucideIcon;
  benefits: { title: string; description: string }[];
  approach: { title: string; description: string }[];
  audience: string[];
  expectations: string[];
  highlights?: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const programs: Program[] = [
  {
    slug: "edge",
    name: "Zortex Edge",
    mode: "Offline training",
    tagline: "Curriculum-led classroom learning with hands-on practice.",
    summary:
      "An offline training programme built around a structured technical curriculum, guided practice and in-person mentorship.",
    overview: [
      "Zortex Edge is our offline training programme for students who learn best in a classroom environment with direct access to mentors.",
      "The programme follows a curriculum-based path: concepts are introduced, practised through exercises, and then applied to small builds so learning stays practical rather than theoretical.",
    ],
    icon: Building2,
    benefits: [
      {
        title: "Structured curriculum",
        description:
          "A clearly sequenced learning path so every concept builds on the previous one.",
      },
      {
        title: "In-person mentorship",
        description: "Ask questions the moment they come up and get guided corrections on the spot.",
      },
      {
        title: "Practice-first classes",
        description: "Every topic is reinforced with coding exercises rather than notes alone.",
      },
      {
        title: "Peer learning",
        description: "Learn alongside other students, review code together and build in groups.",
      },
    ],
    approach: [
      {
        title: "Concept clarity",
        description: "Fundamentals explained from first principles, with worked examples.",
      },
      {
        title: "Guided practice",
        description: "Supervised lab work where students write and debug their own code.",
      },
      {
        title: "Applied builds",
        description: "Mini builds that turn individual topics into something that runs.",
      },
      {
        title: "Review and feedback",
        description: "Regular reviews so gaps are identified early and addressed.",
      },
    ],
    audience: [
      "Students who prefer classroom learning and in-person guidance",
      "Beginners starting with programming fundamentals",
      "Learners who want structured accountability",
      "Students preparing for their first technical role",
    ],
    expectations: [
      "A curriculum-based path through your chosen course",
      "Hands-on coding practice in every session",
      "Mentor feedback on your work",
      "Guidance on how the skills map to real roles",
    ],
    faqs: [
      {
        question: "Is Zortex Edge suitable for complete beginners?",
        answer:
          "Yes. The curriculum starts from fundamentals and builds up gradually, so no prior experience is required.",
      },
      {
        question: "Which courses can I take through Edge?",
        answer:
          "Edge covers all Zortex courses: C, Java, Python, Java Full Stack and Python Full Stack.",
      },
      {
        question: "Will I build anything during the programme?",
        answer:
          "Yes. Concepts are applied through practical exercises and mini builds throughout the programme.",
      },
    ],
  },
  {
    slug: "elite",
    name: "Zortex Elite",
    mode: "Online training",
    tagline: "Structured online learning you can follow from anywhere.",
    summary:
      "An online training programme with the same structured technical depth as our classroom track, delivered remotely with mentor support.",
    overview: [
      "Zortex Elite is our online training programme for students who need the flexibility of learning remotely without losing structure.",
      "Sessions are delivered live with guided practice, and mentors stay reachable for doubt clearing, code reviews and progress checks.",
    ],
    icon: MonitorPlay,
    benefits: [
      {
        title: "Learn from anywhere",
        description: "Join from home or campus without relocating or commuting.",
      },
      {
        title: "Structured syllabus",
        description: "The same module-by-module path used in our classroom programme.",
      },
      {
        title: "Mentor support",
        description: "Dedicated doubt clearing and code review outside of sessions.",
      },
      {
        title: "Digital resources",
        description: "Practice sets, syllabuses and project ideas available online.",
      },
    ],
    approach: [
      {
        title: "Live guided sessions",
        description: "Interactive delivery where students code along rather than only watch.",
      },
      {
        title: "Assignments",
        description: "Regular assignments that reinforce each module.",
      },
      {
        title: "Code review",
        description: "Feedback on submitted work so habits improve early.",
      },
      {
        title: "Progress tracking",
        description: "Checkpoints to confirm you are ready for the next module.",
      },
    ],
    audience: [
      "Students in other cities who want the same structured training",
      "College students balancing academics with upskilling",
      "Self-learners who want structure and accountability",
      "Anyone who prefers online learning with live support",
    ],
    expectations: [
      "A structured online path through your chosen course",
      "Assignments and practice work with feedback",
      "Access to Zortex learning resources",
      "Career direction guidance for your course",
    ],
    faqs: [
      {
        question: "Are Elite sessions live or recorded?",
        answer:
          "Sessions are delivered live and interactively, with mentor support available for doubt clearing.",
      },
      {
        question: "Do I need a high-end computer?",
        answer:
          "A standard laptop with a stable internet connection is sufficient for all Zortex courses.",
      },
      {
        question: "Is the syllabus the same as the offline programme?",
        answer:
          "Yes. Elite follows the same structured technical syllabus, delivered in an online format.",
      },
    ],
  },
  {
    slug: "externship",
    name: "Zortex Externship",
    mode: "Externship",
    tagline: "Deliver projects for external organizations with structured career-readiness preparation.",
    summary:
      "An externship where you deliver solutions for external organizations, gaining the practical experience and career-readiness skills employers actually value.",
    overview: [
      "Zortex Externship is designed for students who have learned the fundamentals and now need real project exposure to become employable.",
      "Each student delivers a project for an external organization, working through it the way a professional team would — requirements, implementation, review and delivery — with mentors supporting the process.",
      "Alongside the project, students receive placement-oriented guidance covering resume, portfolio and interview preparation. Zortex supports the process; we do not promise guaranteed placement.",
    ],
    icon: Rocket,
    highlights: [
      {
        title: "External Organization Projects",
        description:
          "You deliver a solution for an external organization end to end, so you can talk about real decisions, not tutorial exercises.",
      },
      {
        title: "Placement-Oriented Guidance",
        description:
          "Resume, portfolio, communication and interview preparation aimed at helping you get placed in a real company.",
      },
    ],
    benefits: [
      {
        title: "Direct experience with external organizations",
        description: "Work in an environment that mirrors how software is actually built.",
      },
      {
        title: "Portfolio you can defend",
        description: "Finish with work you understand deeply enough to discuss in an interview.",
      },
      {
        title: "Mentor reviews",
        description: "Code and design reviews that raise the quality of your output.",
      },
      {
        title: "Interview preparation",
        description: "Mock interviews and question practice tied to your project and stack.",
      },
      {
        title: "Professional workflow",
        description: "Version control, task tracking, reviews and delivery discipline.",
      },
      {
        title: "Career direction",
        description: "Clarity on which roles fit your skills and how to target them.",
      },
    ],
    approach: [
      {
        title: "External Organization Matching",
        description: "You are matched with a project for an external organization suited to your course and level.",
      },
      {
        title: "Requirement breakdown",
        description: "Learn to convert a requirement into tasks and a working plan.",
      },
      {
        title: "Build and review cycles",
        description: "Iterative development with mentor review at each milestone.",
      },
      {
        title: "Delivery and presentation",
        description: "Present your work the way you would to a team or an interviewer.",
      },
      {
        title: "Placement preparation",
        description: "Resume, portfolio and interview readiness built around what you delivered.",
      },
    ],
    audience: [
      "Students who know the basics but lack real project experience",
      "Final-year students preparing for placements",
      "Graduates who need practical experience on their resume",
      "Learners who want to move from tutorials to real work",
    ],
    expectations: [
      "Project delivery for an external organization with mentor support",
      "Professional development workflow and reviews",
      "Resume, portfolio and interview preparation",
      "Honest feedback on your readiness and what to improve",
    ],
    faqs: [
      {
        question: "What kind of external projects will I work on?",
        answer:
          "You are assigned a project for an external organization matched to your course and current skill level, so the work is challenging but achievable.",
      },
      {
        question: "Is placement guaranteed?",
        answer:
          "No. The programme is placement-oriented: we provide real project experience and structured preparation to improve your chances, but we do not make guaranteed-placement claims.",
      },
      {
        question: "Do I need to complete a Zortex course first?",
        answer:
          "Not necessarily, but you should be comfortable with the fundamentals of your chosen technology. Talk to us and we will help you decide.",
      },
      {
        question: "Will the project help in interviews?",
        answer:
          "Yes. Because you build it yourself with review, you can explain your decisions and trade-offs, which is exactly what interviewers probe.",
      },
    ],
  },
];

export function getProgram(slug: string): Program | undefined {
  return programs.find((program) => program.slug === slug);
}
