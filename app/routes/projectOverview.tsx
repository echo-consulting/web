import { useParams } from "react-router";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  return <h1>Project not found</h1>;
  /* 
  return (
    <div>
        <h1>{project.t}
  
    )
  */
}
