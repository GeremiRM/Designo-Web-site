import { Box } from "@chakra-ui/react";
import { Wrapper } from "../../General/Wrapper";
import { FooterCard } from "./FooterCard";
import { FooterInfo } from "./FooterInfo";

interface FooterProps {
  ignoreCard: boolean;
}

export const Footer: React.FC<FooterProps> = ({ ignoreCard = false }) => {
  return (
    <Box
      bg="#1D1C1E"
      mt={{ base: "19rem", md: `${ignoreCard && "10rem"}` }}
      pb="3rem"
      textAlign="center"
    >
      <Wrapper>
        {!ignoreCard ? (
          <FooterCard />
        ) : (
          <Box pt={{ base: "6rem", sm: "12rem" }}></Box>
        )}
        <FooterInfo />
      </Wrapper>
    </Box>
  );
};
