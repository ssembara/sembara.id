import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Body from "../components/layouts/Body";

const About: React.FC = () => {
  return (
    <Body title="About">
      <Container maxW={"xl"}>
        <Box
          borderRadius="lg"
          mt={6}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Page under construction
        </Box>
      </Container>
    </Body>
  );
};

export default About;
