import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  UnorderedList,
  ListItem,
  Fade,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Wrapper } from "../../General/Wrapper";

export const Header: React.FC<{}> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box w={{ base: "", sm: "680px" }} mx="auto">
      <Flex
        justifyContent="space-between"
        height={{ base: "100px", sm: "150px" }}
        px="1.5rem"
        align="center"
        w="100%"
        textAlign="left"
        zIndex="1000"
        position="relative"
        textTransform="uppercase"
      >
        <Box cursor="pointer">
          <Link href="/">
            <Image src="./shared/desktop/logo-dark.png" w="200px" />
          </Link>
        </Box>
        {/* Mobile Menu */}
        <Box display={{ base: "block", sm: "none" }}>
          <Box pb="1rem">
            <IconButton
              aria-label="navigation links"
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={handleClick}
            ></IconButton>
            <Fade in={isMenuOpen}>
              <Box
                position="absolute"
                w="100%"
                bg="black"
                h={isMenuOpen ? "250px" : "0px"}
                left="0"
                color="white"
                top="100px"
              >
                <UnorderedList
                  display={isMenuOpen ? "flex" : "none"}
                  listStyleType="none"
                  fontSize="24px"
                  py="1rem"
                  pl="1.5rem"
                  textTransform="uppercase"
                  fontWeight="400"
                  height="100%"
                  justifyContent="space-evenly"
                  flexDirection="column"
                  letterSpacing="1.5px"
                >
                  <ListItem>
                    <Link href="/about">Our Company</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/locations">Locations</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="/contact">Contact</Link>
                  </ListItem>
                </UnorderedList>
              </Box>
            </Fade>
          </Box>
        </Box>
        <HStack
          spacing="2.5rem"
          display={{ base: "none", sm: "block" }}
          fontSize="0.9rem"
          letterSpacing="2px"
        >
          <Link href="/about">Our Company</Link>
          <Link href="/locations">Locations</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
};
