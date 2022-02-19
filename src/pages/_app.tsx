import Chakra from '../components/Chakra';
import Fonts from '../components/Fonts';
import Main from '../components/layouts/Main';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
     <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Main router={router} childern={undefined}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </Chakra>
  )
}

export default MyApp
