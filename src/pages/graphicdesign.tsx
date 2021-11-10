import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";

import info from "../data/graphicdesign";
import { Projects } from "../components/Projects/Projects";

const GraphicDesign: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Stack
          h="320px"
          bg="rgb(237, 128, 105)"
          color="white"
          align="center"
          justify="center"
          textAlign="center"
          px="3rem"
          pb="0.5rem"
        >
          <Heading fontFamily="Jost" mb="1rem">
            Graphic Design
          </Heading>
          <Text fontSize="0.9rem" px="1rem" lineHeight="1.5rem">
            We deliver eye-catching branding materials that are tailored to meet
            your business objectives.
          </Text>
        </Stack>
        <Designs info={info} />
        <Projects ignoreCard={2} />
      </Box>
    </Layout>
  );
};

export default GraphicDesign;
