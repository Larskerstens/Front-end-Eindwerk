import Head from "next/head";
import {
  Heading,
  Flex,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
  Text,
  Accordion,
} from "@chakra-ui/react";
import Lid from "../components/leden/lidkaart";

export default function index() {
  return (
    <>
      <Head>
        <title>Leden pagina | Korfbalplatform</title>
      </Head>
      <Flex
        justifyContent='space-evenly'
        flexDirection={["column", "column", "column", "row"]}
      >
        <Heading fontSize={["22px", "26px", "30px", "34px"]} m='34px'>
          <Box borderLeft='3px solid #14a614' textAlign='left' pl='25px'>
            <Text>
              <div className='color'>Leden</div> van
            </Text>
            <Text>de club</Text>
          </Box>
        </Heading>
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
            <Lid name='Lauren' aname='Denis' team='kern' />
            <Lid name='Lars' aname='Kerstens' team='kern' />
            <Lid name='Imke' aname='Loos' team='kern' />
            <Lid name='Jens' aname='Verbruggen' team='kern' />
            <Lid name='Lauren' aname='Denis' team='kern' />
            <Lid name='Lars' aname='Kerstens' team='kern' />
            <Lid name='Imke' aname='Loos' team='kern' />
            <Lid name='Jens' aname='Verbruggen' team='kern' />
            <Lid name='Lauren' aname='Denis' team='kern' />
            <Lid name='Lars' aname='Kerstens' team='kern' />
            <Lid name='Imke' aname='Loos' team='kern' />
            <Lid name='Jens' aname='Verbruggen' team='kern' />
            <Lid name='Lauren' aname='Denis' team='kern' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
            <Lid name='Janne' aname='Loos' team='U19' />
          </Accordion>
        </Box>
      </Flex>
    </>
  );
}
