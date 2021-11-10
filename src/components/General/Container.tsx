import { Box } from "@chakra-ui/react";
import React from "react";

interface ContainterProps {}

export const Container: React.FC<{}> = ({ children }) => {
  return (
    <Box w="90%" mx="auto" maxW={{ base: "325px", sm: "600px" }}>
      {children}
    </Box>
  );
};
