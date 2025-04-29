import {
  BackgroundImage,
  Container,
  Title,
  Text,
  Stack,
  Box,
} from "@mantine/core";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Tjenester - echo Consulting" },
    {
      name: "description",
      content: "Våre tjenester og løsninger for din bedrift.",
    },
  ];
}

export default function Tjenester() {
  return (
    <div className="relative min-h-screen">
      <Container className="relative z-10 pt-48">
        <Stack gap="xl">
          <Title order={1} className="text-4xl font-bold text-white">
            Hvilke tjenester tilbyr vi?
          </Title>
          <Box className="max-w-lg text-white">
            <ul className="text-lg space-y-3 list-disc pl-5">
              <li>Web-utvikling</li>
              <li>Backend-utvikling</li>
              <li>Frontend-utvikling</li>
            </ul>
          </Box>
          <Box className="w-full text-white whitespace-pre-wrap">
            <Text size="lg" className="mb-4">
              Vi bygger løsninger som ikke bare ser bra ut, men som også er
              enkle å vedlikeholde. Med Sanity som innholdshåndteringssystem kan
              du selv legge til og redigere innhold — helt uten å skrive en
              eneste kodelinje.
            </Text>
            <Text size="lg" className="mb-4">
              Enten du vil publisere arrangementer, nyheter, produkter eller
              blogginnlegg, gjør du det enkelt og effektivt, rett fra
              nettleseren.
            </Text>
          </Box>
          <Box className="max-w-lg text-white">
            <Text size="lg" className="whitespace-nowrap">
              Sjekk ut våre fullførte{" "}
              <Link to="/prosjekter" className="underline">
                prosjekter
              </Link>{" "}
              her!
            </Text>
          </Box>
          {/* Service sections will be added here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service cards will be added here */}
          </div>
        </Stack>
      </Container>
    </div>
  );
}
