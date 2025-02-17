import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Data Engineering", progress: 90 },
  { name: "Backend Development", progress: 80 },
  { name: "Frontend Development", progress: 60 },
  { name: "Generative AI", progress: 80 },
  { name: "Databases", progress: 90 },
  { name: "Photography", progress: 95 },
];

export default function Skills() {
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
            Skills & Experience
          </h2>

          <Card>
            <CardHeader>
              <CardTitle>Technical Proficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.progress}%
                    </span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}