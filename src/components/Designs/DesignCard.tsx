import { Box, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface DesignCardProps {
  cardInfo: {
    image: string;
    heading: string;
    desc: string;
  };
}

export const DesignCard: React.FC<DesignCardProps> = ({ cardInfo }) => {
  return (
    <Stack
      role="group"
      textAlign="center"
      border="none"
      borderRadius="8px"
      bg="rgb(253, 243, 240)"
      transition="0.1s"
      _hover={{
        boxShadow: "0 0 20px rgba(0,0,0,0.25), 0 0 5px rgba(0,0,0,0.25)",
        transform: "scale(1.01)",
        bg: "rgb(237, 128, 105)",
        color: "white",
        cursor: "pointer",
      }}
    >
      <Box borderRadius="inherit">
        <Image
          src={cardInfo.image}
          borderRadius="inherit"
          transition="0.25s"
          _groupHover={{
            transform: "scale(1.05)",
            boxShadow: "0 0 20px rgba(0,0,0,0.25), 0 2px 5px rgba(0,0,0,0.25)",
          }}
        />
      </Box>
      <Box p="3rem 2rem" bg="inherit" borderRadius="inherit">
        <Heading
          textTrasform="uppercase"
          color="#E7816B"
          fontFamily="inherit"
          fontWeight="500"
          fontSize="1.25rem"
          letterSpacing="5px"
          textTransform="uppercase"
          mb="1rem"
          _groupHover={{
            color: "inherit",
          }}
        >
          {cardInfo.heading}
        </Heading>
        <Text fontSize="0.9rem">{cardInfo.desc}</Text>
      </Box>
    </Stack>
  );
};
