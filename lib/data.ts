/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — every section of the site renders from this file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Samad Alakbarov",
  role: "Fullstack developer — Baku, Azerbaijan",
  email: "samad.a.alakbarov@gmail.com",
  phone: "+994 50 348 02 60",
  phoneHref: "+994503480260",
  github: "https://github.com/Samad126",
  githubHandle: "github.com/Samad126",
  linkedin: "https://linkedin.com/in/samad-alakbarov",
  linkedinHandle: "in/samad-alakbarov",
  location: "Baku, Azerbaijan",
  timezone: "Baku · GMT+4",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const statement = {
  lead: "Two years of production work: fintech dashboards, a real-time AI writing assistant, and an education platform I led with three developers.",
  side: [
    "Frontend-focused in React and Next.js — real-time features, complex state, and UI that holds up under audit. Backed by backend work in Node.js and NestJS.",
    "I use AI coding tools daily (Copilot, Cursor, Claude Code) and review, test and security-check everything they produce before it merges.",
  ],
} as const;

export type Role = {
  when: string;
  place: string;
  title: string;
  org: string;
  points: string[];
  tags: string[];
};

export const experience: Role[] = [
  {
    when: "Apr 2026 — Present",
    place: "Baku",
    title: "JavaScript Software Engineer Intern",
    org: "EPAM Systems",
    points: [
      "Building on enterprise-scale projects inside a global engineering organisation.",
      "Writing unit and integration tests with Jest and React Testing Library so refactoring stays safe.",
      "Driving AI coding assistants with precise prompts, then reviewing, testing and security-checking the output before merge.",
    ],
    tags: ["React", "Jest", "RTL", "Copilot", "Cursor", "Claude Code"],
  },
  {
    when: "Oct 2025 — Dec 2025",
    place: "Baku",
    title: "Frontend Developer",
    org: "Bridge Spero · Startup",
    points: [
      "Led a team of three developers on a full education platform in Next.js App Router and TypeScript.",
      "Architected authentication end to end: JWT, protected routes, and role-based access for teachers and students.",
      "Shipped dashboards, course management and profiles; React Hook Form with validation across every form-heavy screen.",
    ],
    tags: ["Next.js", "TypeScript", "JWT / RBAC", "React Hook Form", "REST"],
  },
  {
    when: "Sep 2024 — Sep 2025",
    place: "Baku",
    title: "JavaScript Software Engineer",
    org: "KODAZE LTD",
    points: [
      "Built a fintech analytics dashboard covering HR, contracts, user admin and accounting in React/Next.js and TypeScript.",
      "Built an AI writing assistant with live corrections over WebSockets — responsive and accessible throughout.",
      "Developed backend APIs in NestJS and wired them to the frontend.",
      "Applied fintech security practice: Zod schema validation, JWT/RBAC, secure sessions, dependency vulnerability checks.",
    ],
    tags: ["React", "NestJS", "WebSockets", "Zod", "Fintech security"],
  },
  {
    when: "Jun 2024 — Jan 2025",
    place: "Baku · Freelance",
    title: "Frontend Developer",
    org: "OENVA LLC",
    points: [
      "Built a knowledge-competition app in React serving 300+ daily active users — scoring logic, auth and responsive quiz interfaces.",
      "Tuned performance and accessibility with Lighthouse audits; semantic HTML and ARIA for screen-reader support.",
    ],
    tags: ["React", "Lighthouse", "ARIA", "Accessibility"],
  },
];

export const skillRows = [
  { label: "Core", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
  {
    label: "Frontend",
    value:
      "React.js, Next.js (App & Pages Router), Redux Toolkit / RTK Query, Zustand, Context API",
  },
  {
    label: "Styling",
    value: "Tailwind CSS, CSS Modules, Material-UI, Ant Design, ShadCN, Bootstrap",
  },
  {
    label: "Backend & data",
    value: "Node.js, NestJS, Prisma (PostgreSQL), REST API design",
  },
  {
    label: "API & state",
    value:
      "REST integration, TanStack Query / RTK Query, Axios, WebSockets for real-time data",
  },
  {
    label: "Auth & security",
    value:
      "JWT, refresh tokens, protected routes, RBAC, input sanitisation with Zod, dependency vulnerability scanning, OAuth2",
  },
  {
    label: "Testing & a11y",
    value:
      "Jest, React Testing Library, unit & integration testing, semantic HTML, ARIA, Lighthouse audits",
  },
  {
    label: "Performance & SEO",
    value: "Core Web Vitals, meta tags, OpenGraph, i18n and multi-language support, PWAs",
  },
  {
    label: "AI-assisted development",
    value:
      "GitHub Copilot, Cursor, Claude Code — prompt design, critical evaluation and security review of generated code",
  },
  {
    label: "Ways of working",
    value: "Git / GitHub / GitLab, Git flow, JIRA, Docker, Vite, GitHub Actions, ESLint & Prettier, Figma handoff",
  },
] as const;

export const educationItems = [
  {
    degree: "Master of Data Analysis",
    school: "Azerbaijan Technical University",
    when: "Sep 2026 — Present",
  },
  {
    degree: "Bachelor of Information Technology",
    school: "Baku Engineering University",
    when: "Sep 2022 — Jul 2026",
  },
] as const;

export const languages = [
  { name: "Azerbaijani", level: "Native" },
  { name: "English", level: "B2 Intermediate" },
  { name: "Russian", level: "Beginner" },
] as const;

export const contactRows = [
  { label: "Phone", value: person.phone, href: `tel:${person.phoneHref}` },
  { label: "GitHub", value: person.githubHandle, href: person.github, external: true },
  { label: "LinkedIn", value: person.linkedinHandle, href: person.linkedin, external: true },
  { label: "Based in", value: person.location },
] as const;
