export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  linkedin?: string;
}

/** Placeholder team data — replace names, roles and photos when provided. */
export const team: TeamMember[] = [
  {
    name: "Team Member Name",
    role: "Founder & Director",
    bio: "Leads the vision behind Zortex — practical, career-oriented technical education for students.",
    initials: "ZS",
  },
  {
    name: "Team Member Name",
    role: "Head of Training",
    bio: "Designs the curriculum and keeps every course aligned with what industry teams actually use.",
    initials: "ZS",
  },
  {
    name: "Team Member Name",
    role: "Senior Mentor — Java Stack",
    bio: "Guides students through Java, Spring Boot and full stack project work.",
    initials: "ZS",
  },
  {
    name: "Team Member Name",
    role: "Senior Mentor — Python Stack",
    bio: "Mentors Python, Django and automation learners from fundamentals to delivery.",
    initials: "ZS",
  },
  {
    name: "Team Member Name",
    role: "Externship Project Lead",
    bio: "Coordinates industry-partner projects and guides learners through reviews, milestones and delivery.",
    initials: "ZS",
  },
  {
    name: "Team Member Name",
    role: "Career Guidance Lead",
    bio: "Supports students with resume reviews, mock interviews and career direction.",
    initials: "ZS",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

/** Placeholder testimonials — replace with real student feedback when available. */
export const testimonials: Testimonial[] = [
  {
    name: "Student Name",
    role: "Java Full Stack learner",
    quote:
      "The sessions stayed practical the whole way through. By the end I had an application I could actually explain in an interview.",
    initials: "SN",
  },
  {
    name: "Student Name",
    role: "Zortex Externship",
    quote:
      "Building from real organizational requirements changed how I think about reviews, deadlines and asking the right questions.",
    initials: "SN",
  },
  {
    name: "Student Name",
    role: "Python learner",
    quote:
      "I started with no coding background. The structure and the mentor feedback made the difference.",
    initials: "SN",
  },
];
