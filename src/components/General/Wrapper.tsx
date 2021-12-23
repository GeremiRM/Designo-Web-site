import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box
      w={{ sm: "680px", md: "1110px" }}
      mx="auto"
      maxW={{ base: "600px", sm: "none" }}
    >
      {children}
    </Box>
  );
};
