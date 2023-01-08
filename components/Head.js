import {React, useEffect, useRef} from 'react'
import {Stack, Circle, Flex, Box, Text, LinkOverlay, Image} from "@chakra-ui/react"
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
                <Image ml="40vw" mb="20vh" position="absolute" alignSelf="center" w="350px" h="350px" objectFit='cover'  borderRadius='full' src="https://media.cleanshot.cloud/media/47876/zgDudsFeWLD9NKjXmLmnqHtPPKz6Q0TI3Razb5UY.jpeg?Expires=1673189737&Signature=WETyiWEeAMLw5HskXv70rdf3vokbsx7hIpxPYnMfr8G7nDu2Wy-5EFlKmdwGuzh2qw8iaSrOJvlm2tTXvNOcrMEWPCnMUpZyJXf2HxJWcnEh4Igfe2lw0Y9Yxfw30SCNczji5VlzoWHF801uNOdJtr~vRN1VqGoF3DiXlSmG4z~mfjvdTYa0rOf6wpsjV7j8l36JVlPsTy6LQbVdze5JQdITI7Wn8tz9qh5PJd-6War1NhS6wVdFEzxbknnWXR0SbWVxurEt0qBV07F~WFAJdd5zxRdWF7FX7r6HIOCdUR~IciqgKEl-7YfONFjX2zbkvvM0jv--aS2F60eD7YFnug__&Key-Pair-Id=K269JMAT9ZF4GZ" ></Image>
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="7xl" fontWeight="semibold" bgGradient={"linear(to-r, cyan.400, blue.500, purple.400)"} bgClip="text">Ray Wan</Text>
                <Text fontSize="xl" fontWeight="regular" color="gray.400">EECS student @ Berkeley</Text>
              </motion.div>
            </Box>
        </Flex>
    </Stack>
  )
}


