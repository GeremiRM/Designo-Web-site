import { Box, Heading, Stack, Text } from "@chakra-ui/react";

interface LocationsCardProps {
  cardInfo: {
    img: string;
    heading: string;
    descriptions: string[][];
  };
}

export const LocationsCard: React.FC<LocationsCardProps> = ({ cardInfo }) => {
  const renderDescriptions = () => {
    return cardInfo.descriptions.map((desc) => (
      <Stack fontSize="0.9rem" spacing="0.25rem">
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
    <Box id={id}>
      <Stack
        bg="rgb(253, 243, 240)"
        spacing="2rem"
        py="4.5rem"
        align="center"
        justify="center"
      >
        <Heading
          fontFamily="inherit"
          fontWeight="500"
          color="#E7816B"
          letterSpacing="1px"
        >
          {cardInfo.heading}
        </Heading>
        {renderDescriptions()}
      </Stack>
      <Box bg={`url(${cardInfo.img}) no-repeat left/cover`} h="310px"></Box>
    </Box>
  );
};
