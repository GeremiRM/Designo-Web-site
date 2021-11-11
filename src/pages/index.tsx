import { Box } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Features } from "../components/Home/Features";
import { Hero } from "../components/Home/Hero";
import { Projects } from "../components/Projects/Projects";
import { Wrapper } from "../components/General/Wrapper";

export const Index: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box fontSize={{ base: "0.9rem", sm: "1rem" }}>
        <Wrapper>
          <Hero />
          <Projects />
          <Features />
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default Index;
