import { Container, Title } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

// Dette skal hentes fra Sanity etterhvert
export const projectData = [
  {
    slug: "lffh",
    title: "LFFH-nettsiden",
    desc: "Funksjonell nettside for Linjeforeningen for Fiskehelse og Havbruk, men mulighet for blant annet innlogging, arrangementopprettelse og påmelding til arrangementer",
    image: "/lffh_logo.png",
    link: "https://www.lffh.no/",
  },
  {
    slug: "integrerbar",
    title: "Integrerbar-nettsiden (under utvikling)",
    desc: "Nettside for baren Integrerbar for studenter på fakultet for Naturvitenskap og Teknologi som holder til på Realfagsbygget.",
    image: "/integrerbar_logo.jpg",
    link: "",
  },
  /*
  {
    slug: "prosjekt3",
    title: "Prosjekt3",
    desc: "bla bla",
    image:
      "https://gfx.nrk.no/rdq_-xdNXpQ-2cX_AyAI9gfbgoATLuCiMeTbC5etcQaQ.jpg",
  },
  */
];

export default function Prosjekter() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Container className="text-white">
      <Title className="text-5xl font-bold text-center">Prosjekter</Title>
      <div className="flex gap-4 mt-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg transition-all duration-300 hover:bg-black/10"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-64 h-64 mb-4 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="font-bold text-white tracking-widest">
              {project.title}
            </h3>
            <p className="text-[#CFCDCD] tracking-wider">{project.desc}</p>
            <Link
              to={`prosjekter/${project.slug}`}
              className="flex items-center gap-2 font-medium tracking-wider mt-2 group"
            >
              Les mer her
              <span
                className="inline-flex transition-transform duration-300"
                style={{
                  transform:
                    hoveredCard === index ? "translateX(6px)" : "translateX(0)",
                }}
              >
                <ArrowRight size={24} />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
