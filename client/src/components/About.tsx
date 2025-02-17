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
                  Hi, I'm <strong>Abhishek Kumar</strong>—a curious and passionate software
                  engineer. My journey began as a <strong>Data Engineer</strong>, but my
                  insatiable curiosity propelled me to dive into the realm of
                  <strong> full-stack development</strong>. Today, I find myself at the forefront
                  of <strong>Generative AI</strong>, exploring its boundless potential. While
                  I've been in the industry for some time, I embrace every
                  opportunity to learn with the enthusiasm of a beginner.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  I firmly resonate with Master Oogway's wisdom from Kung Fu
                  Panda: <strong><em>"There's always something to learn, even for the
                  master."</em></strong>
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Though it originates from a movie, this philosophy
                  profoundly aligns with my approach to growth and learning.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  <strong>My vision:</strong> To create something that outlives me and serves
                  those in need.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I am not in-front of my computer, you might find me
                  <strong> snowboarding down the mountains of British Columbia</strong> in winter,
                  enjoying a game of <strong>cricket in the summer</strong>, exploring new
                  destinations across the globe, or capturing breathtaking views with my
                  camera and drone. As a <strong>firm believer in healthy living</strong>,
                  I maintain a consistent workout routine, making sure to exercise at least
                  <strong> 3-4 days every week</strong>, whether it's at the gym or enjoying outdoor activities.
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