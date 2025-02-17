import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    console.log("Image loaded successfully");
    setIsLoading(false);
    setImageError(false);
  };

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    console.error("Image failed to load:", e);
    setIsLoading(false);
    setImageError(true);
  };

  // Get the current hostname to handle both development and production
  const baseUrl = window.location.origin;
  const imageUrl = `${baseUrl}/photos/abhi.png`;
  const placeholderUrl =
    "https://images.unsplash.com/photo-1624996379697-f01d168b1a52?q=80&w=1000&auto=format&fit=crop";

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-start relative py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Abhishek Kumar
              <br />
              <span className="text-4xl md:text-6xl">
                The Full-Stack Life:
                <br />
                Engineering, AI, and Beyond
              </span>
            </h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From data engineering to full stack development, now crafting
              innovative solutions in the Generative AI domain.
            </motion.p>

            <motion.div
              className="prose prose-lg dark:prose-invert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="mb-4">
                I started my journey as a data engineer, where I developed a
                strong foundation in data processing, ETL pipelines, and
                database optimization. This experience gave me a unique
                perspective on handling and analyzing large-scale data systems.
              </p>
              <p>
                As technology evolved, so did my role. I expanded my skills into
                full-stack development, mastering both frontend and backend
                technologies. Today, I'm focused on pushing the boundaries of
                what's possible with Generative AI, creating innovative
                solutions that bridge the gap between traditional software
                engineering and artificial intelligence.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative aspect-square rounded-lg overflow-hidden shadow-xl"
          >
            {isLoading && (
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                Loading...
              </div>
            )}
            {!imageError ? (
              <img
                src={imageUrl}
                alt="Abhishek Kumar - Full Stack Engineer"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            ) : ( 
              <img
                src={placeholderUrl}
                alt="Technology Placeholder"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If even the placeholder fails, show a colored background
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add(
                    "bg-gradient-to-br",
                    "from-primary/20",
                    "to-primary/40",
                  );
                }}
              />
            )}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}
