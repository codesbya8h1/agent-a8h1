import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-6 border-t bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Abhishek Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}