import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Link
} from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Hi, {' '}
            <Text as={'span'} fontWeight={800}>
              Sembara
            </Text>
            {' '}Here !
          </Heading>
          <Text fontSize={30}>
            I’m a software developer based in Surabaya, Indonesia.
            With a greatest passion on web technologies
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Text fontSize={21}> Get in touch via email at {' '}
              <Link href="mailto:sembara9090@gmail.com" color='blue.500' isExternal>
                sembara9090@gmail.com
              </Link>
            </Text>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}
