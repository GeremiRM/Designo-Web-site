import { Stack } from "@chakra-ui/react";

export const DesignHeader: React.FC<{}> = ({ children }) => {
  return (
    <Stack
      h={{ base: "320px", sm: "260px" }}
      bg="rgb(237, 128, 105)"
      color="white"
      justify="center"
      textAlign="center"
      borderRadius={{ base: "", sm: "20px" }}
      px={{ base: "", sm: "9rem", md: "20rem" }}
    >
      {children}
    </Stack>
  );
};
