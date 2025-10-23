import ProjectCard from './projectCard';

// Dette skal hentes fra Sanity etterhvert
export const projectData = [
  {
    slug: 'lffh',
    title: 'LFFH-nettsiden',
    desc: 'Funksjonell nettside for Linjeforeningen for Fiskehelse og Havbruk, men mulighet for blant annet innlogging, arrangementopprettelse og påmelding til arrangementer',
    small_img: '/ProjectImages/lffh_rectangle.png',
    large_img: '/ProjectImages/lffh_rectangle.png',
    link: 'https://www.lffh.no/',
  },
  {
    slug: 'integrerbar',
    title: 'Integrerbar-nettsiden (under utvikling)',
    desc: 'Nettside for baren Integrerbar for studenter på fakultet for Naturvitenskap og Teknologi som holder til på Realfagsbygget.',
    small_img: '/ProjectImages/integrerbar_rectangle.jpeg',
    large_img: '/ProjectImages/integrerbar_rectangle.jpeg',
    link: '',
  },
];

export default function ProjectsSection() {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Prosjekter</h2>

      {/* Prosjekter */}
      <div className="flex flex-wrap gap-8 justify-center">
        {projectData.map((project) => (
          <div key={project.slug} className="w-full sm:w-110">
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
