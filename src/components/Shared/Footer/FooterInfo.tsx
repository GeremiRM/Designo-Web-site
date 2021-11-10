import { Box, Image, Flex, Text, Stack, HStack } from "@chakra-ui/react";

export const FooterInfo: React.FC<{}> = ({}) => {
  return (
    <Box
      fontSize={{ base: "0.9rem", sm: "1rem" }}
      position="relative"
      top={{ base: "-2rem", sm: "-5rem" }}
      textAlign={{ base: "inherit", sm: "left" }}
    >
      <Flex
        pb={{ base: "2rem", sm: "3rem" }}
        direction={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        borderBottom={{ base: "0", sm: "1px solid #ffffff33" }}
        fontSize={{ base: "1rem", sm: "0.9rem" }}
      >
        <Flex
          justify="center"
          borderBottom={{ base: "1px solid #ffffff33", sm: "none" }}
          pb={{ base: "2.5rem", sm: "0" }}
        >
          <Image src="./shared/desktop/logo-light.png" w="200px" />
        </Flex>
        <Stack
          spacing="1.5rem"
          textTransform="uppercase"
          color="white"
          mt={{ base: "2rem", sm: 0 }}
          fontWeight="500"
          letterSpacing="2px"
          direction={{ base: "column", sm: "row" }}
        >
          <Text>Our Company</Text>
          <Text>Locations</Text>
          <Text>Contact</Text>
        </Stack>
      </Flex>
      <Flex
        color="whiteAlpha.700"
        fontWeight="600"
        direction={{ base: "column", sm: "row" }}
        justify="space-between"
        align="center"
        mt={{ sm: "2rem" }}
      >
        <Stack mb={{ base: "2.5rem", sm: "0" }}>
          <Text>Designo Central Office</Text>
          <Text>3886 Wellington Street</Text>
          <Text>Toronto, Ontario M9C 3J5</Text>
        </Stack>
        <Stack>
          <Text>Contact Us (Central Office)</Text>
          <Text>P : +1 253-863-8967</Text>
          <Text>M : contact@designo.co</Text>
        </Stack>
        <HStack
          justify="center"
          mt={{ base: "2.5rem", sm: "0" }}
          spacing="1rem"
          alignSelf="flex-end"
        >
          <Image src="./shared/desktop/icon-facebook.svg" />
          <Image src="./shared/desktop/icon-youtube.svg" />
          <Image src="./shared/desktop/icon-twitter.svg" />
          <Image src="./shared/desktop/icon-pinterest.svg" />
          <Image src="./shared/desktop/icon-instagram.svg" />
        </HStack>
      </Flex>
    </Box>
  );
};
