import Head from "next/head";
import {
  Heading,
  Flex,
  ScaleFade,
  useDisclosure,
  Button,
  Box,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";
import Club from "../components/clubs/club";

export default function index() {
  return (
    <>
      <Head>
        <title>Clubs pagina | Korfbalplatform</title>
      </Head>
      <Heading
        padding='.5em'
        fontSize={["22px", "26px", "30px", "34px"]}
        textAlign='center'
      >
        Welkom op de CLUBS pagina van ons Korfbalplatform
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={6}
        p='1.5em'
      >
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
        <Club />
      </Grid>
    </>
  );
}
