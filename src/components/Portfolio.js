import { Button, IconButton } from '@chakra-ui/button'
import { Flex, VStack, Box, Text, Center, Square, Spacer, Badge } from '@chakra-ui/layout'
import { Image, Img, Grid, GridItem, Container } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query'

import alugueseucarro from '../assets/alugueseucarro.png'
import Img2 from '../assets/minhastasks2.png'

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
                    bgClip='text'>Alguns Projetos</Text>
                </Box>
               
               <Box 
                w='400px'
                h='500px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'           
               >
                   <Image src={alugueseucarro} />
                   <Box p={5}>
                       <Badge variant='solid' 
                       variantColor='teal' 
                       rounded='full' 
                       px={2}>REACT NATIVE
                       </Badge>
                       <Badge variant='solid' 
                       variantColor='teal' 
                       rounded='full'
                       m={2} 
                       px={2}>
                          EXPO
                       </Badge>
                       <Badge variant='solid' 
                       variantColor='teal' 
                       rounded='full' 
                       px={2}>Firebase
                       </Badge>
                       <Text color='darkgrey'>
                           Pensando em mobilidade. Aplicativo criado para Aluguel de carros</Text>
                   <Button justify='center' mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://github.com/frontendDieferson/carrentalapp")}>
                       Acessar Projeto
                   </Button>
                   </Box>

               </Box>
            </Container>
    
    )
}

export default Portfolio