import { Heading, Box, Text } from "@chakra-ui/react";
import Agenda from "../components/wedstrijden/wedstrijd";
import { NextSeo } from "next-seo";

export default function wedstrijd() {
  const SEO = {
    title: "Wedstrijden | VW Korfbalplatform",
    description:
      "De pagina waar je alle gespeelde en nog te spelen wedstrijden terug kan vinden van voorwaarts",
    openGraph: {
      url: "https://front-end-eindwerk.vercel.app/competitie",
      title: "Wedstrijden | VW Korfbalplatform",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Box p={["0 6px 6px", "0 9px 9px", "0 14px 14px", "0px 18px 18px"]}>
        <Heading
          as='h1'
          fontSize={["22px", "26px", "30px", "34px"]}
          padding={["22px", "26px", "30px", "34px"]}
          textAlign='center'
        >
          <Box>
            <Text>
              <div className='color'>Wedstrijden</div> van Voorwaarts KKc
            </Text>
          </Box>
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
