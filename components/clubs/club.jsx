import React from "react";
import { Flex, Text, Image, Box, Skeleton } from "@chakra-ui/react";

export default function club({ name, naam }) {
  //console.log(clubs);
  return (
    <>
      {/* {clubs.map((club) => ( */}
      <Flex className='clubcard'>
        <Skeleton isLoaded>
          <Image
            width='250px'
            height='auto'
            //src={"/images/clubs/korfbal.png"}
            src={"./images/clubs/" + name + ".png"}
            alt='Foto van de speler'
            fallbackSrc='./images/clubs/korfbal.png'
            borderRadius='15px'
          />
        </Skeleton>
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          {/* {club.naam} */}
          {/* {clubs.naam} */}
          {naam}
        </Text>
        <Box className='streepje'></Box>
        <Text fontSize='18px' fontWeight='bold' mt='10px'>
          {/* {club.straat} {club.huisnr} */}testen
        </Text>
        <Text fontSize='18px' fontWeight='bold'>
          Postcode
        </Text>
      </Flex>
      {/*  ))} */}
    </>
  );
}

/* export async function getStaticProps() {
  const response = await fetch("https://wdev2.be/lars21/eindwerk/api/clubs");
  const data = await response.json();
  console.log(data["hydra:member"]);
  const clubs = data.data["hydra:member"];
  return {
    props: {
      clubs,
    },
    revalidate: 3600,
  };
} */
