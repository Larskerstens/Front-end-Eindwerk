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
        <Box mr='10px' mt='8px' fontSize={["12px", "12px", "14px", "14px"]}>
          <Text>Zo</Text>
          <Text fontWeight='bold'>27</Text>
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
              Wedstrijd | Voorwaarts KKc - Borgerhout/Groen-Wit
            </Text>
            <Text fontSize={["12px", "12px", "14px", "14px"]}>
              Zo 27 Juni | 15u00 - 17u00
            </Text>
          </VStack>
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <Box className='agendapuntinfo' rounded='md' shadow='md'>
            <Text>Locatie: Eysegemblok 22</Text>
            <Text>Datum & Tijd: 27 Juni 2021 15:00</Text>
            <Text>Team: Kern</Text>
            <Text></Text>
          </Box>
        </Box>
      </Collapse>
    </>
  );
}

export default agendapunt;
