import Link from "next/link";

import { Box, Heading, Text, Button, Stack } from "@chakra-ui/react";
import { ButtonComp } from "../../General/ButtonComp";

export const FooterCard: React.FC<{}> = ({}) => {
  return (
    <Box mb={{ base: "-6rem", md: "-4rem" }}>
      <Box
        w="100%"
        textAlign={{ base: "center", md: "left" }}
        color="white"
        bgColor="#E7816B"
        mx="auto"
        borderRadius="15px"
        display="flex"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        flexDir={{ base: "column", md: "row" }}
        py={{ base: "4rem", sm: "3rem", md: "4.75rem" }}
        px={{ base: "1.5rem", sm: "8.75rem", md: "6rem" }}
        position="relative"
        top={{ base: "-260px", md: "-220px" }}
        maxW={{ base: "330px", sm: "none" }}
      >
        <Stack
          spacing="1.25rem"
          mb={{ base: "2rem", md: "0" }}
          w={{ md: "50%" }}
        >
          <Heading
            fontFamily="Jost"
            px={{ base: "1.5rem", md: "0" }}
            fontWeight="600"
            fontSize={{ base: "2rem", sm: "2.5rem" }}
            lineHeight={{ sm: "2.5rem" }}
          >
            Let’s talk about your project
          </Heading>
          <Text lineHeight="1.75rem">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </Text>
        </Stack>
        <Box>
          <ButtonComp bg="white" color="black">
            <Link href="/contact">Get in Touch</Link>
          </ButtonComp>
        </Box>
      </Box>
    </Box>
  );
};
