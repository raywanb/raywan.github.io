import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    Spacer,
    Text,
    HStack,
    IconButton,
    useBreakpointValue,
    useColorModeValue,
    VStack,
    Heading,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { useColorMode } from '@chakra-ui/react'
  import {FaSun, FaMoon, FaGithub, FaLinkedin, FaDownload} from "react-icons/fa"
 
  
  export const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()
    const isDark = colorMode ==="dark"

    

    return (
        <HStack mt="2vh">
            <Flex w="80%">
                <Heading as="h2" fontFamily={"Raleway"}
                    ml="8vw" size="md" fontWeight="bold" color={isDark?"white":"black"}>Ray Wan</Heading>
                <Heading
                    ml="0.5%" size="md" fontWeight="bold" color={isDark?"blue.400":"purple.900"}>/   SWE </Heading>
            </Flex>
            <Button leftIcon={<FaDownload/>} borderRadius="3xl" fontFamily={"Lato"} onClick={()=> window.open("https://drive.google.com/file/d/1GPurogiD1dwhphR07-dqVAUV0G5q3Hhq/view?usp=sharing")}>Resume</Button>
            <IconButton icon={isDark? <FaSun/>: <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
            <IconButton icon={<FaLinkedin/>} isRound="true"></IconButton>
            <IconButton icon={<FaGithub/>} isRound="true" mr="20vw"></IconButton>
            <Spacer></Spacer>
        </HStack>
    )
  }

