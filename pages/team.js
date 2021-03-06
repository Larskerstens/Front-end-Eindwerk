import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Team from "../components/teams/team";
import { NextSeo } from "next-seo";

export default function team({ teams }) {
  const SEO = {
    title: "Teams | VW Korfbalplatform",
    description:
      "Teams pagina is de pagina waar je elk team kan terug vinden met daar in de spelers die spelen in dat team.",
    openGraph: {
      url: "https://front-end-eindwerk.vercel.app/team",
      title: "Teams | VW Korfbalplatform",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
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
