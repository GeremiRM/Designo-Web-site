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
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Wrapper } from "../../General/Wrapper";

export const Header: React.FC<{}> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Box>
      <Wrapper>
        <Flex
          justifyContent="space-between"
          height={{ base: "100px", sm: "150px" }}
          px={{ base: "1.5rem", sm: "0" }}
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
                      <Link href="/about">
                        <Text
                          transition="0.25s all ease"
                          _hover={{
                            cursor: "pointer",
                            color: "rgb(237, 128, 105)",
                          }}
                        >
                          Our Company
                        </Text>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/locations">
                        <Text
                          transition="0.25s all ease"
                          _hover={{
                            cursor: "pointer",
                            color: "rgb(237, 128, 105)",
                          }}
                        >
                          Locations
                        </Text>
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="/contact">
                        <Text
                          transition="0.25s all ease"
                          _hover={{
                            cursor: "pointer",
                            color: "rgb(237, 128, 105)",
                          }}
                        >
                          Contact
                        </Text>
                      </Link>
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
            <Link href="/about">
              <Text
                display="inline"
                transition="0.25s all ease"
                _hover={{ cursor: "pointer", color: "rgb(237, 128, 105)" }}
              >
                Our Company
              </Text>
            </Link>
            <Link href="/locations">
              <Text
                display="inline"
                transition="0.25s all ease"
                _hover={{ cursor: "pointer", color: "rgb(237, 128, 105)" }}
              >
                Locations
              </Text>
            </Link>
            <Link href="/contact">
              <Text
                display="inline"
                transition="0.25s all ease"
                _hover={{ cursor: "pointer", color: "rgb(237, 128, 105)" }}
              >
                Contact
              </Text>
            </Link>
          </HStack>
        </Flex>
      </Wrapper>
    </Box>
  );
};
