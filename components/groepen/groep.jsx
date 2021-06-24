import React from "react";
import {
  Flex,
  Text,
  Image,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Accordion,
  Box,
} from "@chakra-ui/react";
import Lid from "../leden/lidkaart";

export default function groep({ groep /* , name */ }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const foto = () => {
    switch (groep.naam) {
      case "Bestuur":
        return "./images/groepen/bestuur.png";
      case "Jeugdbestuur":
        return "./images/groepen/bestuur.png";
      case "Toogploeg":
        return "./images/groepen/toog.png";
      case "Feest comité":
        return "./images/groepen/feest.png";
      case "Kuisploeg 1":
        return "./images/groepen/kuisen.png";
      case "Kuisploeg 2":
        return "./images/groepen/kuisen.png";
      case "Kuisploeg 4":
        return "./images/groepen/kuisen.png";
      case "Kuisploeg 5":
        return "./images/groepen/kuisen.png";
      case "Kuisploeg 6":
        return "./images/groepen/kuisen.png";
      case "Kuisploeg 3":
        return "./images/groepen/kuisen.png";
    }
  };
  //console.log(data);
  return (
    <>
      <a onClick={onOpen}>
        <Flex className='groepcard'>
          <Image
            w='auto'
            maxH='200px'
            //src={"./images/groepen/" + name + ".png"}
            src={foto()}
            alt='Voorbeeld foto van een bepaalde groep'
            fallbackSrc='https://via.placeholder.com/200?text=VW'
          />
          <Text fontSize='24px' fontWeight='bold' mt='24px'>
            {groep.naam} {/* {name} */}
          </Text>
        </Flex>
      </a>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='xl'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize='1.3em'
            mx={4}
            my={3}
            _focus={{ outline: 0 }}
            _hover={{ background: "none", opacity: 0.6 }}
          />
          <DrawerHeader borderBottom='1px solid #025902' my={3} fontSize='18px'>
            {groep.naam} {/* {name} */}
          </DrawerHeader>

          <DrawerBody>
            <Box backgroundColor='#025902' maxW='900px' w='100%' mb='15px'>
              <Accordion
                maxW='750px'
                padding={["10px", "18px"]}
                margin='0 auto 15px'
                allowToggle
              >
                {groep.persoons.map((lid) => (
                  <Lid lid={lid} />
                ))}
                {/* <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' />
                <Lid vnaam='Lars' anaam='Kerstens' leeftijd='25' /> */}
              </Accordion>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
