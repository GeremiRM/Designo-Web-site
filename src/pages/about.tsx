import { Box, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Links } from "../components/Shared/Links";
import { AboutCard } from "../components/About/AboutCard";

// Page Information
import { aboutInfo } from "../components/About/AboutInfo";

export const About: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Box
          w={{ base: "100%", sm: "680px" }}
          mx="auto"
          borderRadius="20px"
          overflow="hidden"
        >
          <Box
            h="320px"
            bg={{
              base: "url(./about/mobile/image-about-hero.jpg) no-repeat top/cover",
              sm: "url(./about/tablet/image-about-hero.jpg) no-repeat top/cover",
            }}
          ></Box>
          <Box
            color="white"
            bg="rgb(237, 128, 105)"
            p={{ base: "4.75rem", sm: "3.5rem 3.5rem 4rem" }}
            borderBottomLeftRadius="inherit"
            borderBottomRightRadius="inherit"
          >
            <Heading
              fontFamily="Jost"
              mb={{ base: "1rem", sm: "1rem" }}
              fontSize={{ base: "2rem", sm: "3rem" }}
            >
              About us
            </Heading>
            <Text fontSize={{ base: "0.9rem", sm: "1rem" }} lineHeight="1.6rem">
              Founded in 2010, we are a creative agency that produces lasting
              results for our clients. We’ve partnered with many startups,
              corporations, and nonprofits alike to craft designs that make real
              impact. We’re always looking forward to creating brands, products,
              and digital experiences that connect with our clients’ audiences.
            </Text>
          </Box>
          <Box mt={{ base: "", sm: "6rem" }}>
            <AboutCard cardInfo={aboutInfo[0]} />
            <Links />
            <Box mt="6rem">
              <AboutCard cardInfo={aboutInfo[1]} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
