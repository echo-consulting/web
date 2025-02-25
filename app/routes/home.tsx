import type { Route } from "./+types/home";

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
    <main>
      <h1>Hei</h1>
    </main>
  );
}
