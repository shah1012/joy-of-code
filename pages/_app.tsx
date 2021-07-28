import type { AppProps } from 'next/app'
// import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import { Accessibility } from '@/root/components/accessibility'
// import { chakraTheme } from '@/root/styles/chakraTheme'
// import { GlobalStyle } from '@/root/components/styles/GlobalStyle'
import { Navigation } from '@/root/components/shared/Layout/Navigation'
import { PreferencesProvider } from '@/root/context/PreferencesProvider'
import { useAnalytics } from '@/root/hooks/useAnalytics'

// hide Chakra UI outline borders around clickable components
import 'focus-visible/dist/focus-visible'

import '@/root/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    // <ChakraProvider theme={chakraTheme}>
    <PreferencesProvider>
      {/* <GlobalStyle> */}
      <Head>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Accessibility />
      <Navigation />
      <Component {...pageProps} />
      {/* </GlobalStyle> */}
    </PreferencesProvider>
    // </ChakraProvider>
  )
}
