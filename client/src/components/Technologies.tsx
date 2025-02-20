import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiOracle,
  SiPython,
  SiOpenjdk,
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
} from "react-icons/si";

const technologies = [
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { 
        name: "MS SQL", 
        icon: () => (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12"
          >
            <path d="M3.656 12.115a31.705 31.705 0 0 0 6.951 3.779v-.005c-.951-1.045-1.887-2.102-2.808-3.17L3.656 12.115zm6.948.842.005.003h.001l-.003-.001A.01.01 0 0 0 10.604 12.957zM4.321 6.096a31.34 31.34 0 0 0 6.286 3.414v-.005c-.951-1.045-1.887-2.102-2.808-3.17L4.321 6.096zm6.283.477.005.003h.001l-.003-.001A.01.01 0 0 0 10.604 6.573zM21 4.279v15.442c-6.337 3.167-12.702-.545-18-1.906V2.374C8.973 4.006 15.273 7.919 21 4.279z"/>
          </svg>
        )
      },
      { name: "Oracle", icon: SiOracle },
      { name: "BigQuery", icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path d="M16.5 14.5c0 .42-.1.8-.32 1.13l2.5 2.5c.58-.65.98-1.48 1.12-2.4H21v-2.5h-1.2c-.11-.74-.43-1.41-.9-1.98l-1.72 1.72c.2.33.32.71.32 1.13zm-2.5 0c0-1.1-.89-2-2-2s-2 .9-2 2 .9 2 2 2 2-.89 2-2zM7.1 8.7L5.38 6.98C4.82 7.61 4.44 8.36 4.28 9.18H3v2.5h1.28c.11.74.43 1.41.9 1.98l1.72-1.72c-.2-.33-.32-.71-.32-1.13 0-1.1.89-2 2-2s2 .9 2 2-.9 2-2 2c-.42 0-.8-.1-1.13-.32l-2.5 2.5c.65.58 1.48.98 2.4 1.12V21h2.5v-1.2c.74-.11 1.41-.43 1.98-.9l-1.72-1.72c-.33.2-.71.32-1.13.32-1.1 0-2-.89-2-2z"/>
        </svg>
      )},
      { name: "Neo4j", icon: SiNeo4J },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
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
      { name: "LlamaIndex", icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path d="M12 2L2 19h20L12 2zm0 4l6.5 11h-13L12 6z"/>
        </svg>
      )},
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