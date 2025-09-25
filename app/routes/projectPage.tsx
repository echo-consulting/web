import { useParams } from "react-router";
import ProjectDetail from "../components/projectdetail";
import { projectData } from "../components/projects"; // TODO: Replace with real data

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-8 text-red-500">Project not found</div>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 pt-48 text-white">
        <ProjectDetail {...project} />
      </div>
    </div>
  );
}
