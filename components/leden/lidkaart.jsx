import React from "react";
import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Text,
  Collapse,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function lidkaart({ name, aname, team }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <AccordionItem className='liditem'>
        <h2>
          <AccordionButton
            boxShadow='white'
            background='white'
            _expanded={{
              background: "white",
              color: "green",
              borderBottom: "1px solid green",
            }}
            _focus={{ outline: 0 }}
            _hover={{ background: "white" }}
          >
            <Box flex='1' textAlign='left'>
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
        <AccordionPanel pb={4} fontSize='14px'>
          <Flex alignItems='center'>
            <Image
              borderRadius='3xl'
              boxSize='75px'
              src='https://bit.ly/sage-adebayo'
              alt='Foto van de speler'
              fallbackSrc='https://via.placeholder.com/75?text=LK'
              mr='4em'
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
