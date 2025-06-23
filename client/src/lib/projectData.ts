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
    thumbnail: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a",
    githubUrl: "https://github.com/codesbya8h1/code_visualizer",
    technologies: ["Python", "LangGraph", "NetworkX", "Graphviz"]
  },
  {
    id: "clarityq",
    title: "ClarityQ",
    description: "A simple proof-of-concept application for asking questions that further clarifies the ambiguity of the original question. Helps improve question clarity and understanding through iterative refinement.",
    thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
    githubUrl: "https://github.com/codesbya8h1/ClarityQ",
    technologies: ["Python", "AI", "Question Processing", "NLP"]
  }
];