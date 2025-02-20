import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import CompanyLogos from "@/components/CompanyLogos";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Technologies />
      <CompanyLogos />
      <Contact />
    </div>
  );
}