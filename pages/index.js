import Head from "next/head";
import { Heading, Box } from "@chakra-ui/react";
import Agenda from "../components/agenda/agendapunt";

export default function index() {
  return (
    <>
      <Head>
        <title>Agenda pagina</title>
      </Head>
      <Box p={["4px", "9px", "14px", "18px"]}>
        <Heading
          padding='.5em'
          fontSize={["22px", "26px", "30px", "34px"]}
          textAlign='center'
        >
          Welkom op de AGENDA pagina van ons Korfbalplatform
        </Heading>
        <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Vandaag
        </Box>
        <Agenda />
        <Agenda />
        <Agenda />
        <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Juni 2021
        </Box>
        <Agenda />
        <Box className='divider' fontSize={["12px", "14px", "16px", "16px"]}>
          Juli 2021
        </Box>
        <Agenda />
        <Agenda />
      </Box>
    </>
  );
}
