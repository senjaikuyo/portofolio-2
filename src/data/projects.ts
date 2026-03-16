export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  category: "web" | "mobile" | "backend";
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "dashboard-analytics",
    title: "Dashboard Analytics",
    description: "A comprehensive real-time analytics dashboard for monitoring business KPIs.",
    image: "https://picsum.photos/1200/800?random=1",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker Mobile",
    description: "Personal finance management app with smart categorization powered by AI.",
    image: "https://picsum.photos/1200/800?random=2",
    stack: ["React Native", "TypeScript", "Expo"],
    category: "mobile",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with product management and Stripe integration.",
    image: "https://picsum.photos/1200/800?random=3",
    stack: ["Next.js", "Prisma", "Stripe"],
    category: "web",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    id: "portfolio-v2",
    title: "Portfolio Website V2",
    description: "Modern personal portfolio website built with cutting-edge front-end technologies.",
    image: "https://picsum.photos/1200/800?random=4",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    category: "web",
    demoUrl: "https://rasyazildan.dev",
    githubUrl: "https://github.com",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates via WebSockets.",
    image: "https://picsum.photos/1200/800?random=5",
    stack: ["React Native", "Node.js", "Socket.io"],
    category: "mobile",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "api-gateway",
    title: "API Gateway Service",
    description: "Scalable API gateway with rate limiting, logging, and microservice orchestration.",
    image: "https://picsum.photos/1200/800?random=6",
    stack: ["Node.js", "Express", "Docker"],
    category: "backend",
    demoUrl: "https://api-docs.example.com",
    githubUrl: "https://github.com",
  },
];
