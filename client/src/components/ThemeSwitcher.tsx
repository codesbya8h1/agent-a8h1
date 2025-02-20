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

  const toggleTheme = (newTheme: "light" | "dark") => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="flex gap-2">
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button
          variant={theme === "light" ? "default" : "ghost"}
          size="icon"
          onClick={() => toggleTheme("light")}
          className="rounded-full"
        >
          <Sun className="h-5 w-5" />
          <span className="sr-only">Light mode</span>
        </Button>
      </motion.div>
      
      <motion.div whileHover={{ scale: 1.1 }}>
        <Button
          variant={theme === "dark" ? "default" : "ghost"}
          size="icon"
          onClick={() => toggleTheme("dark")}
          className="rounded-full"
        >
          <Moon className="h-5 w-5" />
          <span className="sr-only">Dark mode</span>
        </Button>
      </motion.div>
    </div>
  );
}
