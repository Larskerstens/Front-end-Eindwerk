import React from "react";
import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Text,
  Collapse,
  VStack,
} from "@chakra-ui/react";

function agendapunt() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex justifyContent='center'>
        <Box mr='10px' mt='10px'>
          <Text>Zo</Text>
          <Text fontWeight='bold'>27</Text>
        </Box>
        <Button
          onClick={onToggle}
          _focus={{ outline: 0 }}
          className='agendapunt'
        >
          <VStack>
            <Text fontSize='18px' maxW='75vw' isTruncated>
              Wedstrijd | Voorwaarts KKc - Borgerhout/Groen-Wit
            </Text>
            <Text fontSize='14px'>Zo 27 Juni | 15u00 - 17u00</Text>
          </VStack>
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box ml='15px' w='100%'>
          <Box className='agendapuntinfo' rounded='md' shadow='md'>
            <Text>info about agendapunt</Text>
          </Box>
        </Box>
      </Collapse>
    </>
  );
}

export default agendapunt;
