export const personal = {
  name: "Ivan Tomazar",
  title: "Full-Stack Developer",
  subtitle: "Backend Focused",
  phone: "0939 346 2208",
  email: "ijstomazar@gmail.com",
  location: "Makati City, Metro Manila",
  linkedin: "https://linkedin.com/in/ivan-tomazar-74bb3b290",
  github: "https://github.com/Oshwaa",
  cvFile: "/Ivan_Joshua_Tomazar_CV.pdf",
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "R", "C++", "PHP", "SQL", "Bash"],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "FastAPI", "Falcon", "REST APIs"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "Vue.js", "Hugo", "HTML", "CSS"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "TypeORM"],
  },
  {
    category: "Tools & Infrastructure",
    items: ["Linux", "Docker", "Git", "GitHub", "Grafana"],
  },
  {
    category: "Other",
    items: ["JWT/RBAC", "SendGrid", "OpenCV", "Claude Code"],
  },
];

export const education = {
  school: "AMA Computer College Cabanatuan",
  degree: "Bachelor of Science in Computer Engineering",
  years: "2020 – 2024",
  note: "Relevant coursework: Web Application Development",
};

export const certifications = [
  {
    name: "CCNA – Introduction to Networks",
    url: "https://www.credly.com/badges/127bdddb-8eef-4b75-a680-ff9a851af286/public_url",
  },
  {
    name: "Network Security",
    url: "https://www.credly.com/badges/77582a95-d857-4e8e-8a5f-bed76a4b32ff/public_url",
  },
  {
    name: "Getting Started With Node.js",
    url: "https://simpli.app.link/nDKYty8rbMb",
  },
  {
    name: "Become a Data Science Expert with Python Django Tutorial",
    url: "https://simpli-web.app.link/e/JErTHVDQgMb",
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  note?: string;
  stack?: string[];
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full-Stack Developer",
    company: "Zato Novo Inc. (Remote)",
    companyUrl: "https://www.zatonovo.com/",
    period: "July 2025 – Present",
    note: "Position ending due to company closure in November 2026",
    stack: ["Python", "R", "Falcon", "Docker", "Bash", "Grafana", "Hugo"],
    bullets: [
      "Developed and integrated backend services and REST APIs in R and Python (Falcon) supporting ECMWF weather forecast extraction, data processing, and device management workflows.",
      "Built backend orchestration for forecast extraction and backfilling, covering service health checks, API execution, job tracking, and VM lifecycle management.",
      "Implemented historical forecast backtesting workflows spanning data processing, job execution, database operations, and device provisioning.",
      "Automated operational workflows with Bash across Docker-based services, including VM start/stop control and programmatic creation of Grafana dashboards and alerts.",
      "Implemented monitoring and alerting workflows using Grafana and cloud logging to support production troubleshooting.",
      "Developed the frontend for a City University of New York (CUNY) client website using Hugo, an energy tool lending platform, implementing website layouts and components based on project requirements.",
    ],
  },
  {
    role: "Web Developer",
    company: "81 Property Management Inc. (Makati)",
    period: "October 2024 – July 2025",
    stack: ["FastAPI", "PHP", "MySQL", "Express.js", "Vue.js", "PostgreSQL"],
    bullets: [
      "Developed a centralized attendance system using FastAPI, Vanilla PHP, and MySQL, with automated device data synchronization, voucher management, overwrite handling, and secure API endpoints.",
      "Built an inventory management system using Express.js and Vue.js for IT and facility asset tracking, allocation, usage, and status.",
      "Developed backend functionality for a real estate affiliate marketing property portal using Vue.js, FastAPI, and PostgreSQL, building APIs and data-processing workflows.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "2023 – Present",
    bullets: ["Collaborated directly with clients to translate requirements into delivered, working software."],
  },
];

export type ProjectEntry = {
  name: string;
  period?: string;
  stack: string[];
  bullets: string[];
  image?: string;
  video?: string;
  url?: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "BOMO — Hotel Booking & Reviews Platform",
    period: "July – August 2026",
    stack: ["NestJS", "Next.js", "TypeScript", "TypeORM", "PostgreSQL", "Docker", "Claude Code"],
    image: "/projects/bomo.jpg",
    url: "https://bomo.world",
    bullets: [
      "Built the backend for a hotel booking and reviews platform in NestJS and TypeScript, covering reservations, guest management, reviews, and a draft-to-publish content workflow.",
      "Integrated payment gateway processing into the reservation flow and built a reusable SendGrid email service for transactional notifications.",
      "Hardened reservation handling and validated releases against production before each deploy.",
      "Used Claude Code throughout for implementation, debugging, refactoring, and code analysis.",
    ],
  },
  {
    name: "Constellia — Hyperlocal Weather Forecasting",
    period: "2025 – Present",
    stack: ["Python", "R", "Falcon", "Docker", "Bash", "Grafana"],
    image: "/projects/constellia.jpg",
    url: "https://constellia.ca/en/",
    bullets: [
      "Developed and integrated backend services and REST APIs in R and Python (Falcon) supporting ECMWF weather forecast extraction, data processing, and device management workflows.",
      "Built backend orchestration for forecast extraction and backfilling, covering service health checks, API execution, job tracking, and VM lifecycle management.",
      "Implemented historical forecast backtesting workflows spanning data processing, job execution, database operations, and device provisioning.",
      "Automated operational workflows with Bash across Docker-based services, including VM start/stop control and programmatic creation of Grafana dashboards and alerts.",
    ],
  },
  {
    name: "NYC Energy Tools",
    period: "2025",
    stack: ["Hugo", "HTML", "CSS"],
    image: "/projects/nycet.jpg",
    url: "https://nycenergytools.com",
    bullets: [
      "Developed the frontend for a City University of New York (CUNY) client website, an energy tool lending platform, implementing website layouts and components based on project requirements.",
    ],
  },
  {
    name: "Image Culling & Sorting Tool",
    stack: ["Python", "OpenCV", "dlib", "YOLOv3", "NumPy"],
    video: "/projects/image-culling-demo.mp4",
    bullets: [
      "Built a Python command-line tool that automatically sorts large image sets into good, rejected, duplicate, and flagged folders, deriving blur, exposure, and noise thresholds from a user-supplied reference image.",
      "Implemented closed-eye detection using dlib facial landmarks and eye-aspect-ratio scoring, near-duplicate detection via perceptual hashing, and subject-focus validation combining OpenCV saliency mapping with YOLOv3 object detection.",
    ],
  },
];
