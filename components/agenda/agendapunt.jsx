import {
  Flex,
  useDisclosure,
  Button,
  Box,
  Text,
  Collapse,
  VStack,
} from "@chakra-ui/react";

function agendapunt({
  agenda,
  jaar,
  startuur,
  stopuur,
  maand,
  dag,
  maandnaam,
}) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex justifyContent='center'>
        <Box mr='10px' mt='8px' fontSize={["12px", "12px", "14px", "14px"]}>
          <Text>{maandnaam}</Text>
          <Text fontWeight='bold'>{dag}</Text>
        </Box>
        <Button
          onClick={onToggle}
          _focus={{ outline: 0 }}
          className='agendapunt'
        >
          <VStack>
            <Text
              fontSize={["16px", "16px", "17px", "18px"]}
              maxW='75vw'
              isTruncated
            >
              {agenda.wedstrijdId != "" &&
                "Wedstrijd " +
                  agenda.wedstrijdId[0].teamId.naam +
                  " | " +
                  agenda.wedstrijdId[0].clubThuis.naam +
                  " - " +
                  agenda.wedstrijdId[0].clubUit.naam}
              {agenda.trainingId != "" &&
                "Training" + " | " + agenda.trainingId[0].teamId.naam}
              {agenda.groepId != "" && agenda.groepId[0].naam}
              {/* Wedstrijd | Voorwaarts KKc - Borgerhout/Groen-Wit */}
            </Text>
            <Text fontSize={["12px", "12px", "14px", "14px"]}>
              {/* Zo 27 Juni | 15u00 - 17u00 */}
              {dag}/{maand}/{jaar} | {startuur} - {stopuur}
            </Text>
          </VStack>
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <Box className='agendapuntinfo' rounded='md' shadow='md'>
            <Text>
              Locatie:{" "}
              {agenda.wedstrijdId != "" &&
                agenda.wedstrijdId[0].clubThuis.straat +
                  " " +
                  agenda.wedstrijdId[0].clubThuis.huisnr}
              {agenda.trainingId != "" &&
                "Jacob de Roorestraat 6 2650 Edegem | Kunstgrasveld"}
              {agenda.groepId != "" &&
                "Jacob de Roorestraat 6 2650 Edegem | Kantine"}
            </Text>
            {agenda.groepId != "" &&
              agenda.groepId[0].persoons.map((persoon) => (
                <Text>
                  {persoon.voornaam} {persoon.achternaam}
                </Text>
              ))}
          </Box>
        </Box>
      </Collapse>
    </>
  );
}

export default agendapunt;
