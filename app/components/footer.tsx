import { Container, Title, Text, Box } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

export function Footer() {
  const [fin, setFin] = useState(false);

  return (
    <Container className="text-white text-left">
      <Text>

        Dette er footer
      </Text>
    </Container>
  );
}
