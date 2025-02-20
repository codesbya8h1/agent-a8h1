import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function LandingPage() {
  const [_, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      setLocation("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLocation]);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <p className="text-2xl md:text-4xl font-serif italic text-primary mb-4">
          "There's always something to learn, even for a master"
        </p>
        <p className="text-lg md:text-xl text-muted-foreground">
          - Master Oogway
        </p>
      </motion.div>
    </div>
  );
}
