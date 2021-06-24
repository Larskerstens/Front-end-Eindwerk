import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Team from "../components/teams/team";

export default function index({ teams }) {
  return (
    <>
      <Head>
        <title>Teams pagina | Korfbalplatform</title>
        <meta name='viewport' content='width=device-width, maximum-scale=1.0' />
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
          <Team team={team} key={team.id} />
        ))}
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
