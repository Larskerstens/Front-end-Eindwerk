import Link from "next/link";
import { HStack, Box, Menu, MenuButton } from "@chakra-ui/react";
import MobileNav from "./MobileNav";

function navigation() {
  return (
    <>
      <Box display={["none", "none", "block", "block"]} className='stickynav'>
        <HStack className='menu'>
          <Menu>
            <Link href='/' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Agenda pagina'>Agenda</a>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/groep' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Groep pagina'>Groep</a>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/team' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Team pagina'>Team</a>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/clubs' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Clubs pagina'>Clubs</a>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/competitie' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Wedstrijden pagina'>Wedstrijden</a>
              </MenuButton>
            </Link>
          </Menu>
          <Menu>
            <Link href='/leden' passHref>
              <MenuButton className='menuitem'>
                <a title='Ga naar de Leden pagina'>Leden</a>
              </MenuButton>
            </Link>
          </Menu>
        </HStack>
      </Box>
      <Box
        textAlign='end'
        background='#025902'
        display={["block", "block", "none", "none"]}
        className='stickynav'
      >
        <MobileNav />
      </Box>
    </>
  );
}

export default navigation;
