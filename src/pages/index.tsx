import Body from "../components/layouts/Body";
import NextLink from "next/link";
import Paragraph from "../components/Paragraph";
import React from "react";
import Section from "../components/Section";
import { BioSection, BioYear } from "../components/layouts/Bio";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Home: React.FC = () => {
  return (
    <Body title={""}>
      <Container maxW="xl">
        <Box
          borderRadius="lg"
          mt={36}
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        >
          Hello, I&apos;m a programmer based in Surabaya, Indonesia!
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sebastianus Sembara
            </Heading>
            <p>Programmer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              maxWidth="100px"
              borderRadius="full"
              src="./images/profile.jpg"
              alt="profile-image"
            ></Image>
          </Box>
        </Box>
        <Section>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello There! I am a software engineer based in Surabaya, Indonesia.
            With a greatest passion on web technologies like Laravel, Node, and
            React frameworks.
          </Paragraph>
          <Box textAlign="center" my={4}>
            <NextLink href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Magelang, Indonesia.
          </BioSection>
          <BioSection>
            <BioYear>2017 to Present</BioYear>
            Studied on bachelor’s degree in Technology Information on
            Information System at{" "}
            <Link href={"https://www.dinamika.ac.id/"} target={"_blank"}>
              Universitas Dinamika
            </Link>
          </BioSection>
        </Section>
      </Container>
    </Body>
  );
};

export default Home;
