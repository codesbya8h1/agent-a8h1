import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiPython,
  SiTypescript,
  SiDotnet,
  SiJavascript,
  SiAmazonrds,
  SiGooglecloud,
  SiDjango,
  SiFastapi,
  SiReact,
  SiHtml5,
  SiOpenai,
  SiGooglegemini,
  SiPerplexity,
  SiLangchain,
  SiNeo4J,
  SiAmazonredshift,
} from "react-icons/si";
import { FileIcon } from "lucide-react";

const technologies = [
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redshift", icon: SiAmazonredshift },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MS SQL", icon: FileIcon },
      { name: "Oracle", icon: SiOracle },
      { name: "BigQuery", icon: FileIcon },
      { name: "Neo4j", icon: SiNeo4J },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FileIcon },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C#", icon: SiDotnet },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    category: "Cloud Platforms",
    items: [
      { name: "AWS", icon: SiAmazonrds },
      { name: "Google Cloud", icon: SiGooglecloud },
    ],
  },
  {
    category: "Backend Frameworks",
    items: [
      { name: "Django", icon: SiDjango },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },
  {
    category: "Frontend Technologies",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: SiHtml5},
    ],
  },
  {
    category: "AI & LLM",
    items: [
      { name: "OpenAI", icon: SiOpenai },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Perplexity", icon: SiPerplexity },
      { name: "LangChain", icon: SiLangchain },
      { name: "LlamaIndex", icon: FileIcon },
      { name: "MCP", icon: FileIcon },
    ],
  },
];

export default function Technologies() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tools & Technologies
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {technologies.map((tech) => (
              <Card key={tech.category} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {tech.items.map((item) => (
                      <motion.div
                        key={item.name}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground mt-2 text-center">
                          {item.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}