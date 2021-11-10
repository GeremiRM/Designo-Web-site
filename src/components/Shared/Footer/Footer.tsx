import { Box } from "@chakra-ui/react";
import { Wrapper } from "../../General/Wrapper";
import { FooterCard } from "./FooterCard";
import { FooterInfo } from "./FooterInfo";

interface FooterProps {
  ignoreCard: boolean;
}

export const Footer: React.FC<FooterProps> = ({ ignoreCard = false }) => {
  return (
    <Box bg="#1D1C1E" mt="19rem" pb="3rem" textAlign="center">
      <Wrapper>
        {!ignoreCard ? <FooterCard /> : <Box pt="6rem"></Box>}
        <FooterInfo />
      </Wrapper>
    </Box>
  );
};
