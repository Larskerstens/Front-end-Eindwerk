import React from "react";
import { Flex, Text, Image, Box } from "@chakra-ui/react";

export default function club({ name }) {
  //console.log(data);
  return (
    /* {clubs.map((club) => ( */
    <>
      <Flex className='clubcard'>
        <Image
          width='250px'
          height='auto'
          //src={"/images/clubs/korfbal.png"}
          src={"./images/clubs/" + name + ".png"}
          alt='Foto van de speler'
          fallbackSrc='./images/clubs/korfbal.png'
          borderRadius='15px'
        />
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          {/* {club.naam} */}
          {/* {clubs.naam} */}
          {name}
        </Text>
        <Box className='streepje'></Box>
        <Text fontSize='18px' fontWeight='bold' mt='10px'>
          {/* {club.straat} {club.huisnr} */}testen
        </Text>
        <Text fontSize='18px' fontWeight='bold'>
          Postcode
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
