export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "React & UI" | "Corporate & Logistics";
  timeline: string;
  organization: string;
  summary: string;
  description: string;
  keyAchievements: string[];
  techBadges: string[];
  highlights: string[];
  role: string;
  challenge: string;
  solution: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
    details: string;
  }[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education";
  title: string;
  roleOrDegree: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  highlights: string[];
  technologies?: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "Muhammad Junaid",
    firstName: "Muhammad",
    lastName: "Junaid",
    role: "Frontend Developer",
    typewriterRoles: [
      "Frontend Developer",
      "React.js Engineer",
      "UI/UX & Motion Crafter",
    ],
    status: "Available for freelance work",
    location: "Based in Lahore, Pakistan",
    address: "Sabzazar, Lahore, Punjab, Pakistan",
    availability: "Available Now",
    email: "junaidislam441@gmail.com",
    phone: "+92 328 6993079",
    whatsappUrl: "https://wa.me/923286993079",
    githubUrl: "https://github.com/",
    linkedinUrl: "https://www.linkedin.com/in/muhammad-junaid-063b06263/",
    cvPath: "/M_Junaid_CV.pdf",
    bio: "I create beautiful, functional, and user-centered digital experiences. Specializing in React.js, Tailwind CSS, and interactive web animations, I bring ideas to life through clean code, scalable architecture, and thoughtful design.",
    aboutNarrative:
      "Frontend Developer based in Sabzazar, Lahore, Pakistan, pursuing a Bachelor's in Computer Science (BSCS) at Virtual University of Pakistan. Passionate about building accessible, high-performance interfaces using React.js, TypeScript, Redux Toolkit, and modern CSS frameworks. Actively engaged in Lahore's developer community, including Google Developer Group (GDG) Lahore workshops exploring AI, Generative AI, and Gemini integrations.",
    languages: ["English (Professional)", "Urdu (Native)", "Punjabi (Native)"],
  },

  skills: [
    {
      title: "Core Languages",
      description: "Foundational programming and scripting languages",
      skills: [
        { name: "JavaScript (ES6+)", level: "Advanced", details: "Modern ESNext, asynchronous flows, closures, prototypes" },
        { name: "TypeScript", level: "Intermediate+", details: "Strict typing, generics, interfaces, scalable contracts" },
        { name: "HTML5", level: "Expert", details: "Semantic structure, accessibility (ARIA), SEO best practices" },
        { name: "CSS3", level: "Expert", details: "Flexbox, Grid, custom properties, responsive layout design" },
        { name: "Python", level: "Intermediate", details: "Scripting, algorithmic problem solving, automation" },
        { name: "C / C++", level: "Academic", details: "Data structures, memory principles, algorithms at VU" },
      ],
    },
    {
      title: "Frontend & State Management",
      description: "Modern component architectures and reactive state",
      skills: [
        { name: "React.js", level: "Advanced", details: "Hooks, custom hooks, context, memoization, lifecycle" },
        { name: "Redux Toolkit (RTK)", level: "Advanced", details: "Global state slices, RTK Query, normalized caching" },
        { name: "Next.js", level: "Intermediate+", details: "App Router, SSR, Server Components, API functions" },
      ],
    },
    {
      title: "UI Libraries & Styling",
      description: "High-contrast design systems and utility frameworks",
      skills: [
        { name: "Tailwind CSS", level: "Expert", details: "Utility-first design, custom theme config, responsive variants" },
        { name: "shadcn/ui", level: "Advanced", details: "Radix UI headless primitives with Tailwind styling" },
        { name: "Radix UI", level: "Advanced", details: "Accessible dialogs, tooltips, sheets, navigation menus" },
        { name: "Material-UI (MUI)", level: "Intermediate", details: "Enterprise components, theme overrides" },
        { name: "Bootstrap 5", level: "Advanced", details: "Rapid grid prototyping, utility classes" },
      ],
    },
    {
      title: "Animation & Smooth Scroll",
      description: "Choreographed micro-interactions and motion",
      skills: [
        { name: "GSAP", level: "Intermediate+", details: "Timeline sequencing, ScrollTrigger mechanics" },
        { name: "Framer Motion", level: "Advanced", details: "Spring physics, layout transitions, exit/enter animations" },
        { name: "Locomotive Scroll / Lenis", level: "Intermediate", details: "Inertia scrolling, parallax triggers" },
        { name: "AOS (Animate On Scroll)", level: "Advanced", details: "Viewport-triggered CSS keyframe animations" },
      ],
    },
    {
      title: "Web Performance & Tooling",
      description: "Build tooling, version control, and Core Web Vitals",
      skills: [
        { name: "Lazy Loading & Code Splitting", level: "Advanced", details: "Dynamic imports, bundle reduction, route splitting" },
        { name: "Image Optimization", level: "Advanced", details: "Modern formats (WebP/AVIF), responsive srcSets" },
        { name: "Git, GitHub & GitLab", level: "Advanced", details: "Branching strategies, PR reviews, CI/CD workflows" },
        { name: "Canva & UI Tools", level: "Intermediate", details: "Wireframing, asset prep, design system tokens" },
      ],
    },
  ] as SkillCategory[],

  timeline: [
    {
      id: "exp-aaa",
      type: "experience",
      title: "Frontend Developer (Internship)",
      roleOrDegree: "Frontend Developer Intern",
      institution: "AAA Digital Solutions / AAA Digital Marketing",
      location: "Model Town, Lahore · On-site",
      period: "Dec 2024 – Apr 2025 (5 mos)",
      status: "Recent Experience",
      highlights: [
        "Engineered responsive, user-friendly production web applications for corporate and logistics clients.",
        "Assisted in UI architecture, component debugging, cross-browser responsiveness, and performance optimization.",
        "Integrated state management, dynamic UI transitions, and modular component libraries.",
        "Collaborated with senior engineers and marketing teams to enhance Core Web Vitals and user engagement.",
      ],
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "GSAP / Framer Motion", "Git"],
    },
    {
      id: "exp-links",
      type: "experience",
      title: "Lead Generation & Client Operations",
      roleOrDegree: "Lead Operations Specialist",
      institution: "Links Immigration Consultants",
      location: "Lahore, Pakistan",
      period: "Nov 2025 – Mar 2026",
      status: "Professional",
      highlights: [
        "Sourced and qualified international sales leads via structured research and client communication.",
        "Managed CRM pipeline data, scheduled discovery appointments, and ensured dependable lead conversion.",
        "Developed clear technical communication and stakeholder alignment skills.",
      ],
      technologies: ["CRM Management", "Client Communication", "Pipeline Analytics"],
    },
    {
      id: "exp-zh",
      type: "experience",
      title: "Customer Support & USA Operations",
      roleOrDegree: "CSR (Call Center Representative)",
      institution: "ZH IT Solution",
      location: "Lahore, Pakistan",
      period: "Sep 2024 – Nov 2024",
      status: "Customer Ops",
      highlights: [
        "Handled USA inbound client communications for major telecommunications providers (Spectrum).",
        "Resolved complex service inquiries, technical billing issues, and verified customer account configurations.",
        "Maintained high customer satisfaction and rapid issue resolution metrics.",
      ],
      technologies: ["USA Client Operations", "Technical Troubleshooting", "Verbal Communication"],
    },
    {
      id: "edu-vu",
      type: "education",
      title: "Bachelor of Science in Computer Science (BSCS)",
      roleOrDegree: "Undergraduate Student",
      institution: "Virtual University of Pakistan (VU)",
      location: "Lahore, Pakistan",
      period: "2023 – 2027",
      status: "In Progress",
      highlights: [
        "Deep curriculum spanning Object-Oriented Programming, Data Structures, Algorithms, Software Engineering, and Database Systems.",
        "Applying academic computer science principles directly to modern web development and scalable frontend architecture.",
      ],
      technologies: ["Data Structures", "Algorithms", "C++", "OOP", "DBMS", "Software Engineering"],
    },
    {
      id: "edu-punjab",
      type: "education",
      title: "Intermediate in Computer Science (ICS)",
      roleOrDegree: "Higher Secondary Certificate",
      institution: "Punjab College of Engineering & Technology",
      location: "Lahore Board (LHR Board)",
      period: "2021 – 2023",
      status: "Completed",
      highlights: [
        "Focus on Computer Science, Mathematics, and Statistics with foundational programming.",
      ],
      technologies: ["C Programming", "Discrete Mathematics", "Computer Fundamentals"],
    },
    {
      id: "edu-school",
      type: "education",
      title: "Matriculation in Computer Science",
      roleOrDegree: "Secondary School Certificate",
      institution: "Royal Heaven Cambridge School",
      location: "Lahore Board (LHR Board)",
      period: "2020 – 2021",
      status: "Completed",
      highlights: [
        "Completed secondary education with high distinction in Computer Studies and Mathematics.",
      ],
      technologies: ["Computer Studies", "Basic Logic", "Mathematics"],
    },
  ] as TimelineItem[],

  projects: [
    {
      id: "abaseen-group",
      title: "Abaseen Group Corporate Web Platform",
      subtitle: "Abbaseen Real Estate & Diversified Conglomerate",
      category: "Corporate & Logistics",
      timeline: "Mar 2025 – Apr 2025",
      organization: "AAA Digital Marketing",
      summary:
        "Designed and developed a responsive, modern corporate portal for Abaseen Group, a diversified conglomerate based in Lahore operating across real estate, engineering, agriculture, and industrial services.",
      description:
        "The Abaseen Group corporate platform serves as the central digital identity for one of Lahore's emerging multi-sector conglomerates. Built to represent real estate developments, agricultural ventures, and industrial services, the platform emphasizes structural clarity, mobile responsiveness, and high-trust corporate aesthetic.",
      role: "Lead Frontend Developer & UI Architect",
      challenge:
        "Presenting multi-sector offerings (real estate developments, agricultural portfolios, and industrial contracts) without overwhelming prospective investors, while ensuring sub-second load times on mobile 3G/4G networks across Pakistan.",
      solution:
        "Architected an intuitive sector-based layout with high-contrast typography, interactive property cards, lightweight asset bundling, and deferred media loading that cut initial payload by 40%.",
      keyAchievements: [
        "Engineered smooth navigation flows, mobile-first layouts, and optimized asset loading to elevate conglomerate digital presence.",
        "Constructed reusable corporate layout components and streamlined inquiry lead funnels.",
        "Reduced Time-to-Interactive (TTI) through code minification and optimized image rendering pipelines.",
      ],
      techBadges: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Performance Optimization"],
      highlights: [
        "Multi-sector portal navigation architecture",
        "Mobile-first responsive layout with sub-second paint times",
        "Direct inquiry lead capture integration",
      ],
    },
    {
      id: "ashton-logistics",
      title: "Ashton Logistics & Supply Chain Portal",
      subtitle: "Global Freight Forwarding & Supply Chain Hub",
      category: "Corporate & Logistics",
      timeline: "Jan 2025 – Feb 2025",
      organization: "AAA Digital Marketing",
      summary:
        "Built a scalable, high-performance web platform for Ashton Logistics, a freight forwarding and supply chain solutions provider.",
      description:
        "Ashton Logistics needed a streamlined, high-trust digital portal where B2B enterprise clients can explore multimodal freight options (air, sea, land), track service capabilities, and calculate shipment quotes across global trade routes.",
      role: "Frontend Developer & UI Specialist",
      challenge:
        "Creating an intuitive quoting flow and service discovery catalog that provides instant clarity for enterprise logistics managers across desktop and mobile devices.",
      solution:
        "Leveraged Tailwind CSS for utility-first modular styling combined with interactive JavaScript form handling, micro-interactions, and reactive quote estimation cards.",
      keyAchievements: [
        "Utilized Tailwind CSS for utility-first scalable styling and interactive JavaScript interfaces.",
        "Guaranteed seamless cross-device navigation and rapid quote discovery across desktop and handheld viewports.",
        "Structured clean semantic markup resulting in improved organic search visibility for core logistics keywords.",
      ],
      techBadges: ["HTML5", "Tailwind CSS", "JavaScript", "UI/UX Design", "Responsive Layout"],
      highlights: [
        "Interactive freight quote estimation UI",
        "Cross-device mobile-optimized logistics catalog",
        "Lightweight utility-driven CSS architecture",
      ],
    },
    {
      id: "aaa-digital",
      title: "AAA Digital Interactive Web Experience",
      subtitle: "Agency Portfolio & Modular Component System",
      category: "React & UI",
      timeline: "Dec 2024 – Apr 2025",
      organization: "AAA Digital Solutions",
      summary:
        "Developed modular, reusable React.js frontend interfaces and interactive scroll animations for agency web applications.",
      description:
        "Developed core UI interfaces and high-impact motion micro-interactions for AAA Digital's internal design showcase and client delivery framework. The project focused on modular component engineering and buttery-smooth animations.",
      role: "Frontend Developer Intern",
      challenge:
        "Implementing fluid scroll triggers and rich motion without degrading frame rates or bloating JavaScript bundle sizes.",
      solution:
        "Employed React.js paired with Framer Motion and GSAP timeline triggers, leveraging code splitting and dynamic component mounting to preserve continuous 60fps rendering.",
      keyAchievements: [
        "Integrated modern state management, code splitting, and fluid UI transitions to boost engagement.",
        "Achieved 95+ Google Lighthouse scores across Performance, Accessibility, and Best Practices.",
        "Engineered an extensible design token system enabling fast theme adjustments across agency projects.",
      ],
      techBadges: ["React.js", "Tailwind CSS", "GSAP / Framer Motion", "Git", "State Management"],
      highlights: [
        "Choreographed GSAP and Framer Motion transitions",
        "60 FPS smooth scrolling and interactive card physics",
        "Modular reusable React component library",
      ],
    },
  ] as Project[],

  services: [
    {
      id: "srv-frontend",
      number: "01",
      title: "Custom Frontend Development",
      description:
        "Building fast, interactive Single Page Applications (SPAs) and modern web portals using React.js, TypeScript, and Redux Toolkit with strict type safety and scalable architecture.",
      deliverables: [
        "Single Page Applications (SPA)",
        "React.js & Next.js Architecture",
        "Redux Toolkit State Slices",
        "Clean REST API Integration",
      ],
      icon: "Code2",
    },
    {
      id: "srv-ui",
      number: "02",
      title: "Responsive UI & Design Systems",
      description:
        "Translating Figma and custom designs into pixel-perfect, accessible interfaces using Tailwind CSS, shadcn/ui, Radix UI, Material-UI, or Bootstrap 5 across all viewports.",
      deliverables: [
        "Pixel-Perfect Mobile-First Layouts",
        "shadcn/ui & Radix UI Primitives",
        "Custom Design System Tokens",
        "Cross-Browser Compatibility",
      ],
      icon: "Layout",
    },
    {
      id: "srv-motion",
      number: "03",
      title: "Web Animations & Micro-Interactions",
      description:
        "Crafting smooth scroll experiences and high-impact motion choreography with GSAP, Framer Motion, Lenis, and Locomotive Scroll to elevate brand storytelling.",
      deliverables: [
        "Framer Motion State Transitions",
        "GSAP ScrollTrigger Choreography",
        "Magnetic Buttons & Hover Physics",
        "Interactive Typewriter Effects",
      ],
      icon: "Sparkles",
    },
    {
      id: "srv-saas",
      number: "04",
      title: "SaaS & Corporate Web Design",
      description:
        "Designing clean, conversion-focused landing pages and multi-page corporate websites tailored for corporate conglomerates, logistics providers, and tech startups.",
      deliverables: [
        "High-Conversion Landing Pages",
        "Corporate Web Portals",
        "B2B Lead Capture Flows",
        "Editorial Monochrome Aesthetics",
      ],
      icon: "Briefcase",
    },
    {
      id: "srv-performance",
      number: "05",
      title: "Frontend Performance Optimization",
      description:
        "Improving load speeds, Core Web Vitals, and Lighthouse scores via lazy loading, code splitting, asset minification, and image optimization pipelines.",
      deliverables: [
        "90+ Lighthouse Audit Targeting",
        "Asset & Font Optimization",
        "Dynamic Code Splitting",
        "Reduced First Input Delay (FID)",
      ],
      icon: "Gauge",
    },
    {
      id: "srv-modernization",
      number: "06",
      title: "UX Research & Interface Modernization",
      description:
        "Auditing existing web products to eliminate usability bottlenecks, upgrade legacy markup to modern React & Tailwind, and refine developer experience.",
      deliverables: [
        "UI/UX Usability Auditing",
        "Legacy Code Refactoring",
        "Accessibility (WCAG) Fixes",
        "Component Modularization",
      ],
      icon: "SearchCheck",
    },
  ] as ServiceItem[],
};
