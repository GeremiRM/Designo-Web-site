import { Box } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Features } from "../components/Home/Features";
import { Hero } from "../components/Home/Hero";
import { Projects } from "../components/Projects/Projects";

export const Index: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box w={{ sm: "680px" }} mx="auto">
        <Hero />
        <Projects />
        <Features />
      </Box>
    </Layout>
  );
};

export default Index;
