import { Box, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Designs } from "../components/Designs/Designs";
import { DesignHeader } from "../components/Designs/DesignHeader";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";

import info from "../data/appdesign";

const AppDesign: React.FC<{}> = ({}) => {
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
              App Design
            </Heading>
            <Text lineHeight="1.5rem">
              Our mobile designs bring intuitive digital solutions to your
              customers right at their fingertips.
            </Text>
          </DesignHeader>
          <Designs info={info} />
          <Projects ignoreCard={1} />
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default AppDesign;
