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
    mode: "Industry experience",
    tagline: "Build an industry-partner project and prepare to compete for your first role.",
    summary:
      "Build with an external organization, follow a professional workflow and gain credible experience you can discuss in interviews.",
    overview: [
      "Zortex Externship is designed for students and recent graduates who know the fundamentals but still need the credible experience employers expect.",
      "Through an Industry-Partner Project, you build with an external organization from real requirements—not a copied tutorial. You work through planning, implementation, reviews and delivery with mentor support.",
      "Alongside the project, you strengthen your resume, portfolio, communication and interview performance. You leave prepared to apply with evidence of what you can do, not just a certificate.",
    ],
    icon: Rocket,
    highlights: [
      {
        title: "Industry-Partner Projects",
        description:
          "Build directly from an external organization’s requirements and experience how real project decisions, feedback and delivery work.",
      },
      {
        title: "Job-Readiness Guidance",
        description:
          "Turn your work into a stronger resume, credible portfolio story and confident interview answers for the roles you want.",
      },
    ],
    benefits: [
      {
        title: "Industry-Client Experience",
        description: "Build from real organizational requirements in a professional project environment.",
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
        title: "Industry-partner matching",
        description: "You are matched with an industry-partner project suited to your course and level.",
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
      "Students who know the basics but lack credible professional project experience",
      "Final-year students preparing for placements",
      "Graduates who need practical experience on their resume",
      "Learners who want to move from tutorials to real work",
    ],
    expectations: [
      "An industry-partner project with mentor support",
      "Professional development workflow and reviews",
      "Resume, portfolio and interview preparation",
      "Honest feedback on your readiness and what to improve",
    ],
    faqs: [
      {
        question: "What kind of industry-partner project will I work on?",
        answer:
          "You work on a project shaped by an external organization’s requirements and matched to your course and current skill level.",
      },
      {
        question: "Is placement guaranteed?",
        answer:
          "No programme can responsibly guarantee a job. Zortex helps you become a stronger candidate through industry-partner experience, portfolio proof and structured interview preparation.",
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
