import { Heading, Flex, Box, Text, Accordion } from "@chakra-ui/react";
import Lid from "../components/leden/lidkaart";
import { NextSeo } from "next-seo";

export default function persoon({ persoons }) {
  const SEO = {
    title: "Leden | VW Korfbalplatform",
    description:
      "Alle leden van voorwaarts met adres leeftijd en geboortejaar vnd je hier terug",
    openGraph: {
      url: "https://front-end-eindwerk.vercel.app/leden",
      title: "Leden | VW Korfbalplatform",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <Flex
        justifyContent='space-evenly'
        flexDirection={["column", "column", "column", "row"]}
      >
        <Heading fontSize={["22px", "26px", "30px", "34px"]} m='34px'>
          <Box borderLeft='3px solid #14a614' textAlign='left' pl='25px'>
            <Text>
              <div className='colornoborder'>Leden</div> van
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
            {persoons.map((lid) => (
              <Lid lid={lid} key={lid.id} />
            ))}
          </Accordion>
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/persoons.json",
  );
  const persoons = await response.json();
  return {
    props: {
      persoons,
    },
    revalidate: 3600,
  };
}
