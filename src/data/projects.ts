export interface Project {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Arjuna",
    description: "Personal Portfolio Website for talented design engineer",
    content:
      "A comprehensive portfolio website designed to showcase personal achievements, projects, and skills. Built with a focus on modern aesthetics and smooth user experience. The project emphasizes responsive design and clean typography to ensure professional presentation across all devices.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964",
    category: "Website",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    date: "January 2024",
    liveUrl: "https://example.com/arjuna",
    githubUrl: "https://github.com/example/arjuna",
  },
  {
    id: 2,
    title: "Bima",
    description: "Website and branding for AI Automation Company",
    content:
      "Digital presence and visual identity for a cutting-edge AI automation firm. This project involved creating a powerful landing page that communicates complex AI concepts simply and effectively. The branding includes a custom color palette and typography that reflects innovation and reliability.",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974",
    category: "Branding",
    techStack: ["Next.js", "Three.js", "Styled Components", "AI APIs"],
    date: "December 2023",
    liveUrl: "https://example.com/bima",
  },
  {
    id: 3,
    title: "Mandala",
    description: "Website and branding for Design Agency",
    content:
      "A creative agency website built to highlight high-end design work and artistic direction. The site features dynamic grid layouts, sophisticated animations, and a seamless navigation system. It serves as both a portfolio and a client acquisition tool for the agency.",
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339bbe3f35?q=80&w=1935",
    category: "Website",
    techStack: ["React", "Greensock (GSAP)", "Canvas", "Payload CMS"],
    date: "November 2023",
    githubUrl: "https://github.com/example/mandala",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with cart management, payment integration, and admin dashboard.",
    content: "A robust e-commerce platform built for high performance and scalability. Features include real-time inventory management, secure payment processing with Stripe, and a comprehensive admin panel for product and order management. The frontend is built for speed and SEO optimization.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089",
    category: "Web Application",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    date: "October 2023",
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration.",
    content: "A professional-grade task management tool designed for teams. It features drag-and-drop task boards, real-time collaboration using WebSockets, and detailed project analytics. The application focus on productivity and intuitive user experience.",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2032",
    category: "Web Application",
    techStack: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
    date: "September 2023",
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/tasks"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    content: "A sleek weather dashboard providing accurate, real-time weather data. It integrates multiple weather APIs to provide detailed forecasts, humidity levels, and wind speed. Features an interactive map for global weather visualization.",
    image: "https://images.unsplash.com/photo-1504608510435-c69bb9c504ca?q=80&w=2010",
    category: "Web Application",
    techStack: ["React", "OpenWeather API", "Chart.js"],
    date: "August 2023",
    liveUrl: "https://example.com/weather",
    githubUrl: "https://github.com/example/weather"
  }
];
