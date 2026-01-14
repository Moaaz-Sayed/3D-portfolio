import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  nextjs,
  react,
  redux,
  tailwindcss,
  typescript,
  vite,
  supabase,
  framerMotion as framer,
  prisma,
  shadcn,
  atom,
  devTools,
  paint,
  authentication,
  dataflow,
  lms,
} from "../assets/icons";

export const skills = [
  // Core Frontend
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },

  // Frameworks & Libraries
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: shadcn,
    name: "Shadcn UI",
    type: "Frontend",
  },

  // State Management
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  // Animation
  {
    imageUrl: framer,
    name: "Framer Motion",
    type: "Animation",
  },

  // Tools
  {
    imageUrl: vite,
    name: "Vite",
    type: "Build Tool",
  },

  // Backend / Services
  {
    imageUrl: supabase,
    name: "Supabase",
    type: "Backend as a Service",
  },
  {
    imageUrl: prisma,
    name: "Prisma",
    type: "Backend as a Service",
  },

  // Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Frontend Developer – Hands-on Experience",
    company_name: "Freelance",
    icon: atom,
    iconBg: "#b7e4c7",
    date: "October 2024 - Present",
    points: [
      "Hands-on experience building real-world frontend applications using React & Next.js .",
      "Strong understanding of component-based architecture and reusable UI patterns.",
      "Experience handling application state with multiple approaches depending on project needs.",
    ],
  },
  {
    title: "State Management Experience",
    company_name: "Freelance",
    icon: dataflow,
    iconBg: "#bde0fe",
    date: "October 2024 - Present",
    points: [
      "Worked with Redux Toolkit, Context API, and Zustand to manage global state.",
      "Implemented scalable and maintainable state structures.",
      "Handled async logic and side effects in real applications.",
    ],
  },
  {
    title: "Backend Integration Experience",
    company_name: "Freelance",
    icon: authentication,
    iconBg: "#b7e4c7",
    date: "October 2024 - Present",
    points: [
      "Integrated frontend applications with Supabase for authentication and database.",
      "Implemented protected routes and user-based data access.",
      "Worked with APIs and handled loading, error, and success states.",
    ],
  },
  {
    title: "UI & Styling Experience",
    company_name: "Freelance",
    icon: paint,
    iconBg: "#00FFFF",
    date: "October 2024 - Present",
    points: [
      "Built responsive layouts using Tailwind CSS and Styled Components.",
      "Focused on clean UI, accessibility basics, and user experience.",
      "Optimized components to reduce re-renders and improve performance.",
    ],
  },
  {
    title: "Development Workflow",
    company_name: "Freelance",
    icon: devTools,
    iconBg: "#a2d2ff",
    date: "October 2024 - Present",
    points: [
      "Used Git & GitHub for version control and project management.",
      "Deployed applications using Netlify and Vercel.",
      "Followed clean code principles and modern frontend best practices.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Moaaz-Sayed",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/moaaz-sayed-43ba12270",
  },
];

export const projects = [
  {
    iconUrl: lms,
    theme: "btn-back-red",
    name: "Moaaz LMS Platform",
    description:
      "A full-stack LMS (Learning Management System) built with Next.js, Prisma, and PostgreSQL. Supports course creation, chapters, lessons, user authentication, and file uploads with AWS S3.",
    demoLink: "https://moaaz-lms.vercel.app/",
    githubLink: "https://github.com/Moaaz-Sayed/moaaz-lms",
  },
];
