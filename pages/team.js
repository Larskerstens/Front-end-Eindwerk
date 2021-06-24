import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Team from "../components/teams/team";

export default function index({ teams }) {
  return (
    <>
      <Head>
        <title>Teams pagina | Korfbalplatform</title>
      </Head>
      <Heading
        as='h1'
        fontSize={["22px", "26px", "30px", "34px"]}
        padding={["22px", "26px", "30px", "34px"]}
        textAlign='center'
      >
        <Box>
          <Text>
            <div className='color'>Teams</div> van Voorwaarts KKc
          </Text>
        </Box>
      </Heading>
      <Grid
        className='teams'
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        p='0 1.5em 2.2em'
      >
        {teams.map((team) => (
          <Team team={team} />
        ))}
        {/* <Team name='Kern' />
        <Team name='U19' />
        <Team name='U16' />
        <Team name='U14' />
        <Team name='U12' />
        <Team name='U10' />
        <Team name='U8' />
        <Team name='Testteam' /> */}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/teams.json",
  );
  const teams = await response.json();
  return {
    props: {
      teams,
    },
    revalidate: 3600,
  };
}
