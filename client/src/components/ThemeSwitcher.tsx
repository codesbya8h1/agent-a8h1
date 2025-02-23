import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={toggleTheme}
      className="w-[80px] relative"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-start p-1"
        animate={{ justifyContent: theme === "light" ? "flex-start" : "flex-end" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="bg-primary rounded-full p-1">
          {theme === "light" ? (
            <Sun className="h-4 w-4 text-primary-foreground" />
          ) : (
            <Moon className="h-4 w-4 text-primary-foreground" />
          )}
        </div>
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}