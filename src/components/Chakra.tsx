import theme from '../lib/theme';
import { ChakraProvider, cookieStorageManager, localStorageManager } from '@chakra-ui/react';

interface ChakraProps {
    cookies: any
}

const Chakra: React.FC<ChakraProps> = ({ cookies, children }) =>{
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export default Chakra

export async function getServerSideProps(req: any) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}