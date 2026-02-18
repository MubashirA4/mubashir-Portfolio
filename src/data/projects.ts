import TechtideImage from '../assets/projects/Techtide.png'
import NexusClinicImage from '../assets/projects/Nexus Image 1.png'
import BlogImage from '../assets/projects/Blog.png'
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
  challenges?: string;
  solution?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TechTide Corporate",
    description: "Full Stack website built with React, Tailwind, and Firebase.",
    content:
      "TechTide Corporate is a modern web platform for a technology solutions company. I built it using React.js for a dynamic frontend, Tailwind CSS for a fully responsive and polished UI, and Firebase for backend services including hosting, database, and authentication. The website delivers a smooth, professional, and user-friendly experience across devices.",
    image: TechtideImage,
    category: "Full Stack",
    techStack: ["React.js", "Tailwind CSS", "Firebase"],
    date: "January 2026",
    liveUrl: "https://techtidecorporate.com/",
    challenges: "Implemented reusable React components for scalability and maintained performance optimization while ensuring a responsive, mobile-first design.",
    solution: "Integrated Firebase for robust backend services, including real-time database and hosting, ensuring a seamless and secure user experience.",
    impact: "Created a scalable and engaging digital experience that effectively reflects the brand identity and delivers full-stack excellence.",
  },
  {
  id: 2,
  title: "Nexus Clinic",
  description: "Full Stack healthcare platform built with MERN stack and Tailwind CSS.",
  content:
    "Nexus Clinic is a full-stack healthcare appointment and management platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for a clean and responsive user interface. The system allows patients to book appointments, view doctors, and access essential medical information, while backend services handle secure data storage, authentication, and API operations. Designed with performance, usability, and healthcare accessibility in mind.",
  image: NexusClinicImage,
  category: "Full Stack",
  techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  date: "March 2026",
  liveUrl: "https://mubashir-portfolio-2ify.vercel.app/", // Add live URL if deployed
  challenges:
    "Built a full healthcare appointment system with secure authentication, dynamic data management, and responsive interfaces.",
  solution:
    "Used the MERN stack to implement RESTful APIs, managed state with React, and styled robust UI with Tailwind CSS for seamless interactions.",
  impact:
    "Delivered a scalable, user-centered healthcare platform demonstrating real-world full-stack development and problem-solving abilities.",
},
  {
    id: 3,
    title: "Blog Project",
    description: "Full Stack Blog platform built with MERN stack (MongoDB, Express, React, Node.js).",
    content:
      "This Blog Project is a full-stack platform built on the MERN stack, allowing users to create, read, update, and delete blog posts. React.js provides a dynamic frontend, Tailwind CSS ensures a responsive and modern UI, Node.js and Express.js handle the backend logic, and MongoDB stores data efficiently. The platform delivers a smooth and engaging blogging experience across devices.",
    image: BlogImage,
    category: "Full Stack",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    date: "February 2026",
    liveUrl: "#", // Replace with live demo if available
    challenges:
      "Implemented full CRUD functionality with MERN stack, managed dynamic content loading, and ensured responsive design across devices.",
    solution:
      "Utilized React for frontend components, Node.js/Express for backend APIs, and MongoDB for database storage, creating a robust blogging platform.",
    impact:
      "Delivered a complete MERN stack blog platform demonstrating full-stack proficiency and real-world application of modern web technologies.",
  }
];
