import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Force light theme on GitHub Pages (prevents default dark)
document.documentElement.classList.remove("dark");
document.documentElement.classList.add("light");

createRoot(document.getElementById("root")!).render(<App />);
