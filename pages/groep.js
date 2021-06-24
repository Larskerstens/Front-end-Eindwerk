import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Groep from "../components/groepen/groep";

export default function index({ groeps }) {
  return (
    <>
      <Head>
        <title>Groepen pagina | Korfbalplatform</title>
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
            <div className='color'>Vrijwillegerswerk</div> van de leden
          </Text>
        </Box>
      </Heading>
      <Grid
        className='groepen'
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(5, 1fr)",
        ]}
        gap={8}
        p='1.5em'
      >
        {groeps.map((groep) => (
          <Groep groep={groep} key={groep.id} />
        ))}
      </Grid>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://wdev2.be/lars21/eindwerk/api/groeps.json",
  );
  const groeps = await response.json();
  return {
    props: {
      groeps,
    },
    revalidate: 3600,
  };
}
