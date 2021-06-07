import Link from "next/link";
import {
  HStack,
  Menu,
  MenuButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

function mobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function CloseDraw() {
    setTimeout(function () {
      onClose();
    }, 200);
  }

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        background='#025902'
        color='whitesmoke'
        m={4}
        px={4}
        py={7}
        fontSize='2.6em'
        transition='.4s'
        _focus={{ outline: 0 }}
        _hover={{
          opacity: 0.6,
        }}
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            fontSize='1.5em'
            mx={4}
            my={3}
            _focus={{ outline: 0 }}
            _hover={{ background: "none", opacity: 0.6 }}
          />
          <DrawerHeader borderBottom='1px solid #025902' my={3} fontSize='17px'>
            Korfbalplatform
          </DrawerHeader>

          <DrawerBody>
            <HStack flexDirection='column'>
              <Menu>
                <Link href='/' passHref>
                  <MenuButton className='mobilenavitem' onClick={CloseDraw}>
                    <a title='Ga naar de Agenda pagina'>Agenda</a>
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <Link href='/groep' passHref>
                  <MenuButton className='mobilenavitem' onClick={CloseDraw}>
                    <a title='Ga naar de Groep pagina'>Groep</a>
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <Link href='/team' passHref>
                  <MenuButton onClick={CloseDraw} className='mobilenavitem'>
                    <a title='Ga naar de Team pagina'>Team</a>
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <Link href='/club' passHref>
                  <MenuButton onClick={CloseDraw} className='mobilenavitem'>
                    <a title='Ga naar de Clubs pagina'>Clubs</a>
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <Link href='/competitie' passHref>
                  <MenuButton onClick={CloseDraw} className='mobilenavitem'>
                    <a title='Ga naar de Competitie pagina'>Competitie</a>
                  </MenuButton>
                </Link>
              </Menu>
              <Menu>
                <Link href='/leden' passHref>
                  <MenuButton onClick={CloseDraw} className='mobilenavitem'>
                    <a title='Ga naar de Leden pagina'>Leden</a>
                  </MenuButton>
                </Link>
              </Menu>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default mobileNav;
