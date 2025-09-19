import { Hero } from "~/components/hero";
import Projects from "~/components/projects";
import { Container } from "@mantine/core";

export function meta() {
  return [
    { title: "echo Consulting" },
    {
      name: "description",
      content: "Konsulenttjenester som ikke koster skjorta.",
    },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48">
        <Hero />
        <Projects />
      </Container>
    </div>
  );
}
