import { Layout } from "../components/Layout/Layout";

import { ContactForm } from "../components/ContactForm";
import { Box, Heading, Text, Stack, Flex } from "@chakra-ui/react";
import { Wrapper } from "../components/General/Wrapper";
import { Links } from "../components/Shared/Links";

const Contact: React.FC<{}> = ({}) => {
  return (
    <Layout ignoreCard={true}>
      <Box>
        <Wrapper>
          <Box borderRadius={{ base: "", sm: "20px" }} overflow="hidden">
            <Flex
              bg="rgb(231, 129, 107)"
              color="white"
              borderBottomLeftRadius="inherit"
              borderBottomRightRadius="inherit"
              p={{ base: "4rem 5rem 1rem", sm: "4rem", md: "3rem 6rem 2rem" }}
              direction={{ base: "column", md: "row" }}
              justify={{ md: "space-between" }}
            >
              <Stack
                lineHeight="1.5rem"
                spacing="1.75rem"
                textAlign={{ base: "center", sm: "left" }}
                mb="3rem"
                w={{ base: "100%", md: "48%" }}
                justify={{ md: "center" }}
              >
                <Heading
                  fontFamily="inherit"
                  fontSize={{ base: "2rem", sm: "3rem", md: "3.25rem" }}
                  fontWeight="500"
                >
                  Contact Us
                </Heading>
                <Text>
                  Ready to take it to the next level? Let’s talk about your
                  project or idea and find out how we can help your business
                  grow. If you are looking for unique digital experiences that’s
                  relatable to your users, drop us a line.
                </Text>
              </Stack>
              <Box w={{ base: "100%", md: "40%" }}>
                <ContactForm />
              </Box>
            </Flex>
            <Box color="black">
              <Links />
            </Box>
          </Box>
        </Wrapper>
      </Box>
    </Layout>
  );
};

export default Contact;
