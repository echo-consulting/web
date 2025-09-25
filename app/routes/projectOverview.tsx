import { Link } from "react-router";
import { Container, Title, Stack } from "@mantine/core";
import { projectData } from "../components/projects";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ProjectOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 text-white">
        <Stack gap="xl">
          <Title className="text-5xl font-bold text-center">Prosjekter</Title>
          <div className="flex flex-row gap-4 mt-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-lg transition-all duration-300 hover:bg-black/10"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex w-64 h-64 mb-4 overflow-hidden relative">
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
                        hoveredCard === index
                          ? "translateX(6px)"
                          : "translateX(0)",
                    }}
                  >
                    <ArrowRight size={24} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </div>
  );
}
