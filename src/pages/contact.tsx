import { Layout } from "../components/Layout/Layout";

import { ContactForm } from "../components/ContactForm";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { Wrapper } from "../components/General/Wrapper";
import { Links } from "../components/Shared/Links";

const Contact: React.FC<{}> = ({}) => {
  return (
    <Layout ignoreCard={true}>
      <Box color="white">
        <Box bg="rgb(231, 129, 107)">
          <Wrapper>
            <Stack py="4.5rem" lineHeight="1.5rem" spacing="1.75rem">
              <Heading fontFamily="inherit">Contact Us</Heading>
              <Text fontSize="0.9rem">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </Text>
            </Stack>
          </Wrapper>
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
