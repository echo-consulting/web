import type { Route } from "./+types/home";
import { Title, Text, Anchor, Container } from "@mantine/core";
import { Link } from "react-router";
import members from "../assets/medlemmer.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Om echo Consulting" },
    {
      name: "description",
      content: "Hvem er echo consulting, og hva tilbyr vi?",
    },
  ];
}

export default function AboutUs() {
  return (
    <Container className="relative z-10 pt-30 text-white text-left">
      <Title
        order={1}
        className="text-5xl max-w-[25rem] font-bold pb-8 whitespace-pre-line"
      >
        Om echo Consulting
      </Title>
      <Text>
        echo Consulting er en undergruppe av linjeforeningen for informatikk ved
        Universitetet i Bergen. Gruppen består av 10 engasjerte
        informatikkstudenter med stor interesse for web-utvikling.
        <br />
        <br />
        Vi tilbyr rådgivning og løsninger innen teknologi og digital utvikling.
        Gjennom echo Consulting bygger vi bro mellom teori og praksis, samtidig
        som vi hjelper bedrifter med å nå sine mål.
      </Text>
      <Anchor component={Link} to="/tjenester" underline="always" c="white">
        {" "}
        Sjekk ut hva vi kan tilby din organisasjon her!
      </Anchor>
      <br />
      <br />
      <Title
        order={2}
        className="text-5xl max-w-[25rem] font-bold pb-2 whitespace-pre-line"
      >
        Medlemmer 2024/2025
      </Title>
      <img src={members} width="800" />
    </Container>
  );
}
