import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";

import info from "../data/appdesign";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";

const AppDesign: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Stack
          h={{ base: "320px", sm: "260px" }}
          bg="rgb(237, 128, 105)"
          color="white"
          align="center"
          justify="center"
          textAlign="center"
          pb="0.5rem"
          w={{ base: "100%", sm: "680px" }}
          mx="auto"
          borderRadius={{ base: "", sm: "20px" }}
          px={{ base: "", sm: "9rem" }}
        >
          <Wrapper>
            <Heading
              fontFamily="Jost"
              mb={{ base: "1rem", sm: "1rem" }}
              fontSize={{ base: "2rem", sm: "3rem" }}
            >
              App Design
            </Heading>
            <Text fontSize={{ base: "0.9rem", sm: "1rem" }} lineHeight="1.5rem">
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </Text>
          </Wrapper>
        </Stack>
        <Designs info={info} />
        <Projects ignoreCard={1} />
      </Box>
    </Layout>
  );
};

export default AppDesign;
