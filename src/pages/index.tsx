import Body from '../components/layouts/Body';
import Head from 'next/head';
import Hero from '../components/Hero';
import Image from 'next/image';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
   <Body title={''}>
     <Container>
        <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Japan!
      </Box>
     </Container>
   </Body>
  )
}

export default Home
