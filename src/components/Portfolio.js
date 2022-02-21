
import {  Box, Text } from '@chakra-ui/layout'
import {  Container } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query'

import Card from './Card'


function Portfolio() {
    const [ isNotSmallerScreen ] = useMediaQuery('(min-width:600px)')
    return (
            <Container direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>

            <Box mt={isNotSmallerScreen ? "0" : 0} align='center'>  
                    <Text 
                    fontSize="7xl"
                    fontWeight="bold" 
                    bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" 
                    bgClip='text'>Projetos</Text>
                    
                </Box>
               
               <Card />
            </Container>
    
    )
}

export default Portfolio