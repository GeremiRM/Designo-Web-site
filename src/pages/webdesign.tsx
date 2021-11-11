import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";

import info from "../data/webdesign";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";
import { DesignHeader } from "../components/Designs/DesignHeader";

const WebDesign: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Wrapper>
          <DesignHeader>
            <Heading
              fontFamily="Jost"
              mb={{ base: "1rem", sm: "1rem" }}
              fontSize={{ base: "2rem", sm: "3rem" }}
              fontWeight="500"
            >
              Web Design
            </Heading>
            <Text lineHeight="1.5rem">
              We build websites that serve as powerful marketing tools and bring
              memorable brand experiences.
            </Text>
          </DesignHeader>
          <Designs info={info} />
          <Projects ignoreCard={0} />
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default WebDesign;
