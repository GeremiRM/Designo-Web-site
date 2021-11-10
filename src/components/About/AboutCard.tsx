import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface AboutCardProps {
  cardInfo: {
    img: { base: string; sm: string; md: string };
    heading: string;
    descriptions: string[];
  };
}

export const AboutCard: React.FC<AboutCardProps> = ({ cardInfo }) => {
  const renderDescriptions = () => {
    return cardInfo.descriptions.map((desc) => <Text>{desc}</Text>);
  };

  return (
    <Box borderRadius={{ base: "", sm: "20px" }} overflow="hidden">
      <Box
        h="320px"
        bg={{
          base: `${cardInfo.img.base} no-repeat center/cover`,
          sm: `${cardInfo.img.sm} no-repeat center/cover`,
        }}
      ></Box>
      <Box
        py={{ base: "5rem", sm: "4rem" }}
        bg="rgb(253, 243, 240)"
        fontSize={{ base: "0.9rem", sm: "1rem" }}
      >
        <Stack
          spacing={{ base: "3.75rem", sm: "2rem" }}
          px={{ base: "2.75rem", sm: "4rem" }}
          lineHeight="1.5rem"
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
    </Box>
  );
};
