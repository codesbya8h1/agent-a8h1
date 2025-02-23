export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "ai-powered-portfolio",
    title: "AI-Powered Portfolio",
    description: "A dynamic personal portfolio website built with React, Express, and AI-enhanced content generation. Features include dark mode, responsive design, and interactive components.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    liveUrl: "https://personal-portfolio-a8h1can.replit.app",
    technologies: ["React", "TypeScript", "Express", "Tailwind CSS", "OpenAI"]
  },
  {
    id: "data-visualization-dashboard",
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets using React and D3.js. Includes real-time updates and customizable charts.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    githubUrl: "https://github.com/yourusername/data-viz-dashboard",
    technologies: ["React", "D3.js", "TypeScript", "Material-UI"]
  },
  {
    id: "smart-task-manager",
    title: "Smart Task Manager",
    description: "AI-enhanced task management system that helps prioritize and organize tasks efficiently. Features natural language processing for task input.",
    thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    githubUrl: "https://github.com/yourusername/smart-tasks",
    liveUrl: "https://smart-tasks-demo.com",
    technologies: ["Python", "FastAPI", "React", "MongoDB", "Machine Learning"]
  }
];