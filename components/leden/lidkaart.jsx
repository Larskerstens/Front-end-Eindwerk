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

function lidkaart({ lid }) {
  const adres = () => {
    if (lid.straat != undefined) {
      return lid.straat + " " + lid.huisnr;
    } else {
      return "Adres onbekend";
    }
  };
  const postcode = () => {
    if (lid.postcodeId != undefined) {
      return lid.postcodeId.code + " " + lid.postcodeId.gemeente;
    } else {
      return "Postcode onbekend";
    }
  };
  const dag = lid.geboortedatum.slice(8, 10);
  const maand = lid.geboortedatum.slice(5, 7);
  const jaar = lid.geboortedatum.slice(0, 4);

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
                  {lid.voornaam} {lid.achternaam}
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
              alt='Foto van de speler'
              fallbackSrc='./images/leden/person.png'
              mr={["1em", "4em"]}
            />
            <VStack alignItems='start'>
              <Text>
                <strong>Leeftijd:</strong> {lid.leeftijd}
              </Text>
              <Text>
                <strong>Geboortedatum:</strong> {dag}/{maand}/{jaar}
              </Text>
              <Text>
                <strong>Adres:</strong> {adres()}
              </Text>
              <Text>
                <strong>Postcode:</strong> {postcode()}
              </Text>
            </VStack>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default lidkaart;
