import { Container, Title } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

// Dette skal hentes fra Sanity etterhvert
const projectData = [
  {
    title: "Prosjekt1",
    desc: "bla bla",
    image: "https://www.alvdalmiv.no/wp-content/uploads/2017/04/Bilder_2017_Uke13_fgp-1024x576.jpg",
  },
  {
    title: "Prosjekt2",
    desc: "bla bla",
    image: "https://www.visitjotunheimen.no/dmsimgs/Flaklypa_Grand_Prix_16x9_1966284657.jpg",
  },
  {
    title: "Prosjekt3",
    desc: "bla bla",
    image: "https://gfx.nrk.no/rdq_-xdNXpQ-2cX_AyAI9gfbgoATLuCiMeTbC5etcQaQ.jpg",
  },
];

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <Container className="text-white">
      <Title className="text-5xl font-bold text-center">Prosjekter</Title>
      <div className="flex gap-4 mt-8">
        {projectData.map((project) => (
          <button
            key={project.title}
            type="button"
            className="p-4 rounded-lg transition-all duration-300 hover:bg-black/10 text-left"
            onMouseEnter={() => setHoveredCard(project.title)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-64 h-64 mb-4 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>
            <h3 className="font-bold text-white tracking-widest">{project.title}</h3>
            <p className="text-[#CFCDCD] tracking-wider">{project.desc}</p>
            <h4 className="flex items-center gap-2 font-medium tracking-wider mt-2 group">
              Les mer her
              <span
                className="inline-flex transition-transform duration-300"
                style={{
                  transform: hoveredCard === project.title ? "translateX(6px)" : "translateX(0)",
                }}
              >
                <ArrowRight size={24} />
              </span>
            </h4>
          </button>
        ))}
      </div>
    </Container>
  );
}
