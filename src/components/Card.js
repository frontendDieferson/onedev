import {  Box, Flex } from '@chakra-ui/layout'
import { Container, Button } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query'



import  Alugueseucarro  from '../components/Alugueseucarro'
import Deliveryplus from './Deliveryplus'
import Minhasnotas from './Minhasnotas'
import Bitcoinapp from './Bitcoinapp'
import Gorjeta from './Gorjeta'
import Trackercovid19 from './Trackercovid19'

function Portfolio() {
    const [ isNotSmallerScreen ] = useMediaQuery('(min-width:600px)')
    return (
        <Container direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
               
               <Box alignSelf="center" px="32" py="16">
              <Flex direction={isNotSmallerScreen ? "row" : "column"} >
               
               <Box m={2}>
                 <Alugueseucarro />
                </Box>

                <Box m={2}>
                 <Gorjeta />
                </Box>   
               <Box m={2}>
                   <Minhasnotas />
               </Box>
               
               </Flex>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} >
                <Box m={2}>
                  <Bitcoinapp />
                </Box>
                <Box m={2}>
                  <Deliveryplus />
                </Box>
                <Box m={2}>
                    <Trackercovid19 />
                </Box>
            </Flex>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} >
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              onClick={() => window.open("/")}>
              Ver Mais
            </Button>
            </Flex>
                    
               </Box>
             
               
            </Container>


    )
}

export default Portfolio