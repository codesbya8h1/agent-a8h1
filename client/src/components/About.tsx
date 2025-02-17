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
                  I'm a passionate developer and photographer based in New York. With over 5 years of experience in web development, I specialize in creating modern, responsive websites using the latest technologies.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I'm not coding, you can find me exploring the city with my camera, capturing urban landscapes and street photography. My work has been featured in various photography exhibitions and online publications.
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
