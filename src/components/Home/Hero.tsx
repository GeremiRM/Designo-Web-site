import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import { ButtonComp } from "../General/ButtonComp";
import { Wrapper } from "../General/Wrapper";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Box bg="rgb(237, 128, 105)" color="white" pt="5rem" overflow="hidden">
      <Flex direction="column" textAlign="center" justify="center">
        <Wrapper>
          <Box spacing="2rem" zIndex="1">
            <Box mb="1rem">
              <Heading fontFamily="Jost" fontSize="2rem">
                Award-winning custom designs and digital branding solutions
              </Heading>
            </Box>
            <Box mb="1.25rem">
              <Text px="0.25rem">
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services
              </Text>
            </Box>
            <Box>
              <ButtonComp bg="white" color="black">
                Learn More
              </ButtonComp>
            </Box>
          </Box>
        </Wrapper>
        <Box
          position="relative"
          h="425px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="./home/desktop/image-hero-phone.png"
            maxW="none"
            position="absolute"
            top="-125px"
          />
        </Box>
      </Flex>
    </Box>
  );
};
