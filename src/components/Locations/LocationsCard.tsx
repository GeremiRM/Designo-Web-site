import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";

interface LocationsCardProps {
  cardInfo: {
    img: { base: string; md: string };
    heading: string;
    descriptions: string[][];
  };
}

export const LocationsCard: React.FC<LocationsCardProps> = ({ cardInfo }) => {
  const renderDescriptions = () => {
    return cardInfo.descriptions.map((desc) => (
      <Stack fontSize={{ base: "0.9rem", sm: "1rem" }} spacing="0.25rem">
        {renderText(desc)}
      </Stack>
    ));
  };

  const renderText = (desc) => {
    return desc.map((text, idx) => (
      <Text fontWeight={idx === 0 ? "600" : "500"}>{text}</Text>
    ));
  };

  const id = cardInfo.heading.replace(" ", "-").toLowerCase();

  return (
    <Flex
      id={id}
      borderRadius={{ base: "", sm: "20px" }}
      direction={{ base: "column", sm: "column-reverse" }}
      overflow="hidden"
    >
      <Stack
        bg="rgb(253, 243, 240)"
        spacing="2rem"
        py="4.5rem"
        px="5rem"
        align={{ base: "center", sm: "flex-start" }}
        justify={{ base: "center", sm: "flex-start" }}
        textAlign={{ base: "center", sm: "left" }}
      >
        <Heading
          fontFamily="inherit"
          fontWeight="500"
          color="#E7816B"
          letterSpacing="1px"
          fontSize={{ base: "", sm: "2.5rem" }}
        >
          {cardInfo.heading}
        </Heading>
        <Stack
          spacing={{ base: "2rem", sm: "6rem" }}
          direction={{ base: "column", sm: "row" }}
        >
          {renderDescriptions()}
        </Stack>
      </Stack>
      <Box
        bg={{
          base: `url(${cardInfo.img.base}) no-repeat left/cover`,
          md: `url(${cardInfo.img.md}) no-repeat left/cover`,
        }}
        h="310px"
      ></Box>
    </Flex>
  );
};
