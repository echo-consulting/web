import { Link } from "react-router";
import { Container, Title, Stack } from "@mantine/core";
import { projectData } from "../components/projectsSection";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export function meta() {
  return [
    { title: "Prosjekter - echo Consulting" },
    {
      name: "description",
      content: "Eksempler på våre prosjekter.",
    },
  ];
}

export default function ProjectOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 text-white">
        <Stack gap="xl">
          <Title className="text-5xl font-bold text-center">Prosjekter</Title>
          <div className="flex flex-col items-center gap-4 mt-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="p-4 max-w-xl rounded-lg transition-all duration-300 hover:bg-black/10 text-center mx-auto"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-4 mx-auto">
                  <img
                    src={project.large_img}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <h3 className="font-bold text-white tracking-widest">
                  {project.title}
                </h3>
                <p className="text-[#CFCDCD] tracking-wider">{project.desc}</p>
                <Link
                  to={`${project.slug}`}
                  className="flex justify-center items-center gap-2 font-medium tracking-wider mt-2 group"
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
