import '../styles/globals.css'
import '../styles/style.css';
import * as React from "react"
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react"
import theme from '../styles/theme';
import "@fontsource/lato";
export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      <Component {...pageProps} />
    </ChakraProvider>
  )
     
}
