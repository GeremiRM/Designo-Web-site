import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

interface ProjectsCardProps {
  cardInfo: {
    link: string;
    img: {
      base: string;
      sm: string;
      md: string;
    };
    heading: string;
  };
  ignoredCard: number;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({
  cardInfo,
  ignoredCard,
}) => {
  return (
    <Link href={cardInfo.link}>
      <Box
        _first={{
          gridRow: { md: `${ignoredCard > -1 ? "1/2" : "1/3"}` },
        }}
        bg={{
          base: `url(${cardInfo.img.base}) no-repeat center`,
          sm: `url(${cardInfo.img.sm}) no-repeat center/cover`,
          md: `url(${cardInfo.img.md}) no-repeat center/cover`,
        }}
        borderRadius="20px"
        color="white"
        display="flex"
        textAlign="center"
        justifyContent="center"
        flexDirection="column"
        textTransform="uppercase"
        position="relative"
      >
        <Box
          bg="rgba(0,0,0,0.25)"
          position="absolute"
          h="100%"
          w="100%"
          borderRadius="inherit"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          transition="0.25s"
          cursor="pointer"
          _hover={{ bg: "rgba(231, 129, 107, 0.7)" }}
        >
          <Heading
            fontFamily="Jost"
            fontWeight="500"
            letterSpacing="1px"
            fontSize={{ base: "1.75rem", sm: "2.5rem" }}
          >
            {cardInfo.heading}
          </Heading>
          <Flex align="center" justify="center" mt="1rem">
            <Text
              letterSpacing="5px"
              fontWeight="600"
              fontSize="0.9rem"
              mr="1rem"
            >
              View Projects
            </Text>
            <Image src="/shared/desktop/icon-right-arrow.svg" w="8px" />
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};
