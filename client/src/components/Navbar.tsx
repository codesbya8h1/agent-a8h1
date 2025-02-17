import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-xl">Portfolio</a>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`hover:text-primary transition-colors ${
                  location === item.href ? "text-primary font-medium" : ""
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
                <SiMedium className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}