import { extendTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from '@chakra-ui/react'
import "@fontsource/lato";
import "@fontsource/abril-fatface";
import "@fontsource/raleway";

const fonts = {
    ...chakraTheme.fonts,
    subHeading: "Times New Romans",
    body: 'Lato',
    heading:'Raleway',
   
}
// 2. Extend the theme to include custom colors, fonts, etc
const overrides = {
    ...chakraTheme,
    fonts,
    textStyles: {
        h2: {
        'font-family': 'var(--chakra-fonts-subHeading)',
        },
    },
    fontWeights: {
        normal: 400,
        medium: 500,
        bold: 700,
        ultra:900,
      },
      
}

const theme = extendTheme(overrides)

export default theme

