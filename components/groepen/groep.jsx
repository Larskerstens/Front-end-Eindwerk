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

export default function groep({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //console.log(data);
  return (
    /* {groepen.map((groep) => ( */
    <>
      <a onClick={onOpen}>
        <Flex className='groepcard'>
          <Image
            w='auto'
            maxH='200px'
            src={"./images/groepen/" + name + ".png"}
            alt='Voorbeeld foto van een bepaalde groep'
            fallbackSrc='https://via.placeholder.com/200?text=VW'
          />
          <Text fontSize='24px' fontWeight='bold' mt='24px'>
            {/* {groep.naam} */}
            {/* {groepen.naam} */}
            {name}
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
            {name}
          </DrawerHeader>

          <DrawerBody>
            <Box backgroundColor='#025902' maxW='900px' w='100%' mb='15px'>
              <Accordion
                maxW='750px'
                padding={["10px", "18px"]}
                margin='0 auto 15px'
                allowToggle
              >
                <Lid name='Lars' aname='Kerstens' team='kern' />
                <Lid name='Imke' aname='Loos' team='kern' />
                <Lid name='Jens' aname='Verbruggen' team='kern' />
                <Lid name='elin' aname='Loos' team='kern' />
                <Lid name='Lars' aname='Kerstens' team='kern' />
                <Lid name='Imke' aname='Loos' team='kern' />
                <Lid name='Jens' aname='Verbruggen' team='kern' />
              </Accordion>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
    /* ))} */
  );
}

/* export async function getStaticProps() {
  const response = await fetch("https://127.0.0.1:8000/api/groeps.json");
  const data = await response.json();
  console.log(data.data["hydra:memeber"]);
  const groepen = data.data["hydra:memeber"];
  return {
    props: {
      groepen,
    },
    revalidate: 3600,
  };
} */
