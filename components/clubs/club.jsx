import React from "react";
import { Flex, Text, Image, Box, Skeleton } from "@chakra-ui/react";

export default function club({ club /* , n, afk  */ }) {
  //console.log(club);
  return (
    <>
      <Flex className='clubcard'>
        <Skeleton isLoaded>
          <Image
            width='250px'
            height='auto'
            src={"./images/clubs/" + club.afkorting /* afk */ + ".png"}
            alt='Foto van de speler'
            fallbackSrc='./images/clubs/korfbal.png'
            borderRadius='15px'
          />
        </Skeleton>
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          {club.naam} {/* {n} */}
        </Text>
        <Box className='streepje'></Box>
        <Text fontSize='18px' fontWeight='bold' mt='10px'>
          {club.straat} {club.huisnr} {/* testlaan 1 */}
        </Text>
        <Text fontSize='18px' fontWeight='bold'>
          {club.postcodeId.code} {club.postcodeId.gemeente} {/* 2000 */}
        </Text>
      </Flex>
    </>
  );
}
