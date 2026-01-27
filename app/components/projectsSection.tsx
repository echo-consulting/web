import ProjectCard from "./projectCard";

// Dette skal hentes fra Sanity etterhvert
export const projectData = [
  {
    slug: "lffh",
    title: "LFFH-nettsiden",
    desc: "Funksjonell nettside for Linjeforeningen for Fiskehelse og Havbruk, med mulighet for blant annet innlogging, arrangementopprettelse og påmelding til arrangementer",
    small_img: "/ProjectImages/lffh_logo_small.png",
    large_img: "/ProjectImages/lffh_rectangle.png",
    link: "https://www.lffh.no/",
  },
  {
    slug: "integrerbar",
    title: "Integrerbar-nettsiden (under utvikling)",
    desc: "En nettside utviklet for Integrerbar, studentbaren tilknyttet Fakultet for naturvitenskap og teknologi ved Universitetet, med base i Realfagbygget.",
    small_img: "/ProjectImages/integrerbar_logo_small.png",
    large_img: "/ProjectImages/integrerbar_rectangle.jpeg",
    link: "https://integrerbar-web.fly.dev",
  },
  {
    slug: "nti",
    title: "NTidrett-nettsiden (under utvikling)",
    desc: "En nettside utviklet for NT Idrett, idrettsorganisasjonen tilknyttet Fakultet for naturvitenskap og teknologi ved universitetet.",
    small_img: "/ProjectImages/nti_logo_small.png",
    large_img: "/ProjectImages/nti_logo_white.jpeg",
    link: "https://ntidrett.no/",
  },
];

export default function ProjectsSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Prosjekter</h2>

      {/* Prosjekter */}
      <div className="flex flex-wrap gap-8 items-stretch justify-center">
        {projectData.map((project) => (
          <div key={project.slug} className="w-full sm:w-[48%] lg:w-[31%] flex">
            <ProjectCard
              imgUrl={project.small_img}
              title={project.title}
              description={project.desc}
              previewUrl={project.link}
              prosjektSide={`prosjekter/${project.slug}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
