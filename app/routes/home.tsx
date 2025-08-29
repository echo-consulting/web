import { Hero } from "~/components/hero";
import { Container } from "@mantine/core";
import { About } from "~/components/about";

export function meta() {
  return [
    { title: "echo Consulting" },
    {
      name: "description",
      content: "Konsulent-tjenester som ikke koster skjorta.",
    },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48">
        <Hero />
      </Container>
      <Container className="relative z-10 pt-32 pb-32">
        <About />
      </Container>
    </div>
  );
}
