import Head from "next/head";
import {
  Heading,
  Flex,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";

export default function index({ person }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Head>
        <title>Agenda pagina</title>
      </Head>

      <Flex justifyContent='center' alignItems='center' flexDirection='column'>
        <Heading padding='.5em' as='h1'>
          Welkom op de hoofdpagina van ons Korfbalplatform
        </Heading>
        <Heading fontSize='1.5em' mb='1.5em'>
          Peroonlijke info
        </Heading>
        <p className='test'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa
          dolores consectetur ipsam laudantium magni error obcaecati laborum
          dignissimos quia eligendi suscipit molestiae blanditiis, possimus
          mollitia. Magni optio voluptate porro aliquid sunt expedita? Veniam,
          nisi? Numquam, dolore? Quam, magnam dicta? Nobis blanditiis nulla in.
          Nostrum illo iusto fugiat rem accusamus.
        </p>
        <Button onClick={onToggle} _focus={{ outline: 0 }} className='button'>
          Klik hier voor mijn info
        </Button>
        <ScaleFade initialScale={0.9} in={isOpen}>
          <Box p='40px' color='white' mt='4' rounded='md' shadow='md'>
            <p>Naam: {person.name}</p>
            <p>Leeftijd: {person.age}</p>
            <p>Postcode: {person.postcode}</p>
            <p>Gemeente: {person.gemeente}</p>
          </Box>
        </ScaleFade>
      </Flex>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      person: {
        name: "Lars",
        age: 25,
        postcode: 2650,
        gemeente: "Edegem",
      },
    },
  };
}
