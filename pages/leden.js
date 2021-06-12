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

export default function index({ person }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Head>
        <title>Agenda pagina</title>
      </Head>
      <Heading
        padding='.5em'
        fontSize={["22px", "26px", "30px", "34px"]}
        textAlign='center'
      >
        Welkom op de LEDEN pagina van ons Korfbalplatform
      </Heading>

      <Accordion maxW='750px' margin='0 auto' allowToggle>
        <Lid name='Lars' aname='Kerstens' team='kern' />
        <Lid name='Imke' aname='Loos' team='kern' />
        <Lid name='Jens' aname='Verbruggen' team='kern' />
        <Lid name='elin' aname='Loos' team='kern' />
        <Lid name='Lars' aname='Kerstens' team='kern' />
        <Lid name='Imke' aname='Loos' team='kern' />
        <Lid name='Jens' aname='Verbruggen' team='kern' />
        <Lid name='elin' aname='Loos' team='kern' />
        <Lid name='Lars' aname='Kerstens' team='kern' />
        <Lid name='Imke' aname='Loos' team='kern' />
        <Lid name='Jens' aname='Verbruggen' team='kern' />
        <Lid name='elin' aname='Loos' team='kern' />
        <Lid name='Lars' aname='Kerstens' team='kern' />
        <Lid name='Imke' aname='Loos' team='kern' />
        <Lid name='Jens' aname='Verbruggen' team='kern' />
        <Lid name='elin' aname='Loos' team='kern' />
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
