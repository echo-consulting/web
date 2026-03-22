import { Link } from "react-router";
import { Container, Title, Stack } from "@mantine/core";
import { projectData } from "../components/projectsSection";
import { ArrowRight, Eye } from "lucide-react";

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
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 text-white">
        <Stack gap="xl">
          <Title className="text-5xl font-bold text-center">Prosjekter</Title>
          <div className="flex flex-col items-center mt-8">
            {projectData.map((project) => (
              <div
                key={project.slug}
                className="p-4 max-w-xl w-full rounded-lg overflow-hidden transition-all duration-300 text-center mx-auto"
              >
                {/* Bilde med overlay */}
                <div
                  className="mx-auto h-52 rounded-t-xl relative group overflow-hidden"
                  style={{
                    background: `url(${project.large_img}) no-repeat center center`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-[#011627] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center transition-all duration-300"
                    >
                      <Eye className="h-10 w-10 text-[#ADB7BE] hover:text-white transition-colors duration-300" />
                    </a>
                  </div>
                </div>

                {/* Info og link */}
                <Link
                  to={`${project.slug}`}
                  className="bg-[#011627] rounded-b-xl py-6 px-6 text-center block group"
                  style={{ textDecoration: "none" }}
                >
                  <div>
                    <h3 className="font-bold text-white tracking-widest mb-2">{project.title}</h3>
                    <p className="text-[#CFCDCD] tracking-wider">{project.desc}</p>

                    {/* "Les mer her" med pil */}
                    <div className="flex justify-center items-center font-medium tracking-wider mt-4 text-white transition-colors duration-300 relative group">
                      <span className="relative">
                        <span className="transition-colors duration-300 group-hover:text-blue-400">
                          Les mer her
                        </span>
                        <span className="absolute left-0 -bottom-0.5 h-[2px] bg-blue-400 transition-all duration-300 w-0 group-hover:w-full" />
                      </span>

                      <span className="inline-flex transition-transform duration-300 group-hover:translate-x-1 ml-2">
                        <ArrowRight
                          className="transition-colors duration-300 group-hover:text-blue-400"
                          size={20}
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Stack>
      </Container>
    </div>
  );
}
