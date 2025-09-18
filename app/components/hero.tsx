import { Container, Title, Text, Box } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export function Hero() {
  const [fin, setFin] = useState(false);

  return (
    <Container className="text-white text-left pb-64">
      <Title
        order={1}
        className="text-5xl h-28 max-w-[25rem] font-bold pb-8 whitespace-pre-line"
      >
        {fin ? (
          "Konsulenter som ikke koster skjorta."
        ) : (
          <Typewriter
            words={[
              "echo\nConsulting",
              "Konsulenttjenester som ikke koster skjorta.",
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
        className="px-4 font-semibold hover:underline rounded-md bg-gray-900 py-3 text-gray-200 hover:bg-gray-800 transition-colors duration-200 ease-in-out"
        href="mailto:consulting@echo.uib.no"
      >
        Kontakt oss
      </a>
    </Container>
  );
}
