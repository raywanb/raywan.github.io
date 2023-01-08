import { HStack, ScaleFade, Tooltip, Flex,Spacer,Icon, Img, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Mark, useStatStyles, background, Stack, Button, Divider, ButtonGroup, IconButton, VStack, useMediaQuery, SimpleGrid} from '@chakra-ui/react';
import { useMemo, useState } from "react";
import {Profile} from './components/profile'
import { useColorModeValue} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {FaLanguage, FaReact,FaSpotify, FaPython, FaDatabase } from "react-icons/fa"
import { SP } from 'next/dist/shared/lib/utils';
import {motion} from 'framer-motion';


export const ProjectSection = () => {
    // Here's the signature
    const value = useColorModeValue("white", "grey.200")
    return (
        <Box w="100vw" h="100vh">
            <VStack spacing="10vh">
                <Text fontSize="5xl" as="h2" fontWeight="semibold" bgGradient={"linear(to-r, blue.500, red.200)"} bgClip="text">
                    Past Projects
                </Text>
            <SimpleGrid autoColumns columns={{sm: 1, md: 3} } alignItems="stretch" spacingX={"5vw"} spacingY={"3vh"}>
                    <motion.div alignItems="stretch"
                                whileHover={{
                                scale:1.05,
                                transition:{
                                    duration:.2
                                }
                                }}>
                        <Card maxW='sm' bg={value} borderRadius={"3xl"} variant="outline">
                            <CardBody>
                            <Img src={"https://media.cleanshot.cloud/media/47876/zI21HMVUjgoZT6xsInkEg8iWb9hrGQN6iYcjh4qO.jpeg?Expires=1673187806&Signature=gHOVvZSa8ZOBsFHg6nWwREYyzl5axLlRKgea281BsV~wF6wTbwyh0KHVfVAcW6BULXbSHwCna~BHTBZbRzlC-1ljziaZMmyHc-ds549AOUzI~i1RyObqewJ7A7tjteS3g2BCy2UzIkxkLYeQOqwQKffNLFM0meoc7ClK-AIjEmfdYWOGakZyeyyv4p6csk5Wody33-142zPCz5qs-lvL-ifWaXUH3y9~0cfXkxwgIRmgCbwADgGxCSS7pEIgpdqS92RYC~m9abXneLoPmsbfjLCJgM9qDd~~aLOFUnpGZog4yEdzLtTGwYjo~KkZuYdq2Nm~6U2M-Xy2IzTwLo2QtQ__&Key-Pair-Id=K269JMAT9ZF4GZ"} borderRadius='lg'/>
                            <Stack mt='6' spacing='3'>
                                <Heading color="blue.300"size='lg'>Notiom</Heading>
                                <Heading size="xs">
                                A Document Editor
                                </Heading>
                                <Text>
                                    Notiom is a document editor that mimics Notion. It has a super clean user interface allowing users to concentrate on what is most important. Writing!
                                </Text>
                                <Spacer></Spacer>
                                <Text size="sm" fontWeight={"bold"}>
                                Technologies Used
                                </Text>
                                <HStack spacing={"15px"}>
                                <Tooltip label="React">
                                    <span>
                                    <FaReact size="30px"/>
                                    </span>
                                </Tooltip>
                                <Tooltip label="MongoDB">
                                    <span>
                                    <FaDatabase size="30px"/>
                                    </span>
                                </Tooltip>
                                </HStack>
                            </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' color='white' bg="blue.300" onClick={() => window.open("https://github.com/raywanb/Notiom")} >
                                    Learn More
                                </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    </motion.div>
                    <motion.div height="100px" alignContent="stretch"
                        whileHover={{
                        scale:1.05,
                        transition:{
                            duration:.2
                        }
                        
                    }} layout>
                        <Card maxW='sm' bg={value} borderRadius={"3xl"} variant="outline"> 
                            <CardBody>
                            <Img src={"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/260/958/datas/gallery.jpg"}borderRadius='lg'/>
                            <Stack mt='6' spacing='3'>
                                <Heading color="red.300"size='lg'>Moodify</Heading>
                                <Heading size="xs">
                                A NLP Spotify Playlist Generator
                                </Heading>
                                <Text>
                                    Moodify generates a personalized Spotify playlist based on answers to short prompts. Using Natural Language Processing, it characterizes the input into different emotional categories and generate a playlist using Spotify API.
                                </Text>
                                <Text size="sm" fontWeight={"bold"}>
                                Technologies Used
                                </Text>
                                <HStack spacing={"15px"}>
                                <Tooltip label="React">
                                    <span>
                                    <FaReact size="30px"/>
                                    </span>
                                </Tooltip>
                                <Tooltip label="Spotify">
                                    <span>
                                    <FaSpotify size="30px"/>
                                    </span>
                                </Tooltip>
                                <Tooltip label="Natural Language Processing">
                                    <span>
                                    <FaLanguage size="30px"/>
                                    </span>
                                </Tooltip>
                                </HStack>
                            </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' color='white' bg="red.300" onClick={() => window.open("https://github.com/raywanb/Moodify")} >
                                    Learn More
                                </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        </motion.div>
                        <motion.div alignContent="stretch"
                        whileHover={{
                        scale:1.05,
                        transition:{
                            duration:.2
                        }
                        }}>
                        <Card maxW='sm' bg={value} borderRadius={"3xl"} variant="outline">
                            <CardBody>
                            <Img src={"https://media.cleanshot.cloud/media/47876/KY9wM0ymFdh6Gsf98MruCSlwdlJQF31mGkobNpsY.jpeg?Expires=1673188112&Signature=jprJiom6EFkqYrUTePRiFF3goxHMo67d7bTXW8g3ISUbhulC9CVEmrm64Jz6WDi3z~DoDUF0HTgTeL-9CfPZF1eOVqryTfSCB8JWWSdSjGUYprCv9nDnUmnB0dQqTbLEkSnzjyoAKM6aSW8qyFDrLu4R2Fnn97X9LCYz8gDl0GAiAMx1nrAKmnuc1-WKZmSe3BrDTWjuLMSx48zUlZTptqqo9BmJzIwfJMYmg2aVbJpZhAwYrXvWDUG~sTQpjCReOSBUv3N6rUOEVl8gjW9X-egwQnPauQ~0b-6A-ZuCtiN7lXVZefaib~7F-nwdRXRsY6zQZ9~AaDeloMQqCB12Dg__&Key-Pair-Id=K269JMAT9ZF4GZ"} borderRadius='lg'/>
                            <Stack mt='6' spacing='3'>
                                <Text color="purple.400" fontSize='1.55rem' as="h1">Pairs Trading Algorithm</Text>
                                <Heading size="xs">
                                Trading Stocks using Statistical Arbitrage
                                </Heading>
                                <Text>
                                    This project uses pair trading to trade stocks. Pair trading is a statistical arbitrage strategy that relies on the short-term fluctuations between two cointegrated stocks over the long-term equilibrium. 
                                </Text>
                                <Text size="sm" fontWeight={"bold"}>
                                Technologies Used
                                </Text>
                                <HStack spacing={"15px"}>
                                <Tooltip label="Python">
                                    <span>
                                    <FaPython size="30px"/>
                                    </span>
                                </Tooltip>
                                </HStack>
                            </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                            <ButtonGroup spacing='2'>
                                <Button variant='solid' color='white' bg="purple.400" onClick={() => window.open("https://github.com/raywanb/pairstrading")} >
                                    Learn More
                                </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                        </motion.div>
                    </SimpleGrid>
                </VStack>
            
        </Box>
    )
}