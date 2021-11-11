import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Links } from "../components/Shared/Links";
import { AboutCard } from "../components/About/AboutCard";

// Page Information
import { aboutInfo } from "../components/About/AboutInfo";
import { Wrapper } from "../components/General/Wrapper";

export const About: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Wrapper>
          <Box borderRadius="20px" overflow="hidden" textAlign={{ md: "left" }}>
            <Flex
              direction={{ base: "column", md: "row-reverse" }}
              borderRadius="inherit"
            >
              <Box
                h={{ base: "320px", md: "475px" }}
                w={{ base: "100%", md: "45%" }}
                bg={{
                  base: "url(./about/mobile/image-about-hero.jpg) no-repeat top/cover",
                  sm: "url(./about/tablet/image-about-hero.jpg) no-repeat top/cover",
                  md: "url(./about/desktop/image-about-hero.jpg) no-repeat top/cover",
                }}
                borderBottomRightRadius={{ md: "inherit" }}
              ></Box>
              <Flex
                color="white"
                bg="rgb(237, 128, 105)"
                p={{ base: "4.75rem", sm: "3.5rem 3.5rem 4rem", md: "0 6rem" }}
                borderBottomLeftRadius="inherit"
                borderBottomRightRadius={{ sm: "inherit", md: "none" }}
                w={{ base: "100%", md: "55%" }}
                direction={{ base: "column" }}
                justify="center"
              >
                <Heading
                  fontFamily="Jost"
                  mb={{ base: "1rem", md: "1.5rem" }}
                  fontSize={{ base: "2rem", sm: "3rem", md: "3.25rem" }}
                  fontWeight="500"
                >
                  About us
                </Heading>
                <Text
                  fontSize={{ base: "0.9rem", sm: "1rem" }}
                  lineHeight="1.6rem"
                >
                  Founded in 2010, we are a creative agency that produces
                  lasting results for our clients. We’ve partnered with many
                  startups, corporations, and nonprofits alike to craft designs
                  that make real impact. We’re always looking forward to
                  creating brands, products, and digital experiences that
                  connect with our clients’ audiences.
                </Text>
              </Flex>
            </Flex>
            <Box mt={{ base: "", sm: "6rem" }}>
              <AboutCard cardInfo={aboutInfo[0]} />
              <Box mb="6rem">
                <Links />
              </Box>
              <AboutCard cardInfo={aboutInfo[1]} inverse={true} />
            </Box>
          </Box>
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default About;
