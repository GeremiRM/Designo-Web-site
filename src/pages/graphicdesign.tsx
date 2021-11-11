import { Box, Stack, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";
import { DesignHeader } from "../components/Designs/DesignHeader";

import info from "../data/graphicdesign";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";

const GraphicDesign: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Wrapper>
          <DesignHeader>
            <Heading
              fontFamily="Jost"
              mb={{ base: "1rem", sm: "1rem" }}
              fontSize={{ base: "2rem", sm: "3rem" }}
            >
              Graphic Design
            </Heading>
            <Text lineHeight="1.5rem">
              We deliver eye-catching branding materials that are tailored to
              meet your business objectives.
            </Text>
          </DesignHeader>
          <Designs info={info} />
          <Projects ignoreCard={2} />
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default GraphicDesign;
