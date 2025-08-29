import { Container, Title, Text, Box } from "@mantine/core";

export function About() {
  return (
    <Container className="text-white text-left">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7">
          <Title
            order={1}
            className="text-4xl md:text-5xl font-bold pb-4 whitespace-pre-line leading-tight"
          >
            Om oss
          </Title>
          
          <Box className="max-w-lg pb-4 block">
            <Text size="lg">
              Vi er et team av erfarne konsulenter som er dedikerte til å hjelpe bedrifter 
              vokse og utvikle seg. Med vår ekspertise innen strategi, teknologi og 
              forretningsutvikling, tilbyr vi skreddersydde løsninger som passer dine 
              unike behov og mål.
            </Text>
          </Box>
          
          <Box className="max-w-lg pb-4 block">
            <Text size="lg">
              Vårt fokus er på å levere høy kvalitet til rimelige priser, slik at 
              både små og store bedrifter kan få tilgang til profesjonell 
              konsulentstøtte uten å sprenge budsjettet. Vi tror på å bygge 
              langvarige partnerskap basert på tillit, åpenhet og resultater.
            </Text>
          </Box>
        </div>
        
        <div className="md:col-span-5">
          <Box className="flex justify-center md:justify-end pt-4">
            <img 
              src="/consulting.webp" 
              alt="Consulting Services" 
              className="w-96 h-72 object-cover rounded-lg shadow-lg"
            />
          </Box>
        </div>
      </div>
    </Container>
  );
}
