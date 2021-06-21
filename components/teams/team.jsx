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
  Skeleton,
} from "@chakra-ui/react";

import Lid from "../leden/lidkaart";

function team({ team }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <a onClick={onOpen}>
        <Flex className='teamcard'>
          <Skeleton isLoaded>
            <Image
              w='auto'
              maxH='200px'
              src={"./images/teams/" + team.naam + ".jpg"}
              alt='Foto van het team dat speelt bij Voorwaarts kkc'
              fallbackSrc='https://via.placeholder.com/300x200/025902/fbfbfb?text=VW'
            />
          </Skeleton>
          <Text fontSize='24px' fontWeight='bold' mt='24px'>
            {team.naam}
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
            {team.naam}
          </DrawerHeader>

          <DrawerBody>
            <Box backgroundColor='#025902' maxW='900px' w='100%' mb='15px'>
              <Accordion
                maxW='750px'
                padding={["10px", "18px"]}
                margin='0 auto 15px'
                allowToggle
              >
                {team.teamId.map((lid) => (
                  <Lid lid={lid} />
                ))}
              </Accordion>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default team;
