import React from "react";
import {
  Flex,
  useDisclosure,
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Image,
} from "@chakra-ui/react";

function lidkaart({ name, aname, team }) {
  return (
    <>
      <AccordionItem className='liditem'>
        <h2>
          <AccordionButton
            className='liditembutton'
            _expanded={{
              background: "#025902",
            }}
            _focus={{ outline: 0 }}
          >
            <Box flex={1} textAlign='left'>
              <Flex alignItems='center'>
                <Text mr='25px' fontSize={["16px", "16px", "17px", "18px"]}>
                  {name} {aname}
                </Text>
                <Text fontSize={["10px", "12px", "14px", "14px"]}>{team}</Text>
              </Flex>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} fontSize='14px' color='#f5f5F5'>
          <Flex alignItems='center'>
            <Image
              borderRadius='3xl'
              boxSize='75px'
              src='https://bit.ly/sage-adebayo'
              alt='Foto van de speler'
              fallbackSrc='https://via.placeholder.com/75?text=LK'
              mr={["1em", "4em"]}
            />
            <VStack alignItems='start'>
              <Text>
                <strong>Leeftijd:</strong> 99
              </Text>
              <Text>
                <strong>Geboortedatum:</strong> 01/01/2000
              </Text>
              <Text>
                <strong>Adres:</strong> Eysegemblok 99
              </Text>
              <Text>
                <strong>Postcode:</strong> 2000 Antwerpen
              </Text>
              <Text>
                <strong>Groep:</strong> Toogdienst, Kuisploeg 01
              </Text>
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default lidkaart;
