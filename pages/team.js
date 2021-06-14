import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Team from "../components/teams/team";

export default function index() {
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
        className='clubs'
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        p='0 1.5em 2.2em'
      >
        <Team team='Kern' />
        <Team team='U19' />
        <Team team='U16' />
        <Team team='U14' />
        <Team team='U12' />
        <Team team='U10' />
        <Team team='U8' />
      </Grid>
    </>
  );
}
