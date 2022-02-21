import {  Box, Flex } from '@chakra-ui/layout'
import { Container } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query'



import  Alugueseucarro  from '../components/Alugueseucarro'
import Minhasnotas from './Minhasnotas'
import Bitcoinapp from './Bitcoinapp'
import Gorjeta from './Gorjeta'

function Portfolio() {
    const [ isNotSmallerScreen ] = useMediaQuery('(min-width:600px)')
    return (
        <Container direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
               
               <Box alignSelf="center" px="32" py="16">
              <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} ml={5}>
               
               <Box p={15}>
                 <Alugueseucarro />
                </Box>

                <Box p={15}>
                 <Gorjeta />
                </Box>   
               <Box p={15}>
                   <Minhasnotas />
               </Box>
               
               </Flex>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={5} ml={5}>
                <Box p={15}>
                  <Bitcoinapp />
                </Box>
            </Flex>
                    
               </Box>
             
               
            </Container>


    )
}

export default Portfolio