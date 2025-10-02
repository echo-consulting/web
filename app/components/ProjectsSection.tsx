"use client";

import ProjectCard from "./ProjectCard";

// Dette skal hentes fra Sanity etterhvert
const projectData = [
  {
    id: 1,
    title: "LFFH",
    description: "Nettside for linjeforeningen for Fiskehelse og Havbruk",
    image: "/ProjectImages/lffh_logo.png",
    previewUrl: "https://lffh.no/",
    prosjektSide: "/",
  },
  {
    id: 2,
    title: "Integrerbar",
    description: "Nettside for baren til Realfagbygget\n\n",
    image: "/ProjectImages/integrerbar_logo.jpg",
    previewUrl: "/",
    prosjektSide: "/",
  },
];

export default function ProjectsSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Prosjekter
      </h2>

      {/* Prosjekter */}
      <div className="flex flex-wrap gap-8 justify-center">
        {projectData.map((project) => (
          <div key={project.id} className="w-full sm:w-80">
            <ProjectCard
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              previewUrl={project.previewUrl}
              prosjektSide={project.prosjektSide}
            />
          </div>
        ))}
      </div>
    </>
  );
}
