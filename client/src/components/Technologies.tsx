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

const technologies = [
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redshift", icon: SiAmazonredshift },
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
          <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      )},
      { name: "Neo4j", icon: SiNeo4J },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: () => (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12"
        >
          <path d="M8.851 7.56c-.226.226-.297.467-.215.723.082.255.255.467.52.637.184.114.409.17.675.17.266 0 .532-.056.798-.17.266-.113.491-.255.675-.425.184-.17.276-.368.276-.595 0-.226-.092-.425-.276-.595-.184-.17-.409-.311-.675-.425-.266-.113-.532-.17-.798-.17-.266 0-.491.057-.675.17-.265.114-.49.255-.675.425-.184.17-.276.369-.276.595 0 .227.092.425.276.595.184.17.41.312.675.425.184.114.409.17.675.17.266 0 .532-.056.798-.17.266-.113.491-.255.675-.425.184-.17.276-.368.276-.595"/>
          <path d="M16.688 12.342c-.736-.368-1.472-.552-2.208-.552-.736 0-1.472.184-2.208.552-.736.368-1.472.736-2.208 1.104-.736.368-1.472.552-2.208.552-.736 0-1.472-.184-2.208-.552-.736-.368-1.472-.736-2.208-1.104-.736-.368-1.472-.552-2.208-.552v1.104c.736 0 1.472.184 2.208.552.736.368 1.472.736 2.208 1.104.736.368 1.472.552 2.208.552.736 0 1.472-.184 2.208-.552.736-.368 1.472-.736 2.208-1.104.736-.368 1.472-.552 2.208-.552.736 0 1.472.184 2.208.552.736.368 1.472.736 2.208 1.104.736.368 1.472.552 2.208.552v-1.104c-.736 0-1.472-.184-2.208-.552-.736-.368-1.472-.736-2.208-1.104z"/>
        </svg>
      )},
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
          <path d="M12 2.5L4 18.5h16L12 2.5zm0 4l4.5 8h-9L12 6.5zm-2 9.5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"/>
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