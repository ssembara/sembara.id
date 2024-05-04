import theme from "../lib/theme";
import { NextApiRequest } from "next";
import { ReactNode } from "react";
import {
  ChakraProvider,
  cookieStorageManager,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";

interface ChakraProps {
  cookies: string;
  childern?: ReactNode;
}

export const Chakra: React.FC<ChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export async function getServerSideProps(req: NextApiRequest) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}
