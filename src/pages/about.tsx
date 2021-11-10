import { Box, Heading, Text } from "@chakra-ui/react";

import { Layout } from "../components/Layout/Layout";
import { Display } from "../components/Shared/Display/Display";
import { AboutCard } from "../components/About/AboutCard";

// Page Information
import { cardsInfo, aboutInfo } from "../components/About/AboutInfo";

export const About: React.FC<{}> = ({}) => {
  return (
    <Layout>
      <Box>
        <Box
          h="320px"
          bg="url(./about/mobile/image-about-hero.jpg) no-repeat top/cover"
        ></Box>
        <Box color="white" bg="rgb(237, 128, 105)" p="4.75rem 5rem 5rem">
          <Heading
            fontFamily="Jost"
            mb="1.5rem"
            fontSize="2rem"
            fontWeight="500"
          >
            About us
          </Heading>
          <Text fontSize="0.9rem" lineHeight="1.6rem">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </Text>
        </Box>
        <Box>
          <AboutCard cardInfo={aboutInfo[0]} />
          <Display info={cardsInfo} />
          <Box mt="6rem">
            <AboutCard cardInfo={aboutInfo[1]} />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
