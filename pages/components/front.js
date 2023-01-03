import { Flex, Image, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Mark, useStatStyles, background } from '@chakra-ui/react';
import { useMemo, useState } from "react";
import Typed from 'react-typed'
import ScrollButton from 'react-scroll-button'
export const Front = () =>{


    return (
        <Box bg="blue.400"  w='100%' h="100vh"p={4} color='white'>
            <div style={{marginTop:"50vh", textAlign:"center"}}>
                <Typed style={{ color: 'black', fontFamily:"sans-serif", textAlign:"center", fontSize:"40px"}}
                    strings={['Hi there!', "I'm Ray", "I'm an aspiring software engineer studying EECS@Berkeley!", "Nice to meet you!"]}
                    typeSpeed={40}
                />
            </div>
            <Box mb="10vh" w="100%"alignItems={"center"} textAlign={"center"}>
            </Box>
        </Box>
    )
}