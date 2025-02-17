import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  Hi, I’m Abhishek Kumar—a curious and passionate software
                  engineer. My journey began as a Data Engineer, but my
                  insatiable curiosity propelled me to dive into the realm of
                  full-stack development. Today, I find myself at the forefront
                  of Generative AI, exploring its boundless potential. While
                  I’ve been in the industry for some time, I embrace every
                  opportunity to learn with the enthusiasm of a beginner. I
                  firmly resonate with Master Oogway’s wisdom from Kung Fu
                  Panda: **_“There’s always something to learn, even for the
                  master.”_** Though it originates from a movie, this philosophy
                  profoundly aligns with my approach to growth and learning.
                  **My vision:** To create something that outlives me and serves
                  those in need.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not coding, you can find me exploring the city with
                  my camera, capturing urban landscapes and street photography.
                  My work has been featured in various photography exhibitions
                  and online publications.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6">
                <h3 className="text-3xl font-bold mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-muted-foreground">Photos Published</p>
              </Card>
              <Card className="p-6">
                <h3 className="text-3xl font-bold mb-2">10+</h3>
                <p className="text-muted-foreground">Awards Won</p>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
