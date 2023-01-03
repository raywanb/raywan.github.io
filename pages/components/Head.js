import {React, useEffect, useRef} from 'react'
import {Stack, Circle, Flex, Box, Text, LinkOverlay} from "@chakra-ui/react"
import {useColorMode} from "@chakra-ui/color-mode"
import TypeIt from "typeit-react";
import {motion} from 'framer-motion';

export const Head = () => {
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";
    const isNotSmallerScreen = true;

  return (
    <Stack>
        <Flex direction={isNotSmallerScreen ? "row": "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start">
            <Box mt={isNotSmallerScreen?"0":16} ml="10vw" align="flex-start">
              <motion.div initial="hidden" animate="visible" variants={{
                hidden: {
                  scale:0.9
                  ,opacity:0
                },
                visible:{
                  scale:1,
                  opacity:1,
                  transition:{
                    delay:.3
                  }
                }
              }}>
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="7xl" fontWeight="semibold" bgGradient={"linear(to-r, cyan.400, blue.500, purple.400)"} bgClip="text">Ray Wan</Text>
                <Text fontSize="xl" fontWeight="regular" color="gray.400">EECS student @ Berkeley</Text>
              </motion.div>
            </Box>
        </Flex>
    </Stack>
  )
}


