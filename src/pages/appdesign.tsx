import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

import Head from "next/head";
import { Designs } from "../components/Designs/Designs";

import info from "../data/appdesign";

const AppDesign: React.FC<{}> = ({}) => {
  return (
    <Box>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
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
            App Design
          </Heading>
          <Text fontSize="0.9rem" px="1rem" lineHeight="1.5rem">
            Our mobile designs bring intuitive digital solutions to your
            customers right at their fingertips.
          </Text>
        </Stack>
        <Designs info={info} />
      </Box>
      <Footer />
    </Box>
  );
};

export default AppDesign;
