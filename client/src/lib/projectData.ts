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
    id: "python-code-visualizer",
    title: "Python Code Visualizer",
    description: "This project helps you visualize codes from a python file or a python project directory. The flow includes the entry point of the script of project and further execution calls between the methods in tree graph format.",
    thumbnail: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=1471&auto=format&fit=crop",
    githubUrl: "https://github.com/codesbya8h1/code_visualizer",
    technologies: ["Python", "NetworkX", "Graphviz", "Flask", "React"]
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