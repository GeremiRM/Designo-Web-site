import { Layout } from "../components/Layout/Layout";

import { ContactForm } from "../components/ContactForm";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { Wrapper } from "../components/General/Wrapper";
import { Links } from "../components/Shared/Links";

const Contact: React.FC<{}> = ({}) => {
  return (
    <Layout ignoreCard={true}>
      <Box
        w={{ base: "100%", sm: "680px" }}
        mx="auto"
        borderRadius={{ base: "", sm: "20px" }}
        overflow="hidden"
      >
        <Box
          bg="rgb(231, 129, 107)"
          color="white"
          borderBottomLeftRadius="inherit"
          borderBottomRightRadius="inherit"
          p={{ base: "4rem 5rem 1rem", sm: "4rem" }}
        >
          <Stack
            lineHeight="1.5rem"
            spacing="1.75rem"
            textAlign={{ base: "center", sm: "left" }}
            mb="3rem"
          >
            <Heading
              fontFamily="inherit"
              fontSize={{ base: "2rem", sm: "3rem" }}
            >
              Contact Us
            </Heading>
            <Text fontSize={{ base: "0.9rem", sm: "1rem" }}>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </Text>
          </Stack>
          <ContactForm />
        </Box>
        <Box color="black">
          <Links />
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
