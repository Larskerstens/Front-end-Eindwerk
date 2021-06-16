import Head from "next/head";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Groep from "../components/groepen/groep";

export default function index({ groepen }) {
  return (
    <>
      <Head>
        <title>Groepen pagina | Korfbalplatform</title>
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
        <Groep name='bestuur' /* data={clubs} */ />
        <Groep name='feest' /* data={clubs} */ />
        <Groep name='bestuur' /* data={clubs} */ />
        <Groep name='toog' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
        <Groep name='kuisen' /* data={clubs} */ />
      </Grid>
    </>
  );
}

/* export async function getStaticProps() {
  const response = await fetch("http://localhost:8000//api/groeps.jsonld");
  const data = await response.json();
  const groepen = data.data["hydra:memeber"];
  return {
    props: {
      groepen,
    },
    revalidate: 3600,
  };
}
 */
