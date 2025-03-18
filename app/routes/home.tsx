import Nav from "~/components/nav";
import type { Route } from "./+types/home";
import { Hero } from "~/components/hero";
import { BackgroundImage, Container } from "@mantine/core";

export function meta({}: Route.MetaArgs) {
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
      {/* BackgroundImage as a separate, absolute element */}
      <BackgroundImage
        src="/heightmap_contours.png"
        radius="sm"
        className="absolute inset-0 h-full w-full opacity-50" // Opacity here
      />
      {/* Content layered above */}
      <Container className="relative z-10 pt-48">
        <Hero />
      </Container>
    </div>
  );
}
