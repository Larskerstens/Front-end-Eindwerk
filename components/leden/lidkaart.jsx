import React from "react";
import {
  Flex,
  Box,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Image,
} from "@chakra-ui/react";

function lidkaart({ lid /* , vnaam, anaam, leeftijd */ }) {
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
                  {lid.voornaam} {lid.achternaam} {/* {vnaam} {anaam} */}
                </Text>
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
              src={"./images/leden/" + lid.voornaam + lid.achternaam + ".png"}
              //src={"./images/leden/" + vnaam + anaam + ".png"}
              alt='Foto van de speler'
              fallbackSrc='./images/leden/person.png'
              mr={["1em", "4em"]}
            />
            <VStack alignItems='start'>
              <Text>
                <strong>Leeftijd:</strong> {lid.leeftijd}
                {/* {leeftijd} */}
              </Text>
              <Text>
                {/* <strong>Geboortedatum:</strong> {lid.geboortedatum} */}
              </Text>
              <Text>
                {/* <strong>Adres:</strong> {lid.straat} {lid.huisnr} */}
              </Text>
              <Text>
                <strong>Postcode:</strong>{" "}
                {/* {lid.postcodeId.code}{" "}
                {lid.postcodeId.gemeente} */}{" "}
                test
              </Text>
              <Text>
                <strong>Groep:</strong> {/* {lid.persoongroep.naam} */} groep
              </Text>
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default lidkaart;
