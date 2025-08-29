import { Container, Title, Text, Box } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export function Hero() {
  const [fin, setFin] = useState(false);

  return (
    <Container className="text-white text-left">
      <Title
        order={1}
        className="text-4xl md:text-5xl min-h-[5rem] md:min-h-[7rem] max-w-[25rem] font-bold pb-4 whitespace-pre-line leading-tight"
      >
        {fin ? (
          "Konsulenter som ikke koster skjorta."
        ) : (
          <Typewriter
            words={[
              "echo\nConsulting",
              "Konsulenter-tjenester som ikke koster skjorta.",
              "echo\nConsulting",
            ]}
            loop={1}
            cursor
            cursorStyle="|"
            onLoopDone={() => setFin(true)}
          />
        )}
      </Title>

      <Box className="max-w-lg pb-4 block">
        <Text size="lg">
          Vi tilbyr profesjonelle konsulenttjenester til rimelige priser,
          skreddersydd for dine behov. La oss hjelpe deg med å nå dine mål uten
          å sprenge budsjettet!
        </Text>
      </Box>

      <a
        className="px-8 font-semibold hover:underline rounded-md bg-white py-3 text-black hover:bg-gray-100 transition-colors duration-200 ease-in-out inline-block"
        style={{ marginTop: '1rem' }}
        href="mailto:consulting@echo.uib.no"
      >
        Kontakt oss
      </a>
    </Container>
  );
}
