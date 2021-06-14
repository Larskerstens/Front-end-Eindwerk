import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

function club() {
  return (
    <>
      <Flex className='clubcard'>
        <Image
          w='auto'
          maxH='200px'
          src='./images/vwlogo.png'
          alt='Foto van de speler'
          fallbackSrc='https://via.placeholder.com/200?text=VW'
        />
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          Voorwaarts KKc
        </Text>
        <Text fontSize='18px' fontWeight='bold' mt='10px'>
          Straat en huisnummer
        </Text>
        <Text fontSize='18px' fontWeight='bold'>
          Postcode
        </Text>
      </Flex>
    </>
  );
}

export default club;
