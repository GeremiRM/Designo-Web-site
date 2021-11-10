import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";

import info from "../data/graphicdesign";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";

const GraphicDesign: React.FC<{}> = ({}) => {
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
              Graphic Design
            </Heading>
            <Text fontSize={{ base: "0.9rem", sm: "1rem" }} lineHeight="1.5rem">
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
            </Text>
          </Wrapper>
        </Stack>
        <Designs info={info} />
        <Projects ignoreCard={2} />
      </Box>
    </Layout>
  );
};

export default GraphicDesign;
