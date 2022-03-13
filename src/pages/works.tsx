import Body from "../components/layouts/Body";
import UnderConstruction from "../components/UnderConstruction";
import { Container } from "@chakra-ui/react";

const Work = () => {
  return (
    <Body title="Work">
      <Container maxW={"xl"}>
        <UnderConstruction />
      </Container>
    </Body>
  );
};

export default Work;
