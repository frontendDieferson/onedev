import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import minhasnotas from '../../assets/minhasnotas.png'
  export default function Minhasnotas() {
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={minhasnotas}
              
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
           Minhas Notas
          </Heading>
          
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
           Aplicação Simples de cálculo de notas utilizando MicroFramework Flask python e Bootstrap{' '}
            
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Flask
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Bootstrap
            </Badge>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #Aplicação Web
            </Badge>
          </Stack>
  
          <Stack mt={8} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              onClick={() => window.open('https://github.com/frontendDieferson/minhas-notas')}
              _focus={{
                bg: 'gray.200',
              }}>
              Github
            </Button>
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
              onClick={() => window.open("https://appminhasnotas.herokuapp.com//")}>
              Acessar
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  }