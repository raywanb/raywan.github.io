import { HStack, Tooltip, Flex,Icon, Img, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Mark, useStatStyles, background, Stack, Button, Divider, ButtonGroup, IconButton} from '@chakra-ui/react';
import { useMemo, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import {FaLanguage, FaReact,FaSpotify, FaPython, FaDatabase } from "react-icons/fa"

export const Project = (props) =>{
    const description = props.description
    const link = props.link
    const picture = props.picture

    
    return (
    <Card maxW='sm'>
        <CardBody>
          <Img src={picture} borderRadius='lg'/>
          <Stack mt='6' spacing='3'>
            <Heading color="blue.300"size='lg'>Notiom</Heading>
            <Heading size="xs">
              A Document Editor
            </Heading>
            <Text>
                Notiom is a document editor that mimics Notion. It has a super clean user interface allowing users to concentrate on what is most important. Writing!
            </Text>
            <Text size="sm" fontWeight={"bold"}>
              Technologies Used
            </Text>
            <HStack spacing={"15px"}>
              <Tooltip label="React">
                <span>
                <FaReact size="3vw"/>
                </span>
              </Tooltip>
              <Tooltip label="MongoDB">
                <span>
                <FaDatabase size="3vw"/>
                </span>
              </Tooltip>
            </HStack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
              <Button variant='solid' color='white' bg="blue.300" onClick={() => window.open(link)} >
                Learn More
              </Button>
            </ButtonGroup>
        </CardFooter>
      </Card> 
    )
}

/*Moodify*/

{/* <Card maxW='sm'>
        <CardBody>
          <Img src={picture} borderRadius='lg'/>
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
                <FaReact size="3vw"/>
                </span>
              </Tooltip>
              <Tooltip label="Spotify">
                <span>
                <FaSpotify size="3vw"/>
                </span>
              </Tooltip>
              <Tooltip label="Natural Language Processing">
                <span>
                <FaLanguage size="3vw"/>
                </span>
              </Tooltip>
            </HStack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
              <Button variant='solid' color='white' bg="red.300" onClick={() => window.open(link)} >
                Learn More
              </Button>
            </ButtonGroup>
        </CardFooter>
      </Card> */}




/* Pairs Trading



        <Card maxW='sm'>
        <CardBody>
          <Img src borderRadius='lg'/>
          <Stack mt='6' spacing='3'>
            <Heading color="red.300"size='lg'>Pairs Trading Algorithm</Heading>
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
                <FaPython size="3vw"/>
                </span>
              </Tooltip>
            </HStack>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
              <Button variant='solid' color='white' bg="red.300" onClick={() => window.open(link)} >
                Learn More
              </Button>
            </ButtonGroup>
        </CardFooter>
      </Card>

  */