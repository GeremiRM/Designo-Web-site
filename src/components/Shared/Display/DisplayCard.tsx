import { Box, Image, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

import { ButtonComp } from "../../General/ButtonComp";

interface DisplayCardProps {
  cardInfo: {
    heading: string;
    img: string;
    button?: string;
    text?: string;
  };
}

export const DisplayCard: React.FC<DisplayCardProps> = ({ cardInfo }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box position="relative" mb="3rem">
        <Box
          w="100%"
          h="100%"
          position="absolute"
          zIndex="-1"
          borderRadius="100%"
          bg="linear-gradient(90deg, rgba(93, 2, 2, 0.15) 0%, rgba(93, 2, 2, 0.0001) 100%)"
        ></Box>
        <Image src={cardInfo.img} />
      </Box>
      <Box textAlign="center">
        <Heading
          textTransform="uppercase"
          fontFamily="Jost"
          fontWeight="500"
          fontSize="1.25rem"
          letterSpacing="5px"
          mb="2rem"
        >
          {cardInfo.heading}
        </Heading>
        {cardInfo.hasOwnProperty("button") ? (
          <Link
            href={`/locations#${cardInfo.heading
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <Box>
              <ButtonComp bg="rgb(237, 128, 105)" color="white">
                {cardInfo.button}
              </ButtonComp>
            </Box>
          </Link>
        ) : (
          <Text>{cardInfo.text}</Text>
        )}
      </Box>
    </Box>
  );
};
