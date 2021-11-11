import { Box, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";

interface AboutCardProps {
  cardInfo: {
    img: { base: string; sm: string; md: string };
    heading: string;
    descriptions: string[];
  };
  inverse?: boolean;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  cardInfo,
  inverse = false,
}) => {
  const renderDescriptions = () => {
    return cardInfo.descriptions.map((desc) => <Text>{desc}</Text>);
  };

  return (
    <Flex
      borderRadius={{ base: "", sm: "20px" }}
      overflow="hidden"
      direction={{ base: "column", md: `${inverse ? "row-reverse" : "row"}` }}
    >
      <Box
        h={{ base: "320px", md: "auto" }}
        w={{ base: "100%", md: "45%" }}
        bg={{
          base: `${cardInfo.img.base} no-repeat center/cover`,
          sm: `${cardInfo.img.sm} no-repeat center/cover`,
          md: `${cardInfo.img.md} no-repeat bottom/cover`,
        }}
      ></Box>
      <Box
        py={{ base: "5rem", sm: "4rem", md: "10rem" }}
        bg="rgb(253, 243, 240)"
        fontSize={{ base: "0.9rem", sm: "1rem" }}
        w={{ base: "100%", md: "55%" }}
      >
        <Stack
          spacing={{ base: "3.75rem", sm: "2rem" }}
          px={{ base: "2.75rem", sm: "4rem", md: "4.75rem" }}
          lineHeight="1.7rem"
        >
          <Heading
            fontSize={{ base: "1.75rem", sm: "2.5rem" }}
            fontFamily="Jost"
            color="#E7816B"
            fontWeight="500"
            letterSpacing="1px"
          >
            {cardInfo.heading}
          </Heading>
          {renderDescriptions()}
        </Stack>
      </Box>
    </Flex>
  );
};
