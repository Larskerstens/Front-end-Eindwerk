import React from "react";
import { Flex, Text, Image, Box, Skeleton } from "@chakra-ui/react";

export default function club({ name, naam }) {
  return (
    <>
      <Flex className='clubcard'>
        <Skeleton isLoaded>
          <Image
            width='250px'
            height='auto'
            //src={"/images/clubs/korfbal.png"}
            src={"./images/clubs/" + naam + ".png"}
            alt='Foto van de speler'
            fallbackSrc='./images/clubs/korfbal.png'
            borderRadius='15px'
          />
        </Skeleton>
        <Text fontSize='24px' fontWeight='bold' mt='24px'>
          {/* {data.naam} */}
          {name}
        </Text>
        <Box className='streepje'></Box>
        <Text fontSize='18px' fontWeight='bold' mt='10px'>
          {/* {data.straat} {data.huisnr} */}
          Straatnaam 22
        </Text>
        <Text fontSize='18px' fontWeight='bold'>
          {/* {data.postcodeId.code} {data.postcodeId.gemeente} */}
          2000 Antwerpen
        </Text>
      </Flex>
    </>
  );
}
