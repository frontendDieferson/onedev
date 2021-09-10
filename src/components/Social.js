import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGithub, FaTwitter, FaTwitch, FaInstagram } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="50" 
             cursor= 'pointer'
             onClick={() => window.open('https://www.facebook.com/diefersonssilva')}/>

            <Icon as={FaInstagram} boxSize="50" 
             cursor= 'pointer'
             onClick={() => window.open('https://instagram.com/eudiefersonsoares')}/>

            <Icon as={FaGithub} boxSize="50" 
             cursor= 'pointer'
             onClick={() => window.open('https://github.com/frontendDieferson')}/>

            <Icon as={FaTwitter} boxSize='50' 
             cursor= 'pointer'
             onClick={() => window.open('https://twitter.com/dief_jsx')} />

            <Icon as={FaTwitch} boxSize='50' 
            cursor= 'pointer'
            onClick={() => window.open('https://twitch.tv/diefersonnoobmaster')}
            />
        </HStack>
    )
}

export default Social
