import { Button } from '@chakra-ui/button'
import {  Box, Text, Badge, Flex } from '@chakra-ui/layout'
import { Image, Container } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/media-query'

import alugueseucarro from '../assets/alugueseucarro.png'
import gorjeta from '../assets/calculeagorjeta.png'
import minhasnotas from '../assets/minhasnotas.png'

function Portfolio() {
    const [ isNotSmallerScreen ] = useMediaQuery('(min-width:600px)')
    return (
        <Container direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
               
               <Box alignSelf="center" px="32" py="16">
              <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} ml={5}>
               <Box 
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'   
                m={5}
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
                       px={2}>Firebase
                       </Badge>
                       <Text color='darkgrey'>
                           Pensando em mobilidade. Aplicativo criado para Aluguel de carros</Text>
                   <Button justify='center' mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://github.com/frontendDieferson/")}>
                       Acessar Projeto
                   </Button>
                   </Box>

               </Box>

               <Box
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'   
                m={5}     
               >
                   <Image src={gorjeta} />
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
                       
                       <Text color='darkgrey'>
                           Aplicativo Simples para Calcular Gorjetas feito em aula da B7W web</Text>
                   <Button justify='center' mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://github.com/frontendDieferson/")}>
                       Acessar Projeto
                   </Button></Box>

               </Box>
  
                <Box
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'   
                m={5}      
               >
                <Image src={minhasnotas} />
                <Box p={5}>
                       <Badge variant='solid' 
                       variantColor='teal' 
                       rounded='full' 
                       px={2}>FLASK
                       </Badge>
                       <Badge variant='solid' 
                       variantColor='teal' 
                       rounded='full'
                       m={2} 
                       px={2}>
                          BOOTSTRAP
                       </Badge>
                       
                       <Text color='darkgrey'>
                          Aplicação criada para automatizar cálculo de notas.</Text>
                   <Button justify='center' mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://appminhasnotas.herokuapp.com//")}>
                       Acessar Aplicação
                   </Button></Box>
               </Box>
               
               
               </Flex>
               </Box>
             
               
               <Box alignSelf="center" px="32" py="16" >
               <Flex direction={isNotSmallerScreen ? "row" : "column"} ml={5}>
               <Box 
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'   
                m={5}
               >
                   
               </Box>
               <Box 
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'    
                m={5}
               >
                   
               </Box>
               <Box 
                w='400px'
                h='400px'
                rounded='20px'
                overflow='hidden'
                boxShadow='sm'
                bg='blue.800'   
                m={5}
               >
                   
               </Box>
               </Flex>
               </Box>
             
               
            </Container>


    )
}

export default Portfolio