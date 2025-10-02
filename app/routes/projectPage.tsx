import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, Link } from "react-router";
import ProjectDetail from "../components/projectdetail";
import { projectData } from "../components/projectsSection"; // TODO: Replace with real data
import { Container } from "@mantine/core";

export default function ProjectPage() {
  const { slug } = useParams();
  const projectIndex = projectData.findIndex((p) => p.slug === slug);
  const project = projectData[projectIndex];

  if (!project) {
    return <div className="p-8 text-red-500">Project not found</div>;
  }

  const prevProject = projectData[projectIndex - 1];
  const nextProject = projectData[projectIndex + 1];

  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48 text-white">
        <ProjectDetail {...project} />

        <div className="flex justify-between mt-8">
          {prevProject ? (
            <Link
              className="flex items-center px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              to={`../prosjekter/${prevProject.slug}`}
            >
              <span className="inline-flex">
                <ArrowLeft size={16} />
              </span>
              Forrige
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              className="flex items-center px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
              to={`../prosjekter/${nextProject.slug}`}
            >
              Neste
              <span className="inline-flex">
                <ArrowRight size={16} />
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </div>
  );
}
