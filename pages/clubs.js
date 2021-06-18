import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Club from "../components/clubs/club";

export default function index({ clubs }) {
  return (
    <>
      <Head>
        <title>Clubs pagina | Korfbalplatform</title>
      </Head>
      <Heading
        as='h1'
        fontSize={["22px", "26px", "30px", "34px"]}
        padding={["22px", "26px", "30px", "34px"]}
        textAlign='center'
      >
        <Box>
          <Text>
            <div className='color'>Clubs</div> van De Belgische korfbal
          </Text>
        </Box>
      </Heading>
      <Grid
        className='clubs'
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        p='1.5em'
      >
        <Club name='Kkc Voorwaarts' naam='vw' />
        <Club name='Verde' naam='verde' />
        <Club name='Kwik' naam='kwik' />
        <Club name='Scaldis' naam='kcs' />
        <Club name='Kc Edegem' naam='vw' />
        <Club name='Catba' naam='catba' />
        <Club name='Minerva' naam='kcmi' />
        <Club name='Riviera' naam='ri4a' />
        {clubs.map((club) => (
          <Club data={club} />
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/clubs.json",
  );
  const clubs = await response.json();
  console.log(clubs);
  return {
    props: {
      clubs,
    },
    revalidate: 3600,
  };
}
