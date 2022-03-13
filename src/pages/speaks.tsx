import Body from "../components/layouts/Body";
import UnderConstruction from "../components/UnderConstruction";
import { Container } from "@chakra-ui/react";

const Speak = () => {
  return (
    <Body title="Speak">
      <Container maxW={"xl"}>
        <UnderConstruction />
      </Container>
    </Body>
  );
};

export default Speak;
