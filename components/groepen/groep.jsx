import React from "react";
import { Flex, Text, Image } from "@chakra-ui/react";

export default function groep({ name }) {
  //console.log(data);
  return (
    /* {clubs.map((club) => ( */
    <>
      <Flex className='clubcard'>
        <Image
          w='auto'
          maxH='200px'
          src={"./images/groepen/" + name + ".png"}
          alt='Foto van de speler'
          fallbackSrc='https://via.placeholder.com/200?text=VW'
        />
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          {/* {club.naam} */}
          {/* {clubs.naam} */}
          {name}
        </Text>
      </Flex>
    </>
    /* ))} */
  );
}

/* export async function getStaticProps() {
  const response = await fetch("https://127.0.0.1:8000/api/clubs.json");
  const data = await response.json();
  console.log(data.data["hydra:memeber"]);
  const clubs = data.data["hydra:memeber"];
  return {
    props: {
      clubs,
    },
    revalidate: 3600,
  };
} */
