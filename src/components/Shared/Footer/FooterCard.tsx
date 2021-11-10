import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { ButtonComp } from "../../General/ButtonComp";

export const FooterCard: React.FC<{}> = ({}) => {
  return (
    <Box mb="-6rem">
      <Box
        w="100%"
        textAlign="center"
        color="white"
        bg="#E7816B"
        mx="auto"
        borderRadius="15px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        py={{ base: "4rem", sm: "3rem" }}
        px={{ base: "1.5rem", sm: "8.75rem" }}
        position="relative"
        top="-260px"
      >
        <Box>
          <Heading
            fontFamily="Jost"
            px="1.5rem"
            mb="1.25rem"
            fontWeight="600"
            fontSize={{ base: "2rem", sm: "2.5rem" }}
            lineHeight={{ sm: "2.5rem" }}
          >
            Let’s talk about your project
          </Heading>
        </Box>
        <Box mb="2.5rem">
          <Text fontSize={{ base: "0.9rem", sm: "1rem" }}>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </Text>
        </Box>
        <Box>
          <ButtonComp bg="white" color="black">
            Get in Touch
          </ButtonComp>
        </Box>
      </Box>
    </Box>
  );
};
