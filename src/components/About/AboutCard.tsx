import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Wrapper } from "../General/Wrapper";

interface AboutCardProps {
  cardInfo: {
    img: string;
    heading: string;
    descriptions: string[];
  };
}

export const AboutCard: React.FC<AboutCardProps> = ({ cardInfo }) => {
  const renderDescriptions = () => {
    return cardInfo.descriptions.map((desc) => <Text>{desc}</Text>);
  };

  return (
    <Box>
      <Box h="320px" bg={`${cardInfo.img} no-repeat center/cover`}></Box>
      <Box py="5rem" bg="rgb(253, 243, 240)" fontSize="0.9rem">
        <Stack spacing="3.75rem" px="2.75rem" lineHeight="1.5rem">
          <Heading
            fontSize="1.75rem"
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
