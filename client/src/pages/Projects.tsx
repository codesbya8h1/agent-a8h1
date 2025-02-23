import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projectData";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="line-clamp-1">{project.title}</span>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">View on GitHub</span>
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button variant="ghost" size="icon" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-5 w-5" />
                          <span className="sr-only">View live demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
