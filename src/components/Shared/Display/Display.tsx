import { Grid } from "@chakra-ui/react";
import { DisplayCard } from "./DisplayCard";

interface DisplayProps {
  info: any;
}

export const Display: React.FC<DisplayProps> = ({ info }) => {
  const renderDisplayCards = () => {
    return info.map((cardInfo) => <DisplayCard cardInfo={cardInfo} />);
  };

  return (
    <Grid
      templateColumns={{ base: "330px", sm: "100%", md: "repeat(3, 1fr)" }}
      justifyContent="center"
      gap={{ base: "5rem", md: "2.5rem" }}
      fontWeight="400"
      mt="8rem"
    >
      {renderDisplayCards()}
    </Grid>
  );
};
