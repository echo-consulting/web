import Nav from "~/components/nav";
import type { Route } from "./+types/home";
import { Hero } from "~/components/hero";
import { Container } from "@mantine/core";

export function meta({}: Route.MetaArgs) {
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
    <Container>
      <Hero />
    </Container>
  );
}
