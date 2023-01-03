import { Flex, Box, Text, Heading, HStack, Divider,Center, VStack, Spacer} from "@chakra-ui/react"

export const Profile = () =>{
    

    return (
        <Flex pt="40vh" pb="60vh">
            <Spacer/>
            <Spacer/>
            <VStack align={"center"} pr="10vw" pl="10vw">
                <Spacer></Spacer>
                <Heading fontWeight="extrabold" color="cyan.500" size="2xl">
                    About Me
                </Heading>
                <Spacer></Spacer>
            </VStack>
            <Spacer/>
            <Spacer></Spacer>
            <Divider orientation='vertical' height="600px"/>
            <Spacer></Spacer>
            <VStack pr="10vw" pl="10vw">
                <Spacer/>
                <Text fontWeight="normal" fontSize="1.45rem" ml="10vw" noOfLines={7} maxWidth="30vw"> 
                    Hey, my name is Ray Wan. I'm currently a sophomore studying Electrical Engineering and Computer Science @ UC Berkeley. I'm a backend web developer. I'm passionate about music, finance, and new trends in the tech space. I'm also curious to learn more when it comes to creative coding and cooking. Feel free to reach out to me via LinkedIn.
                </Text>
                <Spacer/>
            </VStack>
            <Spacer/>
        </Flex>
    )

}