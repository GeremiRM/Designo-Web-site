import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Image,
  IconButton,
  UnorderedList,
  ListItem,
  Fade,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export const Header: React.FC<{}> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Flex
      justifyContent="space-between"
      height="100px"
      px="1.5rem"
      align="center"
      w="100%"
      textAlign="left"
      zIndex="1000"
      position="relative"
    >
      <Box cursor="pointer">
        <Link href="/">
          <Image src="./shared/desktop/logo-dark.png" w="200px" />
        </Link>
      </Box>
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
    </Flex>
  );
};
