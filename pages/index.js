import Head from 'next/head'
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link
} from '@chakra-ui/react'

import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()
  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400'
  }
  return (
    <Container>
      <Head>
        <title>Home - Benjamin Carlson</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, Sembara here !</Heading>
          <Text color={colorSecondary[colorMode]}>Hello There! I am a software engineer based in Surabaya, Indonesia. With a greatest passion on web technologies like Laravel, Node, and React frameworks.</Text>
          <Text mt={2} color={colorSecondary[colorMode]}> Get in touch via email at {' '}
            <Link href="mailto:sembara9090@gmail.com" color='blue.500' isExternal>
              sembara9090@gmail.com
            </Link>
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}