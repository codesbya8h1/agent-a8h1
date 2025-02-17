import { motion } from "framer-motion";
import { SiCognizant, SiAmazon, SiAccenture } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const companies = [
  {
    name: "Cognizant",
    icon: SiCognizant,
    url: "https://www.cognizant.com/ca/en",
  },
  {
    name: "Amazon",
    icon: SiAmazon,
    url: "https://www.amazon.com/",
  },
  {
    name: "Arkansas Department of Education",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      </svg>
    ),
    url: "https://ade.arkansas.gov/",
  },
  {
    name: "Blackline",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M2 2L8 12L2 22H6L12 12L6 2H2Z M12 2L18 12L12 22H16L22 12L16 2H12Z" />
      </svg>
    ),
    url: "https://www.blackline.com/",
  },
  {
    name: "Acxiom",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
    url: "https://www.acxiom.com/",
  },
  {
    name: "Benchsci",
    icon: () => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7v-2zm0-4h10v2H7V7zm0 8h10v2H7v-2z" />
      </svg>
    ),
    url: "https://www.benchsci.com/",
  },
  {
    name: "University of Arkansas at Little Rock",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
      </svg>
    ),
    url: "https://ualr.edu/",
  },
];

export default function CompanyLogos() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Companies I've Worked With
          </h2>

          <Card>
            <CardContent className="p-8">
              <div className="flex flex-nowrap overflow-x-auto gap-16 items-center justify-center py-8">
                {companies.map((company, index) => (
                  <motion.a
                    key={company.name}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex-shrink-0 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <company.icon className="w-16 h-16" />
                    <span className="sr-only">{company.name}</span>
                  </motion.a>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}