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
  wedstrijd,
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
              Wedstrijd {wedstrijd.teamId.naam} | {wedstrijd.clubThuis.naam} -{" "}
              {wedstrijd.clubUit.naam}
            </Text>
            <Text fontSize={["12px", "12px", "14px", "14px"]}>
              {dag}/{maand}/{jaar} | {startuur} - {stopuur}
            </Text>
          </VStack>
        </Button>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Box>
          <Box className='agendapuntinfo' rounded='md' shadow='md'>
            <Text>
              Locatie: {wedstrijd.clubThuis.straat} {wedstrijd.clubThuis.huisnr}
            </Text>
            {wedstrijd.scorethuis != "" && (
              <Text>
                {wedstrijd.clubThuis.naam}{" "}
                <strong>{wedstrijd.scorethuis}</strong> -{" "}
                <strong>{wedstrijd.scoreuit}</strong> {wedstrijd.clubUit.naam}
              </Text>
            )}
            {wedstrijd.matchverloop != "" && (
              <Text>{wedstrijd.matchverloop}</Text>
            )}
          </Box>
        </Box>
      </Collapse>
    </>
  );
}

export default agendapunt;
