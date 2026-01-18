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
  hotel,
  hotel2,
  car,
  WhatsApp,
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
  {
    name: "WhatsApp",
    iconUrl: WhatsApp,
    link: "https://wa.me/201061682761?text=Hello%20Moaaz%2C%20I%20found%20your%20portfolio!",
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
  {
    iconUrl: hotel,
    theme: "btn-back-green",
    name: "The Wild Oasis-Website",
    description:
      "A modern hotel booking website where guests can browse cabins, view detailed information, and make reservations. Built with Next.js for fast SSR/SSG performance and TailwindCSS for a clean responsive UI. Connected to a Supabase backend to handle real bookings, user data, and availability.",
    demoLink: "https://the-wild-oasis-demo-eta.vercel.app/",
    githubLink: "https://github.com/Moaaz-Sayed/the-wild-oasis-website",
  },
  {
    iconUrl: hotel2,
    theme: "btn-back-blue",
    name: "The Wild Oasis – Admin Dashboard",
    description:
      "A hotel management dashboard built with React and Supabase. Includes authentication, cabin management, booking management, check-in/check-out flow, and a fully interactive dashboard with real-time statistics. Implemented data fetching and caching using React Query, role-based access, and a clean component-based architecture.",
    demoLink: "https://moaaz-the-wils-oasis.netlify.app/login",
    githubLink: "https://github.com/Moaaz-Sayed/the-wild-oasis",
  },
  {
    iconUrl: car,
    theme: "btn-back-pink",
    name: "Get It Done",
    description:
      "Get It Done is a full-featured to-do list app built with React, Redux Toolkit, TailwindCSS, and Supabase. It enables users to register, log in, and manage their tasks — including adding, editing, marking as complete, deleting, and viewing when tasks were created.",
    demoLink: "https://get-it-done-redux.netlify.app/login",
    githubLink: "https://github.com/Moaaz-Sayed/get-it-done-redux",
  },
];
