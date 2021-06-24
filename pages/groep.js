import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Groep from "../components/groepen/groep";
import { NextSeo } from "next-seo";

export default function groep({ groeps }) {
  const SEO = {
    title: "Groepen | VW Korfbalplatform",
    description:
      "Het vrijwilligerswerk dat de leden van de club voor voorwaarts doen kan je hier terug vinden met daarin in welke leden wat doen",
    openGraph: {
      url: "https://front-end-eindwerk.vercel.app/groep",
      title: "Groepen | VW Korfbalplatform",
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
